import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Title",
  description: "Esta es la página de contacto de mi empresa",
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
