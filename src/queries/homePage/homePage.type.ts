import { HeroBannerType } from "../heroBanner/heroBanner.type";
import { SectionType } from "../section/section.type";

export interface HomePageType {
  homePage: {
    sectionsCollection: {
      items: Array<HeroBannerType | SectionType>;
    };
  };
}
