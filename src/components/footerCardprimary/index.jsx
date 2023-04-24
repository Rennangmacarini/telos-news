import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

export default function FooterCardprimary({title, image, description}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#F7F2FA"}}>
      <div style={{ display: "flex" }}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        <CardHeader
          title="Leia também"
        />
      </div>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
        <Typography sx={{display: "flex", justifyContent: "end"}}> 
        <Button sx={{ padding: "10px 24px", backgroundColor: "#6750A4", color: "white", fontWeight: "bold", borderRadius: "140px"}} href="#contained-buttons">
          ler agora
        </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}