import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-[#39B54A] mb-12 md:mb-40">Contact Us</h1>

        {/* First Section: Contact Details */}
        <div className="contact-details rounded-xl bg-[#F3F3F3] py-8 md:h-60 flex flex-col md:flex-row justify-center align-middle items-center mb-16 space-y-4 md:space-y-0 md:space-x-8">
          {/* Email Button */}
          <a href="mailto:support@nutritionist.com" className="w-full md:w-auto">
            <button className="flex flex-col items-center bg-[#39B54A] text-white w-full md:w-[325px] h-[141px] py-8 px-4 md:px-8 rounded-[8px] hover:bg-black gap-5 border-opacity-0">
              <img
                src="/public/assets/email.png"
                alt="Email Icon"
                className="w-5 h-5"
              />
              <span className="text-sm md:text-base">Email: support@nutritionist.com</span>
            </button>
          </a>

          {/* Phone Button */}
          <a href="tel:010123456789" className="w-full md:w-auto">
            <button className="flex flex-col items-center bg-[#39B54A] text-white w-full md:w-[325px] h-[141px] py-8 px-4 md:px-8 rounded-[8px] hover:bg-black gap-5 border-opacity-0">
              <img
                src="/public/assets/phone.png"
                alt="Phone Icon"
                className="w-5 h-5"
              />
              <span className="text-sm md:text-base">Phone: 010123456789</span>
            </button>
          </a>

          {/* Location Button */}
          <a
            href="https://maps.app.goo.gl/eERZwtweBqhe9WuP6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="flex flex-col items-center bg-[#39B54A] text-white w-full md:w-[325px] h-[141px] py-8 px-4 md:px-8 rounded-[8px] hover:bg-black gap-5 border-opacity-0">
              <img
                src="/public/assets/location.png"
                alt="Location Icon"
                className="w-5 h-5"
              />
              <span className="text-sm md:text-base">Somewhere in the world</span>
            </button>
          </a>
        </div>

        {/* Second Section: Form and Map */}
        <div className="form-and-map bg-[#F3F3F3] flex flex-col md:flex-row justify-center rounded-xl items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Contact Form */}
          <div className="contact-form bg-[#F3F3F3] p-6 md:p-10 w-full md:w-1/2">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-left text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-left text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-left text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-left text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#39B54A] text-white rounded-md hover:bg-black"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="map w-full md:w-1/2 p-6 md:p-11">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659.4207382539282!2d31.01267676090487!3d30.02437764902622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b805adb7199%3A0xd497df76dfbdbec1!2sSnack%26Track%20Capital%20Business%20Park!5e0!3m2!1sen!2seg!4v1725201826618!5m2!1sen!2seg"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Our Location"
            ></iframe>
            {/* Social Buttons */}
            <div className="social-buttons flex justify-center md:justify-end mt-6 space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2"
              >
                <button className="flex items-center">
                  <img
                    src="/public/assets/fButton.png"
                    alt="Facebook"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </button>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2"
              >
                <button className="flex items-center">
                  <img
                    src="/public/assets/tButton.png"
                    alt="Twitter"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <img
                    src="/public/assets/lButton.png"
                    alt="LinkedIn"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;