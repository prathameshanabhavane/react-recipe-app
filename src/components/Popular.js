import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
        }else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes)); 
            // console.log(data);
            setPopular(data.recipes);
        }
        
    }

  return (
    <Wrapper>
        <h2>Popular Recipes</h2>
        <Splide options={{
            perPage: 4,
            arrows: false,
            drag: 'free',
            gap: '2rem',
            pagination: false,
        }}>
            {popular.map(recipe => 
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
        width: 90%;
        text-align: left;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        align-tems: center;
        justify-content: center;
        margin: 15px auto;
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

export default Popular
