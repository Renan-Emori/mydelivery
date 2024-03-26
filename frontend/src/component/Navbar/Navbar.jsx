import React from "react";
import { IconButton, Avatar, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors/";
import {  ShoppingCart } from "@mui/icons-material";
import './Navbar.css'
import Box from '@mui/material/Box';

export const Navbar = () => {
  return (
    <Box className="px-5 sticky top-0  z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          Comida nham nham
        </li>
      </div>

      <div className="flex item-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div>
          <Avatar sx={{ bgcolor: "white", color: pink.A400 }}></Avatar>
        </div>

        <div>
        <IconButton>
          <Badge color='primary' badgeContent={3}>
            <ShoppingCart sx={{ fontSize: "1.5rem" }} />  
          </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
