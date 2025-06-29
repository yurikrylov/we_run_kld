import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link  from '@mui/material/Link'; 

export default function RouteCard({route}) {
  return (
    <Card sx={{ maxWidth: 345, height:380}}>
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
        <Link href={route.maplink} underline="none">КАРТА</Link>
      </CardActions>
    </Card>
  );
}