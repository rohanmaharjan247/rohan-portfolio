import { SysModel } from "./sys-model";

export interface EducationHistoryFields extends SysModel {
  collegeName: string;
  universityName: string;
  degree: string;
  startedDate: Date;
  endDate: Date;
  currentlyStudying: boolean;
}

export interface IEducation {
  education: { items: Array<EducationHistoryFields> };
}
