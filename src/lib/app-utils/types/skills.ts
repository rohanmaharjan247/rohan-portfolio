import { SysModel } from "./sys-model";

export interface SkillsFields extends SysModel {
  title: string;
  skills: { items: Array<SkillSetFields> };
}

export interface SkillSetFields extends SysModel {
  name: string;
  percentage: number;
}

export interface ISkills {
  mySkills: { items: Array<SkillsFields> };
}
