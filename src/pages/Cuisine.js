import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

export default function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`);
        const data = await api.json();
        console.log(data);
        setCuisine(data.results)
    }

    useEffect(() => {
        getCuisine(params.type); 
        // console.log(params.type);

    }, [params.type])


  return (
    <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      {cuisine.map(item => {
        return(
            <Card>
                <img src={item.image} alt={item.title} />
                <h4>
                    {item.title}
                </h4>
            </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;