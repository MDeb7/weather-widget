import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {

    const INIT_URL = 
        "https://images.unsplash.com/photo-1599059021750-82716ae2b661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhenklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL = 
        "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = 
        "https://images.unsplash.com/photo-1518608159586-91611bc3a977?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = 
        "https://images.unsplash.com/photo-1686307118067-e29926ee400d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbm55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image = {
                    (info.humidity > 80)
                    ? RAIN_URL
                    : (info.temp > 20)
                    ? HOT_URL
                    : COLD_URL
                }
                title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city} {
                    (info.humidity > 80)
                    ? <ThunderstormIcon />
                    : (info.temp > 20)
                    ? <WbSunnyIcon />
                    : <AcUnitIcon />
                }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p> 
                        <p>Humidity = {info.humidity}</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>                      
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}