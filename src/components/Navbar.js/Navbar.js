import React from "react";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineMessage,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <NavbarStyle>
      <ul>
        <li className="active">
          <a href="default.asp">
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="text">Home </span>
          </a>
        </li>
        <li className="">
          <a href="news.asp">
            <span className="icon">
              <CgProfile />
            </span>
            <span className="text">pofile</span>
          </a>
        </li>
        <li className="">
          <a href="contact.asp">
            <span className="icon">
              <AiOutlineMessage />
            </span>
            <span className="text">message</span>
          </a>
        </li>
        <li className="">
          <a href="about.asp">
            <span className="icon">
              <AiOutlineSetting />
            </span>
            <span className="text">setting</span>
          </a>
        </li>
      </ul>
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  display: flex;
  height: 3rem;
  width: 22rem;
  border-radius: 1rem;
  align-items: center;
  background-color: #dfe6ff;
  cursor: default;
  top: 80vh;
  position: fixed;
  left: 50%;
  box-shadow: 0px 1px 5px #000020;

  transform: translate(-50%);
  ul {
    display: flex;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    list-style: none;
    padding: 0 2rem 0 2rem;

    li {
      position: relative;
      //padding-left: 1.2rem;
      z-index: 100;
      /* background-color: grey; */
    }

    li a {
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    li a span {
      color: #222327;
    }

    li a .text {
      position: absolute;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      transition: 0.5s;
      opacity: 0;
      transform: translateY(2rem);
    }
    li a .icon {
      position: relative;
      line-height: 3.5rem;
      font-size: 1.5rem;
      display: block;
      transition: 0.5s;
      font-weight: 200;
      text-align: center;
      width: 3.5rem;
    }
    li:hover a .icon {
      transform: translateY(-1.7rem);
      background-color: #29fd53;
      border-radius: 50%;
      height: 100%;
    }
    li:hover a .text {
      opacity: 1;
      transform: translateY(0.4rem);
    }
  }
`;

export default Navbar;
