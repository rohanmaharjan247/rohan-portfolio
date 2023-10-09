import { ExperienceList } from "./experience-list";
import { SysModel } from "./sys-model";

export interface WorkExperienceFields extends SysModel {
  title: string;
  company: string;
  joinedDate: Date;
  endDate: Date;
  currentlyWorking: boolean;
  experiences: Array<ExperienceList>;
}

export interface IWorkExperiece {
  workExperience: { items: Array<WorkExperienceFields> };
}
