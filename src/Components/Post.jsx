import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Post/PostSlice';
import { NavLink } from 'react-router-dom';

const Post = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product); // destructure properly
      console.log(products)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <h2 className="text-center mt-4">Loading...</h2>;
    }

    if (error) {
        return <h2 className="text-center mt-4 text-red-500">Error: {error}</h2>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
           {products?.data?.length > 0 ? (
            products.data.map((product) => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <img 
                        src={`https://admin.refabry.com/storage/product/${product.image}`} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded"
                    />
                    <h3 className="mt-2 font-bold">{product.name}</h3>
                    <p className="text-gray-600">{product.price} BDT</p>
                    <NavLink to={`/product/${product.id}`}><button className='btn btn-primary p-2'>details</button></NavLink>
                </div>
            ))
        ) : (
            <p>No products available</p>
        )}
        </div>
    );
};

export default Post;
