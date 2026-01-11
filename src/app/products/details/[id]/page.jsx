import StarRating from "@/components/StarRating";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    
    <div className="  pt-12.5 pb-8 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-12 items-start mb-10">
        
        
        <div className="w-full md:w-5/12 flex justify-center items-center border border-gray-100 rounded-xl p-8 bg-white">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[400px] object-contain hover:scale-105 transition-transform duration-300" 
          />
        </div>

        
        <div className="w-full md:w-7/12 flex flex-col">
          
          <p className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.15em] mb-2">
            {product.category}
          </p>
          
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            {product.title}
          </h1>

          
          <div className="flex items-center gap-3 mb-6">
            <StarRating rate={product.rating?.rate} />
            <span className="text-gray-400 text-xs font-medium">
              ({product.rating?.count} reviews)
            </span>
          </div>

          
          <p className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-50 pb-6">
            ${product.price}
          </p>

          
          <div className="mb-8">
            <h3 className="text-[11px] font-bold text-gray-400 mb-3 uppercase tracking-widest italic">
              Description
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-200">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                {product.description}
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}