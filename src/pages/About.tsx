import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export function About() {
    return <>
    <Typography
        sx={{
          mt: 2,
          letterSpacing: ".1rem",
        }}
      >
        This is the <b>ABOUT PAGE</b> and this web includes functional shopping
        cart. I use React, TypeScript and MUI for build this..
      </Typography>

      <NavLink to="/store">
        <h1>Visit Store Page</h1>
      </NavLink>
    </>
}