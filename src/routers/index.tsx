import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import ListingExperiencesPage from "containers/ListingExperiencesPage/ListingExperiencesPage";
import ListingExperiencesMapPage from "containers/ListingExperiencesPage/ListingExperiencesMapPage";
import ListingStayDetailPage from "containers/ListingDetailPage/ListingStayDetailPage";
import ListingExperiencesDetailPage from "containers/ListingDetailPage/ListingExperiencesDetailPage";
import ListingCarPage from "containers/ListingCarPage/ListingCarPage";
import ListingCarMapPage from "containers/ListingCarPage/ListingCarMapPage";
import ListingCarDetailPage from "containers/ListingDetailPage/ListingCarDetailPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import PayPage from "containers/PayPage/PayPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountBilling from "containers/AccountPage/AccountBilling";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1";
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2";
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3";
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4";
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5";
import PageAddListing6 from "containers/PageAddListing1/PageAddListing6";
import PageAddListing7 from "containers/PageAddListing1/PageAddListing7";
import PageAddListing8 from "containers/PageAddListing1/PageAddListing8";
import PageAddListing9 from "containers/PageAddListing1/PageAddListing9";
import PageAddListing10 from "containers/PageAddListing1/PageAddListing10";
import PageHome2 from "containers/PageHome/PageHome2";
import ListingRealEstateMapPage from "containers/ListingRealEstatePage/ListingRealEstateMapPage";
import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
import SiteHeader from "containers/SiteHeader";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";

import ProtectedRoutes from "./ProtectedRoutes";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";

import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  { path: "/home-1-header-2", exact: true, component: PageHome },
  { path: "/home-2", component: PageHome2 },
  // 
  { path: "/listing-stay-detail", component: ListingStayDetailPage },
  //
  {
    path: "/listing-experiences",
    component: ListingExperiencesPage,
  },
  {
    path: "/listing-experiences-map",
    component: ListingExperiencesMapPage,
  },
  {
    path: "/listing-experiences-detail",
    component: ListingExperiencesDetailPage,
  },
  //
  { path: "/listing-car", component: ListingCarPage },
  { path: "/listing-car-map", component: ListingCarMapPage },
  { path: "/listing-car-detail", component: ListingCarDetailPage },
  //
  { path: "/listing-real-estate-map", component: ListingRealEstateMapPage },
  { path: "/listing-real-estate", component: ListingRealEstatePage },
  //
  { path: "/listing-flights", component: ListingFlightsPage },
  //
  { path: "/checkout", component: CheckOutPage },
  { path: "/pay-done", component: PayPage },
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

export const authPages: Page[] = [
  //
  { path: "/author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/account-password", component: AccountPass },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-billing", component: AccountBilling },
]

export const authAdminPages: Page[] = [
  //
  { path: "/admin/add-listing-1", component: PageAddListing1 },
  { path: "/admin/add-listing-2", component: PageAddListing2 },
  { path: "/admin/add-listing-3", component: PageAddListing3 },
  { path: "/admin/add-listing-4", component: PageAddListing4 },
  { path: "/admin/add-listing-5", component: PageAddListing5 },
  { path: "/admin/add-listing-6", component: PageAddListing6 },
  { path: "/admin/add-listing-7", component: PageAddListing7 },
  { path: "/admin/add-listing-8", component: PageAddListing8 },
  { path: "/admin/add-listing-9", component: PageAddListing9 },
  { path: "/admin/add-listing-10", component: PageAddListing10 },
  { path: "/auth", component: AuthLayout },
  { path: "/admin", component: AdminLayout },
]

const Routes = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    //find word, "admin" in the current url
    const pathname = window.location.pathname;
    setIsAdmin(pathname.includes('admin'));
  },[]);
  
  return (
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <BrowserRouter>
            <ScrollToTop />
            {!isAdmin && <SiteHeader />}
            <Switch>
              {pages.map(({ component, path, exact }) => {
                return (
                  <Route
                    key={path}
                    component={component}
                    exact={!!exact}
                    path={path}
                  />
                );
              })}
              {authPages.map(({ component, path, exact }) => {
                return (
                  <ProtectedRoutes
                    key={path}
                    component={component}
                    exact={!!exact}
                    path={path}
                  />
                );
              })}
              {authAdminPages.map(({ component, path, exact }) => {
                return (
                  <ProtectedAdminRoutes
                    key={path}
                    component={component}
                    exact={!!exact}
                    path={path}
                  />
                )
              })}
              <Route component={Page404} />
            </Switch>
            {!isAdmin && <Footer />}
          </BrowserRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
};

export default Routes;
