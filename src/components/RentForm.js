import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Container, Typography,Card, CardMedia,CardContent, Button} from "@mui/material";

function RentForm() {
  const { name, price } = useParams();

  return (
    <div>
      <Navbar />
      <div className="body">
        <Container className="mt-4 mb-4">
          <center>
            <br></br>
            <br></br>
            <br></br> <br></br>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor:"#e7c072",}}
              className="hover-card" 
            >
              <CardMedia />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Camera Details
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Camera Name: {decodeURIComponent(name)}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Price: {decodeURIComponent(price)}
                </Typography>
              </CardContent>
            </Card>
          <br></br>
          <Button variant="contained" color="primary" component={Link} to="./Cart" sx={{ backgroundColor: '#000', color: 'white', '&:hover': { backgroundColor: '#FF8C00' } }}>
          Confirm
          </Button>
          </center>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default RentForm;
