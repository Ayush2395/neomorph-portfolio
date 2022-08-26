import React from "react";
import { FaBootstrap } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary py-3 mb-0 text-center mt-7">
        <p>&copy; 2022, All rights are reserved</p>
        <p>
          Design by Ayush using <FaBootstrap size='25px' />
        </p>
      </footer>
    </>
  );
}
