import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { Helmet } from "react-helmet";

import Toronto from '../../images/cities/canada-best-cities-toronto-ontario.jpg';
import Vancouver from '../../images/cities/vancouver.webp';
import Ottawa from '../../images/cities/canada-best-cities-ottawa-ontario.jpg';
import Montreal from '../../images/cities/canada-best-cities-montreal-quebec.jpg';
import Quebec from '../../images/cities/canada-best-cities-quebec-city-quebec.jpg';
import Winnipeg from '../../images/cities/canada-best-cities-winnipeg-manitoba.jpg';
import Calgari from '../../images/cities/canada-best-cities-calgary-alberta.jpg';

import FeaturedCar1 from "../../images/cars/1.png";
import FeaturedCar2 from "../../images/cars/2.png";
import FeaturedCar3 from "../../images/cars/3.png";
import FeaturedCar4 from "../../images/cars/4.png";
import FeaturedCar5 from "../../images/cars/5.png";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-car",
    name: "Toronto",
    taxonomy: "category",
    count: 188288,
    thumbnail: Toronto,
  },
  {
    id: "2",
    href: "/listing-car",
    name: "Vancouver",
    taxonomy: "category",
    count: 188288,
    thumbnail: Vancouver,
  },
  {
    id: "2",
    href: "/listing-car",
    name: "Calgari",
    taxonomy: "category",
    count: 188288,
    thumbnail: Calgari,
  },
  {
    id: "2",
    href: "/listing-car",
    name: "Ottawa",
    taxonomy: "category",
    count: 188288,
    thumbnail: Ottawa,
  },
  {
    id: "2",
    href: "/listing-car",
    name: "Montreal",
    taxonomy: "category",
    count: 188288,
    thumbnail: Montreal,
  },
  {
    id: "2",
    href: "/listing-car",
    name: "Quebec",
    taxonomy: "category",
    count: 188288,
    thumbnail: Quebec,
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-car",
    name: "BLACK CADILLAC SEDAN",
    taxonomy: "category",
    count: 188288,
    thumbnail: FeaturedCar1,
  },
  {
    id: "222",
    href: "/listing-car",
    name: "BLACK CADILLAC SEDAN",
    taxonomy: "category",
    count: 188288,
    thumbnail: FeaturedCar2,
  },
  {
    id: "3",
    href: "/listing-car",
    name: "BLACK CADILLAC SEDAN",
    taxonomy: "category",
    count: 188288,
    thumbnail: FeaturedCar3,
  },
  {
    id: "4",
    href: "/listing-car",
    name: "BLACK CADILLAC SEDAN",
    taxonomy: "category",
    count: 188288,
    thumbnail: FeaturedCar4,
  },
  {
    id: "5",
    href: "/listing-car",
    name: "BLACK CADILLAC SEDAN",
    taxonomy: "category",
    count: 188288,
    thumbnail: FeaturedCar5,
  },
];

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Maelee || Home</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-20 pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          categories={DEMO_CATS}
          uniqueClassName="PageHome_s1"
        />

        {/* SECTION2 */}
        <SectionOurFeatures />

        {/* Featured Place SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div> */}

        {/* SECTION */}
        <SectionHowItWork />

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Featured Cars"
            subHeading="Popular cars to rent that Maelee recommends for you"
            sliderStyle="style2"
            uniqueClassName="PageHome_s2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>

        {/* Explore Nearby SECTION */}
        {/* <SectionGridCategoryBox /> */}

        {/* Why Choose Us SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Explore by types of rental cars"
          subHeading="Explore car based on 6 types of cars"
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome_s3"
        />

        {/* SECTION */}
        {/* <SectionVideos /> */}

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="PageHome_" />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
