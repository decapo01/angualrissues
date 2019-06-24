import { User } from './User';

export class Issue {

  id: number;

  number: number;

  title: string;

  body: string;

  user: {
    id: number;
    login: string;
  };

  assignee: {
    id: number;
    login: string;
  };
}