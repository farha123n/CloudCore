import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  
  
  const data=useLoaderData()
  const pd=data.data.data
  const pId = parseInt(id);
  const singleData = pd.find(d => d.id === pId)
  useEffect(() => {
    setProduct(singleData); // Set product data once found
  }, [singleData]);

 

  const handleOrder = () => {
    alert(`Order for ${product.name} placed successfully!`);
  };

  return (
    <div className="p-4">
      {product && (
        <div className="border p-4 rounded shadow">
          <img
            src={`https://admin.refabry.com/storage/product/${product.image}`}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 font-bold text-2xl">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-gray-600 mt-2 font-bold">{product.price} BDT</p>
        <NavLink to="/orderedProduct">  <button 
            onClick={handleOrder} 
            className="btn btn-primary mt-4"
          >
            Order Now
          </button></NavLink>
          <NavLink to="/">
            <button className="btn btn-secondary mt-4 ml-2">Back to Products</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
