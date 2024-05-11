import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weather(){
    
    let [data,updateData]=useState(
        {
            city:"Default",
            temp:0,
            tempMin:0,
            tempMax:0,
            humidity:0,
            feels_like:0,
            weather:"normal",
           }
    );

    let update=(newInfo)=>{
        updateData(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App made by Nilesh</h2>
             <SearchBox update={update}/>
             <InfoBox info={data}/>
             
        </div>
    );
}