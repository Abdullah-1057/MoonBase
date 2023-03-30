import React from "react";
import mypic from "../app/assets/logo.png";
import mypic2 from "./assets/LockStore12.png";

import Image from "next/image";
import "./Header.css";
export const Header = () => {
  return (
    <nav className="myNavbar">
      <div className="">
        <ul className="list-style-none flex flex-col lg:flex-row">
          <li>
            <Image
              src={mypic}
              alt="Picture of the author"
              className="NavImage"
            />{" "}
          </li>
          <div className="div1">
            <li className="allTokens">
              <a>All tokens</a>
            </li>
            <li className="lockUp">
              <a>Lockups</a>
            </li>
            <li className="vesting">
              <a>Vesting</a>
            </li>
            <li className="claim">
              <a>claims</a>
            </li>
          </div>

          <div className="div2">
            <li className="ConWallet">
              <a>connect wallet</a>
            </li>
          </div>
        </ul>

        <div className="MainHeading">
          <p>The Industry Leader In Project Security & Automation</p>
        </div>
        <div className="SubHeading">
          <p>
            Token Locks · Liquidity Locks · Flexible Vesting Schedules · Token
            Generation
          </p>
        </div>
        <div className="RectArea">
          <div className="TextArea">Start Locking Liquidity Now</div>
        </div>
        <div>
        <Image
              src={mypic2}
              alt="Picture of the author"
              className="mypic2"
            />{" "}
        </div>
      </div>
    </nav>
  );
};
