import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* <span>LOGO</span> */}
        <p className="text-slate-600">
          Created by{" "}
          <a
            href="https://arielayala.bio.link/"
            target="_blank"
            className="text-primary-500 hover:text-primary-600"
          >
            Ariel Ayala
          </a>
          , inpired by{" "}
          <a
            href="https://github.com/judygab/nextjs-portfolio"
            target="_blank"
            className="text-primary-500 hover:text-primary-600"
          >
            judygab
          </a>
          .
        </p>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
