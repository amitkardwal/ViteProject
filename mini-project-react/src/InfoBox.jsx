import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';
export default function InfoBox({info}){
    let INIT_URL="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://www.skymetweather.com/content/wp-content/uploads/2024/01/Winter-in-Punjab-FB-1-1.jpg";
    let HOT_URL="https://www.northlincs.gov.uk/wp-content/uploads/2019/07/Sunshine-for-web.jpg";
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const getWeatherIcon = () => {
        if (info.humidity > 80) {
            return <ThunderstormIcon />;
        } else if (info.temp > 15) {
            return <WbSunnyIcon />;
        } else {
            return <AcUnitIcon />;
        }
    };
   
    return(
        <div className="InfoBox">
           
            <Card sx={{ maxWidth: 345 }}>
            <div className="cardContainer">
   
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity >80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
        {info.city} {getWeatherIcon()}
        </Typography>
        <Typography variant="body2" component="span" sx={{ color: 'text.secondary'  }}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Temp Max={info.tempMax}</p>
        <p>Temp Min ={info.tempMin}</p>
         <p>The Weather can be described as <i>{info.weather}</i> and  feels like {info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
                    
    </div>
   
    </Card>
   
  
        </div>
    )

}