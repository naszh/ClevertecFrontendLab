import { booksCategoriesType } from './data.types';
import Book from '../assets/imgs/book.png';

export const booksCategories: Array<booksCategoriesType> = [
  { link: 'all', title: 'Все книги' },
  { link: 'business', title: 'Бизнес-книги', count: 14 },
  { link: 'detective', title: 'Детективы', count: 8 },
  { link: 'children', title: 'Детские книги', count: 14 },
  { link: 'foreign', title: 'Зарубежная литература', count: 2 },
  { link: 'history', title: 'История', count: 5 },
  { link: 'classic', title: 'Классическая литература', count: 12 },
  { link: 'psychology', title: 'Книги по психологии', count: 11 },
  { link: 'psychology', title: 'Компьютерная литература', count: 54 },
  { link: 'culture', title: 'Культура и искусство', count: 5 },
  { link: 'education', title: 'Наука и образование', count: 2 },
  { link: 'public', title: 'Публицистическая литература', count: 0 },
  { link: 'manuals', title: 'Справочники', count: 10 },
  { link: 'fantastic', title: 'Фантастика', count: 12 },
  { link: 'humor', title: 'Юмористическая литература', count: 8 },
];

export const Stars: any = {
  null: 'ещё нет оценок',
  star: '../../assets/imgs/star.png',
};

export const booksCards: any = [
  {
    id: 0,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программирования',
    cover: Book,
    stars: Stars,
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 1,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    cover: Book,
    stars: Stars,
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 2,
    title: 'Грокаем алгоритмы.',
    cover: Book,
    stars: Stars,
    about: 'Адитья Бхаргава, 2019',
    status: 'Занята до 03.05',
  },
  {
    id: 3,
    title: 'Грокаем алгоритмы.',
    cover: Book,
    stars: Stars,
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    cover: Book,
    stars: Stars,
    about: 'Адитья Бхаргава, Патрик Нимайер, 2019',
    status: 'Забронирована',
  },
];

export const SocialIcons = [
  {
    id: 0,
    link: '',
    icon: '',
    name: 'facebook',
  },
  {
    id: 0,
    link: '',
    icon: '',
    name: 'instagram',
  },
  {
    id: 0,
    link: '',
    icon: '',
    name: 'vkonakte',
  },
  {
    id: 0,
    link: '',
    icon: '',
    name: 'linkedin',
  },
];
