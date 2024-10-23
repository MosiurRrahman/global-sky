import { base_url } from "@/utils/const";
import { notFound } from "next/navigation";

export const metadata = async () => {
 
  // Fetch the data from your API
  const res = await fetch(`${base_url}api/header`);
  
  const { data } = await res.json();
  if (!res.ok) {
    notFound(); // Trigger the 404 page if the response is not successful
  }
  return {
    title: `${data.header.title}`,
    description: data.header.description,
    keywords: data.meta_keywords,
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
};

export default function PageLayout({ children }) {
  return <>{children}</>;
}