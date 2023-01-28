import { booksCategoriesType, Star, Book, Social } from './data.types';
import BookCover from '../assets/imgs/book.png';
import StarIcon from '../assets/icons/star.svg';
import NoStarIcon from '../assets/icons/starout.svg';
import Facebook from '../assets/icons/facebook.svg';
import Inst from '../assets/icons/instagram.svg';
import Vk from '../assets/icons/vkontakte.svg';
import Linkedin from '../assets/icons/linkedin.svg';

export const booksCategories: Array<booksCategoriesType> = [
  { id: 0, link: 'all', title: 'Все книги' },
  { id: 1, link: 'business', title: 'Бизнес-книги', count: 14 },
  { id: 2, link: 'detective', title: 'Детективы', count: 8 },
  { id: 3, link: 'children', title: 'Детские книги', count: 14 },
  { id: 4, link: 'foreign', title: 'Зарубежная литература', count: 2 },
  { id: 5, link: 'history', title: 'История', count: 5 },
  { id: 6, link: 'classic', title: 'Классическая литература', count: 12 },
  { id: 7, link: 'psychology', title: 'Книги по психологии', count: 11 },
  { id: 8, link: 'psychology', title: 'Компьютерная литература', count: 54 },
  { id: 9, link: 'culture', title: 'Культура и искусство', count: 5 },
  { id: 10, link: 'education', title: 'Наука и образование', count: 2 },
  { id: 11, link: 'public', title: 'Публицистическая литература', count: 0 },
  { id: 12, link: 'manuals', title: 'Справочники', count: 10 },
  { id: 13, link: 'fantastic', title: 'Фантастика', count: 12 },
  { id: 14, link: 'humor', title: 'Юмористическая литература', count: 8 },
];

export const Stars: Star = {
  null: 'ещё нет оценок',
  star: StarIcon,
  noStar: NoStarIcon,
};

export const booksCards: Array<Book> = [
  {
    id: 0,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программирования',
    cover: BookCover,
    stars: { star: Stars, count: 0 },
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 1,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    cover: BookCover,
    stars: { star: Stars, count: 5 },
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 2,
    title: 'Грокаем алгоритмы.',
    cover: BookCover,
    stars: { star: Stars, count: 3 },
    about: 'Адитья Бхаргава, 2019',
    status: 'Занята до 03.05',
  },
  {
    id: 3,
    title: 'Грокаем алгоритмы.',
    cover: BookCover,
    stars: { star: Stars, count: 1 },
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    cover: BookCover,
    stars: { star: Stars, count: 3 },
    about: 'Адитья Бхаргава, Патрик Нимайер, 2019',
    status: 'Забронирована',
  },
];

export const SocialIcons: Array<Social> = [
  {
    id: 0,
    link: '',
    icon: Facebook,
    name: 'facebook',
  },
  {
    id: 1,
    link: '',
    icon: Inst,
    name: 'instagram',
  },
  {
    id: 2,
    link: '',
    icon: Vk,
    name: 'vkonakte',
  },
  {
    id: 3,
    link: '',
    icon: Linkedin,
    name: 'linkedin',
  },
];
