import React from "react";

const Contact = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Contacts"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          us HERE
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 w-8/12 my-5 mx-auto">
        Have questions or feedback? Fill out the form below, and we'll get back
        to you as soon as possible!
      </p>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
            <div className="w-full">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
