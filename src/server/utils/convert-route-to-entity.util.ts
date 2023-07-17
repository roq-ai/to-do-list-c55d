const mapping: Record<string, string> = {
  organizations: 'organization',
  tasks: 'task',
  'to-do-lists': 'to_do_list',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
