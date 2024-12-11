export type ListItem = {
  _id: string;
  title: string;
  description: string;
  deadline?: Date;
  status: "checked" | "unchecked" | "indeterminate";
};
export type List = {
  _id: string;
  title: string;
  items: ListItem[];
};

export type DTOListItem = {
  title: string;
  description: string;
  deadline?: Date;
  status: "checked" | "unchecked" | "indeterminate";
};

export type DTOList = {
  title: string;
  items: DTOListItem[];
};

export type Item = {
  _id: string;
  title: string;
  date: string;
};

export type DTOItem = {
  title: string;
  date: string;
};

export type Mood = {
  _id: string;
  img: string;
  date: string;
  notes: string;
};

export type DTOMood = {
  img: string;
  date: string;
  notes: string;
};

export type UpdateListItem = {
  listId: string;
  itemId: string;
  item: ListItem;
};
