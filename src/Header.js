import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import reducer from "./reducer";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />

        <div className="header__SearchIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionone">Hello Govind</span>
              <span className="header__optiontwo">Sign In</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionone">Returns</span>
              <span className="header__optiontwo">& Orders</span>
            </div>
          </Link>

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionone">Your</span>
              <span className="header__optiontwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <img
                src="https://png.pngitem.com/pimgs/s/521-5214088_shopping-cart-shopping-cart-icon-outline-hd-png.png"
                className="basket__Image"
                alt="amazon__basketImage"
                height="30px"
                weight="30px"
              />
              <span className="header__optiontwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
