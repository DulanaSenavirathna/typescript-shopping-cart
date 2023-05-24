import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Store", link: "/store" },
  { name: "About", link: "/about" },
];

export function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
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
      </Container>
    </AppBar>
  );
}
