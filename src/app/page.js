import Banner from "@/components/Banner";
import CountryVisa from "@/components/CountryVisa";
import Destination from "@/components/Destination";
import Faq from "@/components/Faq";
import ProvideVisa from "@/components/ProvideVisa";
import StudentVisa from "@/components/StudentVisa";
import Testimonial from "@/components/Testimonial";
import VisaDetails from "@/components/VisaDetails";
import { base_url } from "@/utils/const";

// Import API functions
import { getBanner, getBannerData, getCountrySpecialists,  getofferSliderData,  getReviews, getSearchData, getSliderData, getVisaCategory, getWhyChooseUs } from "@/utils/getApi";


export const metadata = async () => {
  // Fetch the data from your API
  const res = await fetch(`${base_url}api/header`);
  const { data } = await res.json();

  return {
    title: data.header.title,
    description: data.header.description,
    keywords: data.header.meta_keywords,
    openGraph: {
      title: data.header.title,
      description: data.header.description,
      images: [
        {
          url: `${base_url}${data.header.meta_image}`,
          width: 800,
          height: 600,
          alt: data.header.title,
        },
      ],
    },
    icons: {
      icon: `${base_url}${data.header.favicon}`,
    },
  };
}

export default async function Home() {
  // Fetch data using the API functions
  const countryData = await getCountrySpecialists();
  const sliderData = await getSliderData();
  const visaCategoryData = await getVisaCategory();
  const whychooseUsData = await getWhyChooseUs();
  const getofferSlider = await getofferSliderData();
  const getReviewsData = await getReviews();
  const getSearch = await getSearchData();
  const getBanner = await getBannerData();

  return (
    <>
      <Banner  banner={getBanner?.data}  />
      <VisaDetails data={getSearch?.data}  />
      <CountryVisa data={countryData?.data} />
      <Destination data={getofferSlider.data} />
      <StudentVisa data={sliderData?.data} />
      <ProvideVisa data={visaCategoryData?.data} />
      <Testimonial data={getReviewsData.data} />
      <Faq data={whychooseUsData?.data} />
    </>
  );
}
