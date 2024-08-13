import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import './MainPage.css'; // Import CSS for hover effect
import Footer from './footer';
import img1 from './images/g-portrait.png';
import img2 from './images/g-wedding.png';
import img3 from './images/g-birthday.png';
import img4 from './images/g-festival.png';
import img5 from './images/g-fashion.png';
import img6 from './images/g-family.png';
import img7 from './images/g-maternity.png';
import img8 from './images/g-stylish.png';


// Array of items to display on the main page
const items = [
  { id: 1, name: "Portraits", image: [img1], description: "High-quality portrait photography to capture your personality." },
  { id: 2, name: "Weddings shoot", image: [img2], description: "Capture your special day with stunning wedding photography." },
  { id: 3, name: "Birthday party", image: [img3], description: "Memorable birthday party photography for all ages." },
  { id: 4, name: "Festival shoot", image: [img4], description: "Capture the essence of Festival with beautiful photos."},
  { id: 5, name: "Fashions", image: [img5], description: "Stylish fashion photography for models and brands." },
  { id: 6, name: "Family", image: [img6], description: "Beautiful family photography to cherish forever."},
  { id: 7, name: "Maternity Clothing", image:[img7], description: "Capture the joy of expecting mothers with maternity photography."},
  { id: 8, name: "Stylish Portrait", image: [img8], description: "Unique and stylish portraits for any occasion."},
];

function MainPage() {
  const [open, setOpen] = useState(false); // State for modal open/close
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item in modal
  const [likedItems, setLikedItems] = useState({}); // State for liked items
  const [ratings, setRatings] = useState({}); // State for ratings of items

  // Function to open the modal with the selected item
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  // Function to toggle the liked state of an item
  const handleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Function to handle rating of an item
  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                className="hover-card" // CSS class for hover effect
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Rating
                    name={`rating-${item.id}`}
                    value={ratings[item.id] || 0}
                    onChange={(event, newValue) => handleRating(item.id, newValue)}
                  />
                </CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", m: 2 }}>
                  <Button 
                    variant="contained" 
                    className="view-button" // Add this class for button styles
                    onClick={() => handleOpen(item)}
                    sx={{ backgroundColor: '#000', color: 'white', '&:hover': { backgroundColor: '#FF8C00' } }}
                  >
                    View
                  </Button>
                  <IconButton onClick={() => handleLike(item.id)} color={likedItems[item.id] ? "error" : "default"}>
                    {likedItems[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: '#e7c072', boxShadow: 24, p: 4 }}>
          {selectedItem && (
            <>
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedItem.name}
              </Typography>
              <CardMedia
                component="img"
                height="250"
                image={selectedItem.image}
                alt={selectedItem.name}
              />
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedItem.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
      <Footer/>
    </div>
  );
}

export default MainPage;
