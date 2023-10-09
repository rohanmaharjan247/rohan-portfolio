import type { PersonalInfoListFields } from "./personal-info-list";

export interface PersonalInfoFields {
  fullName: string;
  jobTitle: string;
  subList?: Array<PersonalInfoListFields>;
  profileImage: {
    fileName: string;
    title: string;
    url: string;
  };
  email: string;
  address: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  slogan: string;
}

export interface IPersonalInfo {
  personalInfo: PersonalInfoFields;
}
