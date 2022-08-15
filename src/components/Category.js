import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <CategoryLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>
            Italian
        </h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>
            American
        </h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>
            Thai
        </h4>
      </CategoryLink>
      <CategoryLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>
            Japanese
        </h4>
      </CategoryLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0rem;
`;

const CategoryLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    height: 6rem;
    width: 6rem;
    cursor: pointer;
    transform:  scale(0.8);
    padding: 10px;

    h4 {
        color: #fff;
        font-size: 1rem;
        margin: 5px 0 0;
    }

    svg {
        color: #fff;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        svg,
        h4 {
            color : #fff;
        } 
    }
`;

export default Category
