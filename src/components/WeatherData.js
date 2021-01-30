import React,{useEffect,useState} from 'react'
import WeatherForm from '../components/WeatherForm';
import axios from 'axios';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {fadeIn,fadeOut} from '../Animation'
import mountain2 from '../images/mountain2.jpg'
// Icons
import clouds from '../images/clouds.png';
import mist from '../images/mist.png';
import overcast from '../images/overcast.png';
import partly from '../images/partly-cloudy.png';
import rain from '../images/rainy.png';
import sun from '../images/sun.png';
import snowy from '../images/snowing.png';
import clear from '../images/clear.png';
function WeatherData() {
    const [weatherData,setWeatherData] = useState(null);
    const [userInput,setUserInput] = useState('');
    useEffect(()=>{
        // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Odisha&appid=${process.env.WEATHER_API_KEY}`)
        axios.get(`https://api.weatherapi.com/v1/current.json?key=3771bfdc039944e5b50150845212901&q=India`)
        .then(data=>{
            setWeatherData(data.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const inputHandler =(e)=>{
        setUserInput(e.target.value)
    }
    // SearchHandler
    const searchHandler = ()=>{

        const searchedData = axios.get(`https://api.weatherapi.com/v1/current.json?key=3771bfdc039944e5b50150845212901&q=${userInput}`)
        searchedData.then(data=>{
            setWeatherData(data.data);
        })
        .catch(err=>{
            console.log(err);
        })
        setUserInput('')
    }
    // Change weather icon to diffrent weather condition
    const getIcons = (condition)=>{

         switch(condition){
             case "Sunny":
                 return sun;
             case "Mist":
                 return mist;
             case "Partly cloudy":
                 return partly;
             case "Light rain":
                 return rain;
             case "Cloudy":
                 return clouds;
             case "Light snow":
                 return snowy;
             case "Overcast":
                 return overcast;
             case "Clear":
                 return clear;
             default:
                 return weatherData.current.condition.icon;
         }
    }
    return (
        <StyledDetails>
            <StyledContainer>
             <WeatherForm userInput={userInput} inputHandler={inputHandler} searchHandler={searchHandler} />
             {weatherData &&(
               <StyledTempDetails variants={fadeIn} initial="hidden" animate="show">
                   <motion.h1 variants={fadeOut} initial="hidden" animate="show">{weatherData.current.temp_c} °C</motion.h1>
                   <motion.div className="place">
                       <h2>{weatherData.location.country} <motion.span>{weatherData.location.name}</motion.span> </h2>
                       <h3> {weatherData.location.localtime}</h3>
                   </motion.div>
                   <motion.div variants={fadeOut} initial="hidden" animate="show" className="condition">
                       <img src={getIcons(weatherData.current.condition.text)} alt={weatherData.current.condition.text}/>
                       <h3>{weatherData.current.condition.text}</h3>
                   </motion.div>
                 </StyledTempDetails>
             )}
            </StyledContainer>
        </StyledDetails>
    )
}

const StyledDetails = styled.div`
 min-height:100vh;
 background:#333;
 position:relative;

`
const StyledContainer = styled.div`
 min-height:75vh;
 width:75%;
 background-image:url(${mountain2});
 background-repeat:no-repeat;
 background-size:cover;
 background-position:center;
 position:absolute;
 top:50%;
 left:50%;
 transform:translate(-50%,-50%);
 box-shadow:3rem 3rem 5rem rgba(0,0,0,.4);
`
const StyledTempDetails = styled(motion.div)`
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 width:100%;
 position:absolute;
 left:0;
 bottom:4rem;

  h1{
      font-size:7rem;
  }
  .place{
      h2{
          font-size:3.5rem;
           span{
            margin-left:1.5rem;
               font-size:2.2rem;
               font-weight:700;
               color:#fff;
           }
      }
      h3{
          text-align:center;
          margin-top:1.5rem;
      }
  }
  .condition{
    h3{
        text-align:center;  
        margin-top:1rem;
      }
  }
  @media screen and (max-width:700px){
      flex-direction:column;

      .condition{
         margin-top:1.2rem;
      }
  }
`
export default WeatherData
