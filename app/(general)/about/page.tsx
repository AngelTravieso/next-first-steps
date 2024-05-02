import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "Esta es la página de de About de mi empresa",
  keywords: ["About Page", "Angel", "Información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>;
    </>
  );
}
