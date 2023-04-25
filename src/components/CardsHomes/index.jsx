import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from './image-42.png'

export default function CardsHomes({text}) {
  return (
    <Card sx={{ maxWidth: 216, backgroundColor: "#FEF7FF", padding: "13px" }}>
      <CardMedia
        sx={{ height: 200, borderRadius: "18px" }}
        image={image}
      />
      <CardContent>
        <Typography sx={{fontSize: "20px", lineHeight: "20px", marginTop:"-5rem", color: "#252423"}} variant="body2" color="text.secondary">
          {text}
          
        </Typography>
      </CardContent>

      <CardActions
      sx={{borderTop: "1px solid #CAC4D0", padding: "13px 0px"}}
      >
        <Button sx={{ background: "#6750A4", padding: "11px 25px", color: "white", fontWeight: "bold", borderRadius: "180px"}} size="small">Ler Agora</Button>
      </CardActions>
    </Card>
  );
}