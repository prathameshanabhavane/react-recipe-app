import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
    const [ details, setDeatils ] = useState({});
    const [ activeTab, setActiveTab ] = useState('instructions');
    let params = useParams();
    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log(data);
        setDeatils(data);
    }

    useEffect(() => {
        fetchDetails(params.name);
    },[params.name])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : '' } onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingradients' ? 'active' : '' } onClick={() => setActiveTab("ingradients")}>Ingradients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}
                {activeTab === 'ingradients' && (
                    <ul>
                    {details.extendedIngredients.map((ingredient) => 
                        <li key={ingredient.id}>
                            {ingredient.original}
                        </li>
                    )}
                </ul>
                )}
                
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top:10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }
`;


const Button = styled.button`
    padding: 1rem 2rem; 
    color: #313131;
    background: #fff;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
`;

const Info = styled.div`
    margin-left: 2rem;

    h3 {
        font-size: 1.3rem;
        font-weight: 400;
    }
`;

export default Recipe
