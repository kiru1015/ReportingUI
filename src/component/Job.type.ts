export interface IJob {
  id: string;
  summary: string;
  description: string;
  status: string;
  property: string;
  firstName: string;
  lastName: string;
}

export enum PageEnum {
  list,
  add,
  edit,
}
