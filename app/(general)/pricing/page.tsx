import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Title",
  description: "Esta es la página de Pricing de mi empresa",
  keywords: ["Pricing", "Angel", "Info", "..."],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
