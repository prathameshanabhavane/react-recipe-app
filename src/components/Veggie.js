import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem('Veggie');

        if(check){
            setVeggie(JSON.parse(check));
        }else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('Veggie', JSON.stringify(data.recipes)); 
            // console.log(data);
            setVeggie(data.recipes);
        }
        
    }

  return (
    <Wrapper>
        <h2>Veggie Recipes</h2>
        <Splide options={{
            perPage: 3,
            arrows: false,
            drag: 'free',
            gap: '2rem',
            pagination: false,
        }}>
            {veggie.map(recipe => 
            <SplideSlide key={recipe.id}>
                <Card>
                    <Link to={`/recipe/${recipe.id}`}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h3>{recipe.title}</h3>
                        <Gradient />
                    </Link>
                </Card>   
            </SplideSlide> 
            )}
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem
`;

const Card = styled.div`
    min-height: auto;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        border-radius: 2rem;
        postion: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        opbject-fit: cover;
    }

    h3 {
        position: absolute;
        z-index: 9;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        color: #fff;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        align-tems: center;
        justify-content: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
`;

export default Veggie;
