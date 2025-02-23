import React, { useState } from "react";

import Header from "./Header";

import background from "../img/background.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Header />
      <div
        className="bg-stone-900 overflow-x-hidden"
        id="schedule"
        style={{
          backgroundImage: `url(${background})`,
          // height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="pt-20 border-x-2 border-yellow-600 shadow-2xl lg:px-[5rem] flex flex-col items-center justify-center min-h-[100vh] gap-4 max-w-[80vw] lg:max-w-[70vw] mx-auto text-yellow-600 bg-gradient-to-b from-red-950 to-stone-950">
          <div class="mx-auto">
            <div class="flex flex-col w-[50vw] align-center items-center gap-4 py-5 text-stone-50">
              <h1 class="text-4xl font-semibold text-yellow-600">Register</h1>
              <div class="h-1 w-full border-b border-yellow-600 mb-3">
                &nbsp;
              </div>
              {/* <form onSubmit={handleSubmit} class="flex flex-col gap-3 font-sans">
                <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="border rounded px-3 py-1 bg-transparent"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="border rounded px-3 py-1 bg-transparent"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" class="border rounded px-3 py-1 my-3">Submit</button>
              </form> */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSehijsAxw15SMe7vDiHvMwZYT7q9rP2L_KsOkmyjjh71F6Bkg/viewform?embedded=true"
                class="w-full border-2 border-yellow-600 rounded-lg shadow-2xl bg-stone-50 p-5"
                height="800"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
