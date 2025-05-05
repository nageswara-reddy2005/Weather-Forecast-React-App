import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './InfoBox.css'
import Typography from '@mui/material/Typography';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';

function InfoBox({info}) {
    let Img_url="https://th.bing.com/th/id/OIP.NiofmOoGHUG6M4Rfn3cQKwHaEK?rs=1&pid=ImgDetMain";
    let Rain_url="https://www.wellahealth.com/blog/wp-content/uploads/2021/09/6-ways-to-stay-healthy-during-the-rainy-season.jpg";
    let Cold_url="https://th.bing.com/th/id/OIP.byBLmPYn4JLmrRsWBJPmvAHaEK?rs=1&pid=ImgDetMain";
    let Hot_url="https://www.narcity.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTk4Mjk5NC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYzMjM2ODUzMn0.FHXb4DAzNJDeP7o1XxTdeghPpkEuHm3x_T2w1_Eijtc/image.jpg?width=1245&quality=85&coordinates=0%2C51%2C0%2C51&height=700";

  return (
    <div>
      <h1>Weather-{info.city}
      
      </h1>
      <div className='card'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humdity>80 ? Rain_url : (info.temp>15 ? Hot_url :Cold_url)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}     {info.humdity>80 ? <ThunderstormTwoToneIcon/> : (info.temp>15 ? <WbSunnyTwoToneIcon/> :<AcUnitTwoToneIcon/>)}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>temp :{info.temp}&deg;C</p>
            <p>Humdity :{info.humdity}</p>
            <p>Min temp :{info.temp_min}&deg;C</p>
            <p>Max temp :{info.temp_max}&deg;C</p>
            <p>Temperature feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
     
    </div>
  )
}

export default InfoBox
