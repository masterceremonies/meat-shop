import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { setProducts } from '../Store/productsSlice';
import { useDispatch } from 'react-redux';


import ProductList from '../Components/ProductList/ProductList';
import Spinner from '../Components/Common/Spinner';

import productsData from '../data/Products.json';

const ProductListPage = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setProducts(productsData))
    }, 1000)
  }, [])

  return products.length ? <ProductList products={products} /> : <Spinner />
};

export default ProductListPage;
