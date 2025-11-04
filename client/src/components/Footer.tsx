import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>2024 EDROH. All rights Reserved.</p>
      <div className="footer_links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}
            className="footer__link"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
