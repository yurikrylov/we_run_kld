import {Card, CardActions, CardContent, CardMedia, Typography, Link, Button} from '@mui/material';

export default function RouteCard({route}) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {route.fotolink}
        title="green iguana"
      />
      <CardContent>
        <Typography sx={{ height: 80 }} gutterBottom variant="h5" component="div">
          {route.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', height:80, overflow:'auto'} }>
          {route.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button         sx={{ height: 80 }} href={route.maplink} variant="text">КАРТА</Button>
      </CardActions>
    </Card>
  );
}