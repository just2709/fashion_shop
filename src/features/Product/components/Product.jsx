import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAILPLACEHOLDER } from "../../../constants/common";
import { useNavigate, createSearchParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumnailUrl = product.image ? product.image : THUMBNAILPLACEHOLDER;

  const navigate = useNavigate();
  const handleClick = () => {
    console.log(product.id);

    navigate({
      pathname: `/products/${product.id}`,
    });
  };
  return (
    <Box
      sx={{ m: 2, border: "1px solid grey[50]" }}
      padding={1}
      onClick={handleClick}
      className='hover:border-red-500 hover:scale-105 rounded-xl transition duration-75 grid place-items-center border group'>
      <img src={thumnailUrl} alt='' className='w-full h-auto object-scale-down' />
      <Paper elevation={2} className='absolute hidden group-hover:block'>
        <IconButton>
          <FavoriteIcon color="primary"/>
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon color="primary"/>
        </IconButton>
      </Paper>
      <Box className='text-center self-end'>
        <Typography variant='body2'>{product.title}</Typography>
        <Typography variant='body2' className='text-red-600'>
          <Box component='span' className='text-base font-bold'>
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </Box>
        </Typography>
        <StarRatings rating={product.rating.rate} starRatedColor='gold' numberOfStars={5} name='rating' starDimension='20px' />
      </Box>
    </Box>
  );
}

export default Product;
