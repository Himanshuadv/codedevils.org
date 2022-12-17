import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// styles
import navbarStyles from "./../../../styles/components/page_layout/navbars/mobile.module.scss";

// icon
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineArrowRight,
} from "react-icons/ai";

const MobileNavbar = () => {
  const [showNavbarLinks, setShowNavbarLinks] = useState(false);

  return (
    <nav id={navbarStyles.navbar_wrapper}>
      <Link href="/" className={navbarStyles.navbar_item}>
        <Image
          src={"/logo-dark.png"}
          alt="CodeDevils Logo"
          width="180"
          height="100"
        />
      </Link>

      <div
        id={navbarStyles.icon}
        className={`${navbarStyles.navbar_item}
        ${showNavbarLinks ? navbarStyles.close : navbarStyles.open}
        `}
        onClick={() => setShowNavbarLinks(!showNavbarLinks)}
      >
        {showNavbarLinks ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </div>

      <div
        id={navbarStyles.link_container}
        className={`${showNavbarLinks ? navbarStyles.show : navbarStyles.hide}`}
      >
        <ul id={navbarStyles.link_wrapper}>
          <li className={navbarStyles.list_item}>
            <Link
              href="/"
              className={navbarStyles.item_wrapper}
              onClick={() => setShowNavbarLinks(!showNavbarLinks)}
            >
              <AiOutlineHome />
              <span>Home</span>
            </Link>
          </li>

          <li className={navbarStyles.list_item}>
            <Link
              href="/about"
              className={navbarStyles.item_wrapper}
              onClick={() => setShowNavbarLinks(!showNavbarLinks)}
            >
              <AiOutlineInfoCircle />
              <span>About</span>
            </Link>
          </li>

          <li className={navbarStyles.list_item}>
            <Link
              href="/contact"
              className={navbarStyles.item_wrapper}
              onClick={() => setShowNavbarLinks(!showNavbarLinks)}
            >
              <AiOutlineMail />
              <span>Contact Us</span>
            </Link>
          </li>

          {/* <Link
            href="/help"
            className={navbarStyles.list_item}
            onClick={() => setShowNavbarLinks(!showNavbarLinks)}
          >
            <span>Help</span>
          </Link> */}
        </ul>
        <div id={navbarStyles.account_link_wrapper}>
          <Link
            href="/accounts/signup"
            className={navbarStyles.list_item}
            onClick={() => setShowNavbarLinks(!showNavbarLinks)}
          >
            <div className={navbarStyles.item_wrapper}>
              <span>Register</span>
              <AiOutlineArrowRight />
            </div>
          </Link>
          <hr />
          <Link
            href="/accounts/login"
            className={navbarStyles.list_item}
            onClick={() => setShowNavbarLinks(!showNavbarLinks)}
          >
            <div className={navbarStyles.item_wrapper}>
              <span>Login</span>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </div>
      </div>

      <div
        id={navbarStyles.close}
        className={`${showNavbarLinks ? navbarStyles.show : navbarStyles.hide}`}
        onClick={() => setShowNavbarLinks(!showNavbarLinks)}
      ></div>
    </nav>
  );
};

export default MobileNavbar;
