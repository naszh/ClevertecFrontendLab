import { booksCategoriesType, Star, Book, Social, UsersType } from './data.types';
import BookCover from '../assets/imgs/book.png';
import StarIcon from '../assets/icons/star.svg';
import NoStarIcon from '../assets/icons/starout.svg';
import Facebook from '../assets/icons/facebook.svg';
import Inst from '../assets/icons/instagram.svg';
import Vk from '../assets/icons/vkontakte.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Avatar from '../assets/imgs/user.png';

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
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
    cover: BookCover,
    stars: { star: Stars, count: 4 },
    about: 'Адитья Бхаргава, 2019',
    status: 'Забронировать',
  },
  {
    id: 1,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    cover: null,
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
    stars: { star: Stars, count: 0 },
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

export const Users: Array<UsersType> = [
  {
    id: 0,
    name: 'Иван Иванов',
    avatar: Avatar,
    date: '5 января 2019',
    stars: { star: Stars, count: 4 },
    comment: null,
  },
  {
    id: 1,
    name: 'Иван Иванов',
    avatar: Avatar,
    date: '5 января 2019',
    stars: { star: Stars, count: 3 },
    comment:
      'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
  },
  {
    id: 2,
    name: 'Иван Иванов',
    avatar: Avatar,
    date: '5 января 2019',
    stars: { star: Stars, count: 4 },
    comment: null,
  },
];
