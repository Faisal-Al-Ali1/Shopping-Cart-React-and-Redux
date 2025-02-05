import React from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Shopping Cart</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List Section */}
          <div className="lg:col-span-2">
            <ProductList />
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <Cart />
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Shopping Cart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
