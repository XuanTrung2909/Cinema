import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { Link, NavLink } from "react-router-dom";
import logo from "./../Assets/img/tix-logo.png";

export default function Header(props) {
  let [checkMenu, setCheckMenu] = useState(false);

  const showMenu = () => {
    setCheckMenu(true);
  };
  const hideMenu = () => {
    setCheckMenu(false);
  };
  // const handleClickOutSide = (event) => {
  //   if()
  // }

  return (
    <div className="header row">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Cinema" />
        </Link>
      </div>
      <ul className="nav row">
        <li>
          <NavLink to="/phim" className="navlink" activeClassName="active">
            Phim
          </NavLink>
        </li>
        <li>
          <NavLink to="/cum-rap" className="navlink" activeClassName="active">
            Cụm Rạp
          </NavLink>
        </li>
      </ul>
      <div className="sign">
        <Link className="link" to="/dang-nhap">
          <Button>Đăng Nhập</Button>
        </Link>
        <Link className="link" to="/dang-ky">
          <Button>Đăng Ký</Button>
        </Link>
      </div>
      <div className="icon__menu" onClick={showMenu}>
        <i class="fas fa-bars"></i>
      </div>
      <Animated
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        animationInDuration="500"
        animationOutDuration="500"
        className={checkMenu ? 'menu__mobile show' : 'menu__mobile hide'}
        
      >
        <div className="sign__mobile">
          <Link className="link" to="/dang-nhap">
            <Button>Đăng Nhập</Button>
          </Link>
          <Link className="link" to="/dang-ky">
            <Button>Đăng Ký</Button>
          </Link>
        </div>
        <div></div>
        <ul>
          <li onClick={hideMenu}>
            <Link className="link" to="/phim">
              Phim
            </Link>
          </li>
          <li onClick={hideMenu}>
            <Link className="link" to="/cum-rap">
              Cụm Rạp
            </Link>
          </li>
        </ul>
      </Animated>
      <Animated
        className={checkMenu ? 'overlay show' : 'overlay hide'}
        animationInDuration="500"
        onClick={hideMenu}
      ></Animated>
    </div>
  );
}
