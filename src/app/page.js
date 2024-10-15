import Banner from "@/components/Banner";
import CountryVisa from "@/components/CountryVisa";
import Destination from "@/components/Destination";
import Faq from "@/components/Faq";
import ProvideVisa from "@/components/ProvideVisa";
import StudentVisa from "@/components/StudentVisa";
import Testimonial from "@/components/Testimonial";
import VisaDetails from "@/components/VisaDetails";

// Import API functions
import { getBanner, getBannerData, getCountrySpecialists, getCountryVisaCategory, getofferSliderData, getReviews, getSearchData, getSliderData, getVisaCategory, getWhyChooseUs } from "@/utils/getApi";

export default async function Home() {
  // Fetch data using the API functions
  const countryData = await getCountrySpecialists();
  const sliderData = await getSliderData();
  const visaCategoryData = await getVisaCategory();
  const whychooseUsData = await getWhyChooseUs();
  const getofferSlider = await getofferSliderData();
  const getReviewsData = await getReviews();
  const getSearch = await getSearchData();
  const countryVisaCategory = await getCountryVisaCategory();
  // const getbannerData = await getBanner();
  const getBanner = await getBannerData();

  return (
    <>
      <Banner  banner={getBanner?.data}  />
      <VisaDetails data={getSearch?.data} countryVisaCategory = {countryVisaCategory.data}  />
      <CountryVisa data={countryData?.data} />
      <Destination data={getofferSlider.data} />
      <StudentVisa data={sliderData?.data} />
      <ProvideVisa data={visaCategoryData?.data} />
      <Testimonial data={getReviewsData.data} />
      <Faq data={whychooseUsData?.data} />
    </>
  );
}
