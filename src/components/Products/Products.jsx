import React from "react";

const Products = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Product/Services</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="!#" className="block">
              <div className="h-48 bg-gray-200">
                {/* Product image will go here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  fugiat porro quas ducimus
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis
                </p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="!#" className="block">
              <div className="h-48 bg-gray-200">
                {/* Product image will go here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  fugiat porro quas ducimus
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis
                </p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="!#" className="block">
              <div className="h-48 bg-gray-200">
                {/* Product image will go here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  fugiat porro quas ducimus
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
