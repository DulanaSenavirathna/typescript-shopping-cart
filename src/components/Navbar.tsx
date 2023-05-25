import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

const pages = [
  { name: "Home", link: "/" },
  { name: "Store", link: "/store" },
  { name: "About", link: "/about" },
];

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters>
            {pages.map((page) => (
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  letterSpacing: ".1rem",
                }}
              >
                <NavLink
                  to={page.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page.name}
                </NavLink>
              </Typography>
            ))}
          </Toolbar>
          {cartQuantity > 0 && (

            <Toolbar disableGutters>
            <Stack spacing={2} direction="row">
              <IconButton color="inherit" aria-label="add to shopping cart">
              <Badge badgeContent={cartQuantity} color="success">
                  <ShoppingCartIcon onClick={openCart} />
                </Badge>
              </IconButton>
            </Stack>
          </Toolbar>
            )}
        </Box> 
      </Container>
    </AppBar>
  );
}
