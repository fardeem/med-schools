import list from "./med-school-list.json";

export const medSchoolList: {
  School: string;
  "USNWR Ranking Research": string | number;
  "USNWR Primary Care Ranking": string | number;
  "acceptance rate": string;
  "Public/Private": string;
  "Median MCAT": number;
  "Median GPA": number;
  "% of students OOS": string;
}[] = list;
