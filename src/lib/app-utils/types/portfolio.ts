import { SysModel } from "./sys-model";

export interface PorfolioFields extends SysModel {
  title: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
  image: {
    title: string;
    fileName: string;
    url: string;
  };
}

export interface IPortfolio {
  portfolio: { items: Array<PorfolioFields> };
}
