import React, { useEffect } from "react";
import { getallProducts } from "../features/products/productSlice";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  useEffect(() => {
    dispatch(getallProducts());
  }, [dispatch]);
  return (
    <div>
      {" "}
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product._id}>{product.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;
