import Head from "next/head";
import config from "../config";

import Navbar  from "../components/Navbar";
import Hero    from "../components/Hero";
import About   from "../components/About";
import Menu    from "../components/Menu";
import Gallery from "../components/Gallery";
import FindUs  from "../components/FindUs";
import Contact from "../components/Contact";
import Footer  from "../components/Footer";

export default function Home() {
  const { name, description, phone, address } = config.restaurant;

  // Schema markup — helps Google understand the business (free SEO boost)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name,
    description,
    telephone: phone,
    address: {
      "@type":           "PostalAddress",
      streetAddress:     address.street,
      addressLocality:   address.city,
      addressCountry:    address.country,
    },
    openingHoursSpecification: config.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type":    "OpeningHoursSpecification",
        dayOfWeek:  `https://schema.org/${h.day}`,
        opens:      h.open,
        closes:     h.close,
      })),
    url:   typeof window !== "undefined" ? window.location.origin : "",
    image: "", // Add the URL of the restaurant's main image
  };

  return (
    <>
      <Head>
        <title>{name} — Restaurant</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (social media previews) */}
        <meta property="og:title"       content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:type"        content="website" />

        {/* Favicon — replace with client's actual favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <Navbar  />
      <main>
        <Hero    />
        <About   />
        <Menu    />
        <Gallery />
        <FindUs  />
        <Contact />
      </main>
      <Footer  />
    </>
  );
}
