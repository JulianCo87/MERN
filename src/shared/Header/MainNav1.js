import React, { FC } from "react";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";

const cookies = new Cookies();

const MainNav1 = ({ isTop }) => {

  const token = cookies.get("TOKEN");

  if(token) {
    const decoded = jwt_decode(token);

    if(decoded.exp * 1000 < Date.now()) {
      // destroy the cookie
      cookies.remove("TOKEN", { path: "/" });
      // redirect user to the landing page
      window.location.href = "/";
    }
  }

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }

  return (
    <div
      className={`nc-MainNav1 relative z-10 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          <Logo />
          <Navigation />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <SwitchDarkMode />  
            <SearchDropdown />
            <div className="px-1" />
            { token ? (
              <ButtonPrimary type="submit" onClick={() => logout()}>Logout</ButtonPrimary>
              ) : (
              <ButtonPrimary href="/login">Sign In</ButtonPrimary>
              ) 
            }
          </div>
          <div className="flex items-center xl:hidden">
            <SwitchDarkMode />
            <div className="px-1" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
