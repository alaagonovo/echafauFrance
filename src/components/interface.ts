export interface IRoundbtn {
  name: string;
  path: string;
  transition?: boolean;
  delay?: number;
}

export interface IToggleFunc {
  toggleAside: () => void;
}

export interface IMaintitle {
  title: string;
  bio: string;
  bio_Color?: string;
  setPadding?: boolean;
}

export interface IPcard {
  image: string;
  title: string;
  date: IDate;
}
interface IDate {
  day: string;
  month: string;
  year: string;
}
