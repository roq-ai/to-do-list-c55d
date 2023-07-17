import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  to_do_list_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
