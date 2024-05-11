import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function SearchBox({update}){
     let [city,setCity]=useState("");
     let [error,setErr]=useState(false);
     let api='https://api.openweathermap.org/data/2.5/weather?q=';
     let key='&appid=8f7bb3d23f012866e7f06a6da886aef9';
     
     let getResponse= async ()=>{
      try{
        let response= await fetch(`${api}${city}${key}&units=metric`);
        let resJson=await response.json();
      //   console.log(resJson);

        let result={
         city:city,
         temp:resJson.main.temp,
         tempMin:resJson.main.temp_min,
         tempMax:resJson.main.temp_max,
         humidity:resJson.main.humidity,
         feels_like:resJson.main.feels_like,
         weather:resJson.weather[0].description,
        }
        console.log(result);
        return result;
     }
     catch(err){
      
      // console.log("hello");
      throw err;
     }
   }

     function handleCity(e){
        setCity(e.target.value);
     }

     let handleSubmit= async (e)=>{
        e.preventDefault();
        try{
        console.log(city);
        setCity("");
        let newInfo=await getResponse();
        update(newInfo);
        setErr(false);}
        catch(err){
         console.log("err");
         setErr(true);
        }
     }

   return(
    <div className="search">
       
     <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
        <br /> <br />
        <Button variant="contained" type='submit'>Search</Button>
        {error &&  <Alert id='alert' severity="error">
        <AlertTitle>Error</AlertTitle>
        City doesn't exist in our API.
      </Alert>}
    </form>
    
    </div>);
}