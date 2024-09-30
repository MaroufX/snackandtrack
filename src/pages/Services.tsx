import React from "react";
import "../styles/Services.css";

const Services: React.FC = () => {
  const services = [
    {
      title: "Takeaway And Dine-In",
      images: [
        "/assets/service1-image1.png",
        "/assets/service1-image2.png",
        "/assets/service1-image3.png",
        "/assets/service1-image4.png",
      ],
    },
    {
      title: "OFF-THE-SHELF PRODUCTS",
      images: [
        "/assets/service2-image1.png",
        "/assets/service2-image2.png",
        "/assets/service2-image3.png",
        "/assets/service2-image4.png",
      ],
    },
    {
      title: "Catering & More",
      images: [
        "/assets/service3-image1.png",
        "/assets/service3-image2.png",
        "/assets/service3-image3.png",
        "/assets/service3-image4.png",
      ],
    },
    {
      title: "Oriental & More",
      images: [
        "/assets/service4-image1.png",
        "/assets/service4-image2.png",
        "/assets/service4-image3.png",
        "/assets/service4-image4.png",
      ],
    },
  ];

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-images">
            {service.images.map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={src}
                alt={`${service.title} image ${imgIndex + 1}`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
