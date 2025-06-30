import {Card, CardActions, CardContent, CardMedia, Typography, Link, Button} from '@mui/material';

export default function RouteCard({route}) {


  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {route.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {route.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={route.maplink} variant="text">КАРТА</Button>
      </CardActions>
    </Card>
  );
}