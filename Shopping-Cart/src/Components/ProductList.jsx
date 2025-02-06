import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts, setLoading, setError, addToCart } from '../redux/cartSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading()); // Set status to 'loading'
      try {
        const response = await axios.get('https://6784b24f1ec630ca33a5366f.mockapi.io/Products');
        dispatch(setProducts(response.data)); // Store fetched products in Redux
      } catch (error) {
        dispatch(setError(error.message)); // Store error message in Redux
      }
    };

    if (status === 'idle' && products.length === 0) {
      fetchProducts();
    }
  }, [dispatch, status, products.length]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === 'loading') {
    return <div className="text-center py-12"><p className="text-lg text-gray-600">Loading products...</p></div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-12"><p className="text-lg text-red-600">Error: {error || 'Something went wrong'}</p></div>;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Product List</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
