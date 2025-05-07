import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow">
    <img src="/assets/top.jpg" alt="Tripbox Logo" className="h-5" />
    <nav className="flex gap-4 text-sm">
      <Link to="/products">Products</Link>
      <Link to="/mybox" className="text-yellow-400 font-bold">My Box</Link>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative w-full h-[100vh] overflow-hidden">
    <img src="/assets/wall.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute top-10 left-4 text-white text-lg">
      <h1 className="text-2xl font-bold mb-2">세부에서 만나는 특별한 추억</h1>
      <Link to="/products" className="bg-white text-black px-4 py-2 rounded">Shop Now</Link>
    </div>
  </section>
);

const ProductList = ({ addToCart }) => {
  const products = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image: `/products/PRD-${String(i + 1).padStart(3, '0')}.jpg`,
    name: `상품 ${i + 1}`,
    price: 100,
  }));

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-2 text-center">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
          <h4 className="text-sm font-semibold mt-1">{product.name}</h4>
          <p className="text-xs">₱{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-1 px-2 py-1 text-xs bg-blue-500 text-white rounded"
          >
            장바구니 담기
          </button>
        </div>
      ))}
    </div>
  );
};

const MyBox = ({ cart, removeFromCart }) => (
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-4">🧺 My Box</h2>
    {cart.length === 0 ? (
      <p>장바구니가 비어 있습니다.</p>
    ) : (
      <>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">₱{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500 text-xs"
            >
              삭제
            </button>
          </div>
        ))}
        <button
          onClick={() => alert('구글 스프레드시트 연동 예정')}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded"
        >
          주문 확정
        </button>
      </>
    )}
  </div>
);

const PopularProducts = ({ addToCart }) => (
  <section className="p-4">
    <h2 className="text-lg font-semibold mb-2">🔥 인기상품</h2>
    <ProductList addToCart={addToCart} />
  </section>
);

const HTWSector = () => (
  <section className="p-4">
    <h2 className="text-lg font-semibold mb-2">How To Workshop</h2>
    <p className="text-sm">워크숍 스타일 클래스와 기념품 제작을 직접 체험해보세요.</p>
  </section>
);

const InfoSector = () => (
  <section className="p-4 text-sm text-gray-600">
    <h2 className="font-semibold">Tripbox 안내</h2>
    <p>막탄 샹그릴라 호텔 맞은편, The Promenade Mactan에 위치해 있습니다.</p>
  </section>
);

const Home = ({ addToCart }) => (
  <>
    <Header />
    <Hero />
    <PopularProducts addToCart={addToCart} />
    <HTWSector />
    <InfoSector />
  </>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/mybox" element={<MyBox cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
