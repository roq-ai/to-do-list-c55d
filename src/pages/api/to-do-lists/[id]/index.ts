import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { toDoListValidationSchema } from 'validationSchema/to-do-lists';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.to_do_list
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getToDoListById();
    case 'PUT':
      return updateToDoListById();
    case 'DELETE':
      return deleteToDoListById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getToDoListById() {
    const data = await prisma.to_do_list.findFirst(convertQueryToPrismaUtil(req.query, 'to_do_list'));
    return res.status(200).json(data);
  }

  async function updateToDoListById() {
    await toDoListValidationSchema.validate(req.body);
    const data = await prisma.to_do_list.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteToDoListById() {
    const data = await prisma.to_do_list.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
