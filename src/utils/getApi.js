import { base_url } from "@/utils/const";

// Function to fetch data with retry logic
const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
    try {
        const response = await fetch(url, options);

        // If the response status is 429, retry after a delay
        if (response.status === 429 && retries > 0) {
            console.warn(`Rate limit hit. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithRetry(url, options, retries - 1, delay * 2); // Exponential backoff
        }

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
        throw error; // Rethrow error to handle it further up the call chain if needed
    }
};

// Function to fetch footer data
export const getFooter = async () => {
    return await fetchWithRetry(base_url + 'api/footer');
};
// Function to fetch about data
export const getAbout = async () => {
    return await fetchWithRetry(base_url + 'api/page/about');
};
export const getContact = async () => {
    return await fetchWithRetry(base_url + 'api/page/contact');
};
export const getFaq = async () => {
    return await fetchWithRetry(base_url + 'api/page/faq');
};

// Function to fetch header data
export const getHeader = async () => {
    return await fetchWithRetry(base_url + 'api/header');
};

// Function to fetch country specialists
export const getCountrySpecialists = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/country-specialists');
};

// Function to fetch slider data
export const getSliderData = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/slider');
};

// Function to fetch offer slider data
export const getofferSliderData = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/offers');
};

// Function to fetch visa categories
export const getVisaCategory = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/visa-category');
};

// Function to fetch "Why Choose Us" data
export const getWhyChooseUs = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/why-choose-us');
};
// Function to fetch "Why Choose Us" data
export const getSearchData = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/search-bar');
};

// Function to fetch attractions data
export const getattructions = async () => {
    return await fetchWithRetry(base_url + 'api/attractions');
};
// Function to fetch attractions data
export const getReviews = async () => {
    return await fetchWithRetry(base_url + 'api/page/home/reviews');
};

// Function to fetch attraction details using slug
export const getattructionsDetails = async (slug) => {
    try {
        const response = await fetch(`${base_url}api/attraction/${encodeURIComponent(slug)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch attraction details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching attraction details:', error);
        return null;
    }
};
export const getSlug = async (slug) => {
    try {
        const response = await fetch(`${base_url}api/page/${slug}`);
        if (!response.ok) {
            throw new Error('Failed to fetch attraction details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching attraction details:', error);
        return null;
    }
};

// Function to fetch visa details using country and category
export const getVisaDetails = async (country, category) => {
    try {
        const response = await fetch(`${base_url}api/visa-details?country=${encodeURIComponent(country)}&category=${encodeURIComponent(category)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch visa details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching visa details:', error);
        return null; // Return null in case of an error
    }
};

// pages/api/page/[slug].js

