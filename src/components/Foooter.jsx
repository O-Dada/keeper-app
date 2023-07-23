import React from "react";

let datee = new Date();
let currentYear = datee.getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
