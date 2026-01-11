"use client";
import { useState, useEffect } from "react";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.map((item) => ({ ...item, quantity: 1 })));
      });
  }, []);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          if (newQty >= 1 && newQty <= 10) return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    const confirmDelete = confirm("ნამდვილად გსურთ კალათიდან წაშლა?");
    if (confirmDelete) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-10 max-w-5xl mx-auto min-h-screen pt-[100px]">
      <h1 className="text-4xl text-gray-600 font-light mb-10 text-center">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">თქვენი კალათა ცარიელია</p>
        </div>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead className="border-b text-gray-400 text-[10px] uppercase tracking-widest">
            <tr>
              <th className="pb-4">Product</th>
              <th className="pb-4 text-center">Quantity</th>
              <th className="pb-4 text-right">Price</th>
              <th className="pb-4 text-right">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              
              <CartItem 
                key={item.id} 
                item={item} 
                updateQty={updateQty} 
                removeItem={removeItem} 
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}