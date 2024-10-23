import { base_url } from "@/utils/const";

export const metadata = async () => {
  // Fetch the data from your API
  const res = await fetch(`${base_url}api/header`);
  const { data } = await res.json();

  return {
    title: data.title,
    description: data.description,
    keywords: data.meta_keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: `${base_url}${data.meta_image}`,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
    icons: {
      icon: `${base_url}${data.favicon}`,
    },
  };
};

export default function PageLayout({ children }) {
  return <section>{children}</section>;
}