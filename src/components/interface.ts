export interface IRoundbtn {
  name: string;
  path: string;
  transition?: boolean;
  delay?: number;
}

export interface IToggleFunc {
  toggleAside: () => void;
}
