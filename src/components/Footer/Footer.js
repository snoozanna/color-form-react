import React from "react";
import { ColorsContext } from "./../../contexts/colors.context";
import "./Footer.css";

function Footer() {
  const { useContext } = React;
  const { resetForm } = useContext(ColorsContext);

  return (
    <div className="Footer">
      <footer className="Footer-footer">
        <button className="Footer-item btn" onClick={() => resetForm()}>
          Reset
        </button>
      </footer>
    </div>
  );
}

export default Footer;
