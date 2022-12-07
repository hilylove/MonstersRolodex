import { Monster } from '../../App';
import './card-list.styles.css';
import Card from '../card/card.component';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);
export default CardList;
