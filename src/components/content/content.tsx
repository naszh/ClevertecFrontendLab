import { Star } from '../../constants/data.types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from '../navigation/navigation';
import { TableView } from '../view/tableView/tableView';
import { ListView } from '../view/listView/listView';

export const switchCase = (param: { star: Star; count: number }) => {
  switch (param.count) {
    case 1:
      return (
        <>
          <img src={param.star.star} alt='' />
          <img src={param.star.noStar} alt='' />
          <img src={param.star.noStar} alt='' />
          <img src={param.star.noStar} alt='' />
          <img src={param.star.noStar} alt='' />
        </>
      );
    case 2:
      return (
        <>
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.noStar} alt='' />
          <img src={param.star.noStar} alt='' />
          <img src={param.star.noStar} alt='' />
        </>
      );
    case 3:
      return (
        <>
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.noStar} alt='' />
          <img src={param.star.noStar} alt='' />
        </>
      );
    case 4:
      return (
        <>
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.noStar} alt='' />
        </>
      );
    case 5:
      return (
        <>
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
          <img src={param.star.star} alt='' />
        </>
      );
  }
};

export const Content = () => {
  const { category } = useParams();
  const [view, setView] = useState<'table' | 'list'>('table');
  const [isTable, setIsTable] = useState<boolean>(true);

  useEffect(() => {
    view === 'table' ? setIsTable(true) : setIsTable(false);
  }, [view]);

  return (
    <>
      <Navigation changeView={setView} viewTable={isTable} />
      {isTable ? <TableView /> : <ListView />}
    </>
  );
};
