import { ToDoListInterface } from 'interfaces/to-do-list';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  status: string;
  to_do_list_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  to_do_list?: ToDoListInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  to_do_list_id?: string;
  user_id?: string;
}
