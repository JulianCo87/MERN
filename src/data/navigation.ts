import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
const cookies = new Cookies();

interface Decoded {
  exp: number,
  iat: number,
  userEmail: string,
  userId: string,
  userRole: number,
}

// get cookie from browser if logged in
const token = cookies.get("TOKEN");
var userRole;
if (token) {
  const decoded:Decoded = jwt_decode(token);
  userRole = decoded.userRole;
}

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "#",
      name: i.Country,
    })),
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog Single",
  },
  // {
  //   id: ncNanoId(),
  //   href: "/subscription",
  //   name: "Subscription",
  // },
];

const accountChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Signin",
  },
  { 
    id: ncNanoId(), 
    href: "/account", 
    name: "Dashboard" 
  },
  { 
    id: ncNanoId(), 
    href: "/author", 
    name: "Profile" 
  },
];

const accountChildAuthMenus: NavItemType[] = [
  { 
    id: ncNanoId(), 
    href: "/account",
    name: "Dashboard"
  },
  { 
    id: ncNanoId(),
    href: "/author",
    name: "Profile"
  },
];

const accountChildAdminAuthMenus: NavItemType[] = [
  
];

const accountChildUnauthMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Signin",
  },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing-1",
    name: "Add Listings",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing-1",
        name: "Add Listings 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-2",
        name: "Add Listings 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-3",
        name: "Add Listings 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-4",
        name: "Add Listings 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-5",
        name: "Add Listings 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-6",
        name: "Add Listings 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-7",
        name: "Add Listings 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-8",
        name: "Add Listings 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-9",
        name: "Add Listings 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-10",
        name: "Add Listings 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    // type: "dropdown",
    // children: demoChildMenus,
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Five columns",
  //   type: "megaMenu",
  //   megaMenu: megaMenuDemo,
  // },
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Stock",
    // type: "dropdown",
    // children: [
    //   { id: ncNanoId(), href: "/listing-car", name: "Cars page" },
    //   { id: ncNanoId(), href: "/listing-car-map", name: "Cars page (map)" },
    //   { id: ncNanoId(), href: "/listing-car-detail", name: "Car Detail" },
    // ],
  },
  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Templates",
  //   type: "dropdown",
  //   children: templatesChildrenMenus,
  // },

  // {
  //   id: ncNanoId(),
  //   href: "#",
  //   name: "Blog",
  //   type: "dropdown",
  //   children: otherPageChildMenus,
  // },

  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog",
  },

  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
  },

  {
    id: ncNanoId(),
    href: "#",
    name: "Account",
    type: "dropdown",
    children: accountChildAuthMenus,
  },
];

export const NAVIGATION_DEMO_Auth: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Stock",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
  },
  {
    id: ncNanoId(),
    href: userRole === 1 ? "/admin" : "#",
    name: userRole === 1 ? "Dashboard" : "Account",
    type: userRole === 1 ? null :  "dropdown",
    children: userRole === 1 ? accountChildAdminAuthMenus : accountChildAuthMenus,
  },
];

export const NAVIGATION_DEMO_Unauth: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Stock",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Account",
    type: "dropdown",
    children: accountChildUnauthMenus,
  },
];
