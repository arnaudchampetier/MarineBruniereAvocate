import React from "react";

function Contact(props) {
  const { lightMode } = props;

  const containerClassName = lightMode
    ? "bg-gray-500"
    : "bg-gradient-to-b from-black to-gray-800 text-white";
  const titleClassName = lightMode ? "text-black" : "text-white";
  const subtitleClassName = lightMode ? "text-gray-700" : "text-gray-500";

  return (
    <div
      id="contact"
      name="contact"
      className={`${containerClassName} w-full h-screen p-4`}
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-96 md:mt-48">
          <p
            className={`text-4xl font-bold inline border-b-4 border-gray-500 p-2 ${titleClassName}`}
          >
            Contact
          </p>
          <p className={`py-6 ${subtitleClassName}`}>
            Remplissez le formulaire pour me contacter !
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e8c06757-d7cd-472c-8f6f-e12b6dbf354e"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="entrez votre nom"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="mail"
              placeholder="entrer votre mail"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="entrer votre message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's go!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
