import React from "react";
import "../styles/Services.css";

interface Service {
  title: string;
  description: string;
  images: string[];
}

const services: Service[] = [
  {
    title: "Takeaway And Dine-In",
    description:
      "Appetizers Salads Hot sandwiches Pastas Main Course Hot and cold beverages",
    images: [
      "public/assets/image1.png",
      "public/assets/image2.png",
      "public/assets/image3.png",
    ],
  },
  {
    title: "OFF-THE-SHELF PRODUCTS",
    description:
      "Appetizers Salads Hot sandwiches Pastas Main Course Hot and cold beverages",
    images: [
      "public/assets/image1.png",
      "public/assets/image2.png",
      "public/assets/image3.png",
    ],
  },
  {
    title: "Catering & More",
    description:
      "Appetizers Salads Hot sandwiches Pastas Main Course Hot and cold beverages",
    images: [
      "public/assets/image1.png",
      "public/assets/image2.png",
      "public/assets/image3.png",
    ],
  },
  {
    title: "Oriental & More",
    description:
      "Appetizers Salads Hot sandwiches Pastas Main Course Hot and cold beverages",
    images: [
      "public/assets/image1.png",
      "public/assets/image2.png",
      "public/assets/image3.png",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      {services.map((service, index) => (
        <section
          key={index}
          className={`service-section ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
          <div className="service-images">
            {service.images.map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={src}
                alt={`${service.title} image ${imgIndex + 1}`}
                className={`service-image service-image-${imgIndex + 1}`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
