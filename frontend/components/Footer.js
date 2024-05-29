import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center flex flex-col bottom-0 w-full">
      <p>Copyright &copy; {new Date().getFullYear()} My Vehicle Selling Website</p>
    </footer>
  );
};

export default Footer;
