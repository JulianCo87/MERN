import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_Auth } from "data/navigation";
import { NAVIGATION_DEMO_Unauth } from "data/navigation";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      { token ? (
        NAVIGATION_DEMO_Auth.map((item) => (
          <NavigationItem key={item.id} menuItem={item}/>
        ))
      ) : (
        NAVIGATION_DEMO_Unauth.map((item) => (
          <NavigationItem key={item.id} menuItem={item} />
        ))
      )}
      
    </ul>
  );
}

export default Navigation;
