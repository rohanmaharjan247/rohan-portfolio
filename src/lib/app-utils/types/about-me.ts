import { SysModel } from "./sys-model";

export interface AboutMeFields extends SysModel {
  title: string;
  description: string;
}

export interface IAboutMe {
  aboutMe: AboutMeFields;
}
