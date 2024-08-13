import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Rental.css'; // Import CSS for hover effect
import Navbar from './Navbar';
import r1 from './images/r-sonyA7.png';
import r2 from './images/r-Nikon-D7500.png';
import r3 from './images/r-panasonic.png';
import r4 from './images/r-nikonD5600.png';
import r5 from './images/r-sony.webp';
import r6 from './images/r-canon.png';
import r7 from './images/r-uhd.png';
import r8 from './images/r-dji.png';
import Footer from './footer';
import { Link } from "react-router-dom";


const rentalCars = [
  { 
    id: 1, 
    name: "Sony Alpha A7 ", 
    image: [r1], 
    price: "₹1499 / day", 
    description: "Sony Alpha A7 IV Mirrorless Camera with 28-70mm Lens Kit.",
  },
  { 
    id: 2, 
    name: "Nikon D7500", 
    image: [r2], 
    price: "₹999 / day", 
    description: "Sony Alpha ILCE 6100L Mirrorless DSLR Camera with 16-50mm Lens.",
  },
  { 
    id: 3, 
    name: "Panasonic Lumix ", 
    image: [r3], 
    price: "₹1199 / day", 
    description: "Panasonic LUMIX S9 Mirrorless Camera with 20-60mm Lens.",
  },
  { 
    id: 4, 
    name: "Nikon D5600 DSLR ", 
    image :[r4], 
    price: "₹899 / day", 
    description: "Nikon D5600 with 18-55mm+70-300mm , 3X Optical Zoom, Black."
  },
  { 
    id: 5, 
    name: "Sony Alpha ILCE-6100Y ", 
    image: [r5], 
    price: "₹1800 / day", 
    description: "Sony Alpha ILCE-6100Y 24.2MP Mirrorless Digital SLR Camera with 16-50 mm and 55-210 mm Lenses.",
  },
  { 
    id: 6, 
    name: "Canon 5D MARK IV DSLR camera", 
    image: [r6],
    price: "₹3099 / day", 
    description: "Used Canon EOS 5D Mark IV 30.4 Mp Camera with 24-105mm is II USM Lens CMOS · With Video.",
  },
  { 
    id: 7, 
    name: "UHD 4k Video Camera ", 
    image:[r7], 
    price: "₹2599 / day",
    description: "4k Video Camera Camcorder With 18x Digital Zoom 64mp Digital Camera High Definition · 4K.",
  },
  { 
    id: 8, 
    name: "DJI Phantom 3  Drone Camera", 
    image: [r8], 
    price: "₹2099 / day", 
    description: "Digital Camera Pixel: 16 MP,4K Full HD BrandDJI Body Material: Carbon Fiber Controlling Range:8 Km.",
  },
  // Other camera objects
];

function Rental() {
  return (
    <div>
      <Navbar />
      <div className='body'>
        <Container className="mt-4 mb-4">
        <br></br><br></br>
          <Typography variant="h4" component="h1" gutterBottom>
            <center>Camera Rent</center>
          </Typography>
          <br></br>
          <Grid container spacing={4} justifyContent="center">
            {rentalCars.map((car) => (
              <Grid item key={car.id} xs={12} sm={6} md={3}>
                <Box className="card-container">
                  <Card
                    sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                    className="hover-card"
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={car.image}
                      alt={car.name}
                      className="card-media"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {car.name}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {car.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {car.description}
                      </Typography>
                      <br></br>
                          <Button
                        variant="contained"
                        sx={{ backgroundColor: '#000', color: 'white', '&:hover': { backgroundColor: '#FF8C00' } }}
                        className="rent-button"
                        component={Link}
                        to={`/RentForm/${encodeURIComponent(car.name)}/${encodeURIComponent(car.price)}`}
                           >
                        Rent Now
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container><br></br><br></br>
        <Footer />
      </div>
    </div>
  );
}

export default Rental;
