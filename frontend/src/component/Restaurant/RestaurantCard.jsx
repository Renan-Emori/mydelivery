import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Card, Chip, IconButton} from '@mui/material'
;
const RestaurantCard = () => {
  return (
    <Card className="m-5 w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/194/2021/02/22084630/Takumi_Atmosphere_2-3-724x357.jpg"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space y-4">
          <p className="font-semibold text-lg">Japanese Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all? Dive into out global fla...
          </p>
        </div>
      </div>
      <div>
        <IconButton>
            {true? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

export default RestaurantCard;
