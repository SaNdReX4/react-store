"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("სერვერიდან მონაცემების წამოღება ვერ მოხერხდა");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">იტვირთება...</div>;
  if (error) return <div className="p-8 text-center text-red-500">შეცდომა: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
      {products.map((item) => (
        <Link href={`/products/details/${item.id}`} key={item.id} className="group">
          <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition flex flex-col h-full">
            <img src={item.image} alt={item.title} className="h-48 w-full object-contain mb-4" />
            <p className="text-gray-400 text-[10px] mb-1">Ships to Ukraine</p>
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600">
              {item.title}
            </h3>
            <div className="text-yellow-400 text-xs mb-2">
              ★★★★★ <span className="text-gray-400 ml-1">{item.rating?.count} reviews</span>
            </div>
            <p className="text-xl font-bold text-black mt-auto">${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}