export type ListItem = {
  title: string;
  description: string;
  deadline?: Date;
  status: "checked" | "unchecked" | "indeterminate";
};
export type List = {
  id: string;
  type?: "check" | "todo";
  title: string;
  items: ListItem[];
};

export type Item = {
  id: string;
  title: string;
  date: string;
};

export type Mood = {
  id: string;
  img: string;
  date: string;
  notes: string;
};
