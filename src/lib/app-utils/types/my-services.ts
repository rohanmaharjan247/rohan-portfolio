import { SysModel } from "./sys-model";

export interface MyServicesFields extends SysModel {
  title: string;
  description: string;
  iconName: string;
}

export interface IMyServices {
  myServices: { items: Array<MyServicesFields> };
}
