import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero-section bg-[#F3F3F3] text-left py-20 m-auto my-[100px] rounded-3xl w-[1589px] h-[663px]  ">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 ml-4 md:ml-10 p-4">
            <h1 className="text-4xl md:text-9xl font-bold text-[#39B54A] leading-tight md:leading-none">
              Track Your Lifestyle
            </h1>
            <p className="text-sm md:text-base text-[#333333] mt-4 md:mt-9">
              We provide various kinds of high-end food and beverages with other
              healthy options, so you can pick your preferred lifestyle track.
              We provide various kinds of high-end food and beverages with other
              healthy options, so you can pick your preferred lifestyle track.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <Link to="/menu">
                <button className="px-4 py-2 md:px-6 md:py-2 bg-[#39B54A] text-white rounded-md hover:bg-black">
                  View Menu
                </button>
              </Link>
              <Link to="/Contact">
                <button className="px-4 py-2 md:px-6 md:py-2 bg-none text-black rounded-md hover:bg-[#39B54A] border-[1px] border-[#39B54A]">
                  Find Us
                </button>
              </Link>
            </div>
          </div>

          <div
            className="md:w-1/2 mt-10 md:mt-0 md:pl-10 absolute"
            style={{
              width: "1025px",
              height: "621px",
              top: "228px",
              left: "945px",
              gap: "0px",
              opacity: "0px",
            }}
          >
            <img
              src="/assets/hero.png"
              alt="Snack and track"
              className="rounded-lg"
            />
          </div>
        </div>
      </header>
      <section className="feature-partner flex flex-row items-center justify-center">
        <div className="mx-10">
          <img
            src="/public/assets/catering-and-more.png"
            alt="catering and more"
          />
        </div>
        <div className="mx-10">
          <img src="/public/assets/snack-and-more.png" alt="snack and track" />
        </div>
        <div className="mx-10">
          <img
            src="/public/assets/oriental-and-more.png"
            alt="oriental and more"
          />
        </div>
      </section>
      <section className="Journey flex flex-row mx-28 my-36">
        <div className="ml-48">
          <h5 className="font-black text-6xl pt-20">
            Our Culinary Journey And Services
          </h5>
          <p className="mt-9 font-medium ">
            Snack & Track offers takeaway, dine-in, and retail options,
            tailoring <br />
            services to geography and clientele, alongside catering for
            businesses and events.
          </p>
          <Link to="/Services">
            <button className="mt-6 px-6 py-2 bg-[#39B54A] text-white rounded-md hover:bg-black">
              Explore
            </button>
          </Link>
        </div>
        <div className="container flex flex-wrap justify-center gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="w-[250px] h-[237px] bg-white rounded-md shadow-lg flex flex-col items-center justify-center p-4">
                <img
                  src="/assets/fi-rr-time-fast.png"
                  alt="Takeaway And Dine-In"
                  className="w-16 h-16"
                />
                <p className="text-center mt-4 font-medium text-2xl">
                  Takeaway And Dine-In
                </p>
              </div>
              <div className="w-[250px] h-[237px] bg-white rounded-md shadow-lg flex flex-col items-center justify-center p-4">
                <img
                  src="/assets/fi-rr-time-fast.png"
                  alt="Off-the-shelf Products"
                  className="w-16 h-16"
                />
                <p className="text-center mt-4 font-medium text-2xl">
                  Off-the-shelf Products
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[250px] h-[237px] bg-white rounded-md shadow-lg flex flex-col items-center justify-center p-4">
                <img
                  src="/assets/Vector.png"
                  alt="Catering & More"
                  className="w-16 h-16"
                />
                <p className="text-center mt-4 font-medium text-2xl">
                  Catering & More
                </p>
              </div>
              <div className="w-[250px] h-[237px] bg-white rounded-md shadow-lg flex flex-col items-center justify-center p-4">
                <img
                  src="/assets/fi-rr-time-fast.png"
                  alt="Oriental & More"
                  className="w-16 h-16"
                />
                <p className="text-center mt-4 font-medium text-2xl">
                  Oriental & More
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section py-20 bg-white w-full min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-[#39B54A]">
            Popular Items
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mx-auto w-full px-6">
            <div className="mx-auto">
              <MenuItem
                imageSrc="/public/assets/salad1.png"
                title="Chicken Caesar Salad"
                description="Grilled chicken, Crouton, lettuce, roumy cheese, Caesar sauce"
                price="$58.49"
                rating="4.9"
                category={""}
              />
            </div>
            <div className="mx-auto">
              <MenuItem
                imageSrc="/public/assets/salad1.png"
                title="Chicken Caesar Salad"
                description="Grilled chicken, Crouton, lettuce, roumy cheese, Caesar sauce"
                price="$58.49"
                rating="4.9"
                category={""}
              />
            </div>
            <div className="mx-auto">
              <MenuItem
                imageSrc="/public/assets/Croissant.png"
                title="Chocolate Nuts Croissant"
                description="Grilled chicken, Crouton, lettuce, roumy cheese, Caesar sauce"
                price="$58.49"
                rating="4.9"
                category={""}
              />
            </div>
          </div>
          <div className="mt-6">
            <Link to="/Menu">
              <button className="mt-6 px-6 py-2 bg-[#39B54A] text-white rounded-md hover:bg-black">
                View all
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-40 sm:hidden md:block">
        <div>
          <h2 className="text-9xl font-bold text-[#39B54A] text-center relative z-10 -mb-6">
            Trusted By
          </h2>
          <div className="bg-[#F3F3F3] text-left py-20 m-auto w-[1594px] h-[167px] flex rounded-2xl pt-12 pb-8 px-8 flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="public/assets/bbcpng.png" alt="BBC" />
            <img src="public/assets/deloitte.png" alt="deloitte" />
            <img src="public/assets/unilever.png" alt="unilever" />
            <img src="public/assets/bbcpng.png" alt="BBC" />
            <img src="public/assets/deloitte.png" alt="deloitte" />
            <img src="public/assets/unilever.png" alt="unilever" />
          </div>
        </div>
      </section>

      <div className="find-us flex flex-col md:flex-row justify-center rounded-xl items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2 md:max-w-[478px]">
          <h2
            className="font-extrabold text-[#39B54A] tracking-[0.5px] text-left leading-none"
            style={{
              fontSize: "clamp(80px, 10vw, 240px)",
              lineHeight: "clamp(70px, 8vw, 168px)",
              letterSpacing: "0.5px",
              textAlign: "left",
            }}
          >
            Find
          </h2>
          <h2
            className="font-extrabold text-[#39B54A] tracking-[0.5px] text-left leading-none"
            style={{
              fontSize: "clamp(80px, 10vw, 240px)",
              lineHeight: "clamp(70px, 8vw, 168px)",
              letterSpacing: "0.5px",
              textAlign: "left",
            }}
          >
            Us
          </h2>
        </div>

        {/* Map Section */}
        <div className="map w-full md:w-[700px] h-[400px] md:h-[600px] p-6 md:p-11 rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659.4207382539282!2d31.01267676090487!3d30.02437764902622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b805adb7199%3A0xd497df76dfbdbec1!2sSnack%26Track%20Capital%20Business%20Park!5e0!3m2!1sen!2seg!4v1725201826618!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </div>

      <section className="testimonials-section flex flex-col items-center py-20 bg-white">
        {/* Heading */}
        <h2 className="text-6xl font-bold mb-6 text-center">
          Our Testimonials
        </h2>
        <p className="text-2xl mb-12 text-center">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 max-w-[1596px] mx-auto">
          <div className="testimonial-card flex flex-col items-center w-full md:w-[480px] h-auto p-8 bg-gray-100 rounded-lg">
            <blockquote className="text-xl  mb-6 text-center ">
              "Nutritionist has been a game-changer for me. The expert guidance
              and support I received from their team made my weight loss journey
              so much easier. Thank you!"
            </blockquote>
            <img
              src="/assets/Robert.png"
              alt="Customer 1"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg font-medium">Robert Johnson</p>
          </div>

          <div className="testimonial-card flex flex-col items-center w-full md:w-[480px] h-auto p-8 bg-gray-100 rounded-lg">
            <blockquote className="text-xl  mb-6 text-center">
              "I can't thank Nutritionist enough for their personalized
              nutrition coaching. It has completely transformed my approach to
              food and helped me shed those extra pounds. Highly recommended!"
            </blockquote>
            <img
              src="/assets/Jennifer.png"
              alt="Customer 2"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg font-medium">Jennifer Anderson</p>
          </div>

          <div className="testimonial-card flex flex-col items-center w-full md:w-[480px] h-auto p-8 bg-gray-100 rounded-lg">
            <blockquote className="text-xl mb-6 text-center">
              "I had struggled with my weight for years until I found
              Nutritionist. Their personalized approach and tailored nutrition
              plan made all the difference. I've never felt better!"
            </blockquote>
            <img
              src="/assets/Emily.png"
              alt="Customer 3"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg font-medium">Emily Davis</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
