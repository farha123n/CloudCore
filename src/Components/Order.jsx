import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    c_name: '',
    c_phone: '',
    address: '',
    product_ids: '',
    s_product_qty: '',
    courier: '',
    cod_amount: '',
    delivery_charge: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://admin.refabry.com/api/public/order/create', formData);
      console.log('Order Success:', res.data);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Order Failed:', error);
      alert('Order failed!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input type="text" name="c_name" placeholder="Customer Name" value={formData.c_name} onChange={handleChange} className="input" />

        <input type="text" name="c_phone" placeholder="Phone Number" value={formData.c_phone} onChange={handleChange} className="input" />

        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input" />

        <input type="text" name="product_ids" placeholder="Product IDs (e.g., 1,2,3)" value={formData.product_ids} onChange={handleChange} className="input" />

        <input type="text" name="s_product_qty" placeholder="Quantities (e.g., 2,1,3)" value={formData.s_product_qty} onChange={handleChange} className="input" />

        <input type="text" name="courier" placeholder="Courier Name" value={formData.courier} onChange={handleChange} className="input" />

        <input type="text" name="cod_amount" placeholder="COD Amount (e.g., 1500)" value={formData.cod_amount} onChange={handleChange} className="input" />

        <input type="text" name="delivery_charge" placeholder="Delivery Charge (e.g., 80)" value={formData.delivery_charge} onChange={handleChange} className="input" />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
