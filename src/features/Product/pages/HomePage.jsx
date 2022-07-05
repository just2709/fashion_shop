import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../../api/productApi";
import { Container, Paper, Typography } from "@mui/material";
import Product from "./../components/Product";
import Slide from "../components/Slide";
import WhyUs from './../components/WhyUs';

HomePage.propTypes = {};

function HomePage(props) {
  const [loading, setLoading] = useState(true);

  // const [pagination, setPagination] = useState({
  //   limit: 9,
  //   total: 10,
  //   page: 1,
  // });
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <>
    <Slide/>
      <Container className='mt-20'>
        <WhyUs/>
        <Typography variant='h3' className='text-center'>List Product</Typography>
        <Paper elevation={0} className='p-4 grid grid-cols-4 pb-20'>
          {productList.map((product) => (
            // <Grid className='relative grid' item key={product.id}>
            <Product key={product.id} product={product} />
            // </Grid>
          ))}
        </Paper>
      </Container>
    </>
  );
}

export default HomePage;
