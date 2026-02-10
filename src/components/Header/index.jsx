import React from "react";

const Header = () => {
  return (
    <header className="bg-rgb(88, 28, 135), text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">JobPortal</h1>
        <h2 className="text-xl md:text-2xl mb-6">
          Your ideal job is waiting for you
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Get latest job openings that best suits you
        </p>
      </div>
    </header>
  );
};

export default Header;
