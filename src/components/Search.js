import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [searchInput, setSearchInput ] = useState('');
    const navigate = useNavigate();

    const SearchHandler = (e) => {
        // console.log(e.target.value);
        setSearchInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${searchInput}`)
    }

    return (
        <div>
            <FormStyle onSubmit={submitHandler}>
                <div>
                    <FaSearch></FaSearch>
                    <input type="text" value={searchInput} onChange={SearchHandler} />
                </div>
            </FormStyle>
        </div>
    )
}

const FormStyle = styled.form`
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;

    div {
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        border-radius: 1rem;
        outline: none;
        padding: 15px;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export default Search;
