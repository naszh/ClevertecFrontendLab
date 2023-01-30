export interface booksCategoriesType {
  id: number;
  link: string;
  title: string;
  count?: number;
}

export interface Star {
  null: string;
  star: string;
  noStar: string;
}

export interface Book {
  id: number;
  title: string;
  cover: string | null;
  stars: { star: Star; count: number };
  about: string;
  status: string;
}

export interface Social {
  id: number;
  link: string;
  icon: string;
  name: string;
}

export interface UsersType {
  id: number;
  name: string;
  avatar: string;
  date: string;
  stars: { star: Star; count: number };
  comment: string | null;
}
