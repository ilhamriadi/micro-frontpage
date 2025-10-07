import React from "react";

export default function Clients() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-amazon.png"
          alt="logo amazon"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-microsoft.png"
          alt="logo microsoft"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-tesla.png"
          alt="logo tesla"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-google.png"
          alt="logo google"
          className="mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/6 mb-8 md:mb-0">
        <img
          src="/images/logo-facebook.png"
          alt="logo facebook"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
