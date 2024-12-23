import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Marketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import Users from "views/admin/users";

import PageAddListing1 from "views/admin/new-upload/PageAddListing1";
import PageAddListing2 from "views/admin/new-upload/PageAddListing2";
import PageAddListing3 from "views/admin/new-upload/PageAddListing3";
import PageAddListing4 from "views/admin/new-upload/PageAddListing4";
import PageAddListing5 from "views/admin/new-upload/PageAddListing5";
import PageAddListing6 from "views/admin/new-upload/PageAddListing6";
import PageAddListing7 from "views/admin/new-upload/PageAddListing7";
// import PageAddListing8 from "views/admin/new-upload/PageAddListing8";
// import PageAddListing9 from "views/admin/new-upload/PageAddListing9";
// import PageAddListing10 from "views/admin/new-upload/PageAddListing10";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    component: MainDashboard,
  },
  {
    name: "Marketplace",
    layout: "/admin",
    path: "/marketplace",
    component: Marketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "/datatables",
    component: Users,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-1",
    component: PageAddListing1,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-2",
    component: PageAddListing2,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-3",
    component: PageAddListing3,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-4",
    component: PageAddListing4,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-5",
    component: PageAddListing5,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-6",
    component: PageAddListing6,
  },
  {
    name: "New Car Upload",
    layout: "/admin",
    path: "/new-uploading-7",
    component: PageAddListing7,
  },
  // {
  //   name: "New Car Upload",
  //   layout: "/admin",
  //   path: "/new-uploading-8",
  //   component: PageAddListing8,
  // },
  // {
  //   name: "New Car Upload",
  //   layout: "/admin",
  //   path: "/new-uploading-9",
  //   component: PageAddListing9,
  // },
  // {
  //   name: "New Car Upload",
  //   layout: "/admin",
  //   path: "/new-uploading-10",
  //   component: PageAddListing10,
  // },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    component: Profile,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   component: SignInCentered,
  // },
];

export default routes;
