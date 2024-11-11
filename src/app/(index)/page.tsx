"use client";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";

export default function IndexPage() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
        <Typography variant="h1">Hello, World!</Typography>
      </div>
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        {/* ここで調整してる！！！ */}
        <Box pb="env(safe-area-inset-bottom)" sx={{ bgcolor: "red" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </Paper>
    </>
  );
}
