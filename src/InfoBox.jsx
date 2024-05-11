import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import "./infoBox.css";
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';

export default function InfoBox({info}){

    let cold="https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let hot="https://images.unsplash.com/photo-1672745093214-3fb65f2be5a4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    
    return(
        <div className='infoBox'>
            <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain:info.temp>15?hot:cold}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormTwoToneIcon />:info.temp>15?<WbSunnyTwoToneIcon />:<AcUnitTwoToneIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature= {info.temp}&deg;C</p>
          <p>Humidity= {info.humidity}</p>
          <p>Min Temp= {info.tempMin}&deg;C</p>
          <p>Max Temp= {info.tempMax}&deg;C</p>
          <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
          
        </Typography>
      </CardContent>
     
       </Card>
       </div>

  
        </div>
    );
}