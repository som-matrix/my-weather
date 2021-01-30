import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
function WeatherForm({userInput,inputHandler,searchHandler}) {
    
    return (
        <StyledInput>
            <h1>@weather.com</h1>
            <div className="input-details">
             <input value={userInput} onChange={inputHandler} type="text" placeholder="Search Here..."/>
             <FontAwesomeIcon className="search-bar" onClick={searchHandler} icon={faSearch} size="2x"></FontAwesomeIcon>
            </div>
        </StyledInput>
    )
}

const StyledInput = styled.div`
 min-height:10vh;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:2rem 4rem;
 @media screen and (max-width:700px){
      flex-direction:column;

      input{
          margin-top:1.5rem;
      }
  }
 .input-details{
     input{
         width:80%;
         border:none;
         outline:none;
         padding:1.5rem 1.8rem;
         box-shadow:3rem 3rem 5rem rgba(0,0,0,.4);
         border-radius:1rem;
         margin-right:1.2rem;
     }
     .search-bar{
         text-align:center;
         color:#fff;
     }
     
  }

`
export default WeatherForm
