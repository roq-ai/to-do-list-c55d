import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ToDoListInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  _count?: {
    task?: number;
  };
}

export interface ToDoListGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
