import { base_url } from "@/utils/const";

// Function to fetch data without caching
const fetchNoCache = async (url, options = {}) => {
    try {
        const response = await fetch(url, { ...options, cache: "no-store" });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            throw new Error("Received non-JSON response");
        }
    } catch (error) {
        console.error(`Fetch failed: ${error.message}`);
        throw error;
    }
};

// Example usage to fetch API data without caching
export const getFooter = async () => {
    return await fetchNoCache(base_url+'api/footer');
};

export const getAbout = async () => {
    return await fetchNoCache(base_url+'api/page/about');
};

export const getContact = async () => {
    return await fetchNoCache(base_url+'api/page/contact');
};

export const getFaq = async () => {
    return await fetchNoCache(base_url+'api/page/faq');
};

export const getHeader = async () => {
    return await fetchNoCache(base_url+'api/header');
};

export const getCountrySpecialists = async () => {
    return await fetchNoCache(base_url+'api/page/home/country-specialists');
};

export const getSliderData = async () => {
    return await fetchNoCache(base_url+'api/page/home/slider');
};

export const getofferSliderData = async () => {
    return await fetchNoCache(base_url+'api/page/home/offers');
};

export const getVisaCategory = async () => {
    return await fetchNoCache(base_url+'api/page/home/visa-category');
};

export const getWhyChooseUs = async () => {
    return await fetchNoCache(base_url+'api/page/home/why-choose-us');
};

export const getSearchData = async () => {
    return await fetchNoCache(base_url+'api/page/home/search-bar');
};

export const getBannerData = async () => {
    return await fetchNoCache(base_url+'api/page/home/top-slider');
};
export const getAllGlobalVisa = async () => {
    return await fetchNoCache(base_url+'api/get/visas');
};

export const getAttractions = async () => {
    return await fetchNoCache(base_url+'api/attractions');
};

export const getReviews = async () => {
    return await fetchNoCache(base_url+'api/page/home/reviews');
};

export const getAttractionDetails = async (slug) => {
    return await fetchNoCache(`${base_url}api/attraction/${encodeURIComponent(slug)}`);
};

export const getPromotions = async (slug) => {
    return await fetchNoCache(`${base_url}api/promotions/${encodeURIComponent(slug)}`);
};

export const getSlug = async (slug) => {
    return await fetchNoCache(`${base_url}api/page/${slug}`);
};


export const getVisaDetails = async (country, category) => {
    return await fetchNoCache(`${base_url}api/visa-details?country=${encodeURIComponent(country)}&category=${encodeURIComponent(category)}`);
};
