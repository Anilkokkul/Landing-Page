import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../url";
import { errorToast, toastSuccess } from "../Toastify/toasts";

function EmailUpdate() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    getEmail();
  }, []);

  const getEmail = () => {
    axios
      .get(`${url}/get-text`)
      .then((data) => {
        setEmail(data.data[0].email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/update-email`, { email: email })
      .then((data) => {
        toastSuccess("Your email has been updated successfully.");
        getEmail();
        // console.log(data.data);
      })
      .catch((error) => {
        errorToast("Error while updating email");
        // console.log(error);
      });
    setEmail("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-3  justify-between flex-col md:flex-row border items-center p-2 rounded my-3"
      >
        <label className="flex  md:w-2/3 text-start items-center">
          <span className=" w-1/3">Email:</span>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            required
            className="w-2/3 border p-1"
            placeholder="enter email..."
          />
        </label>
        <button
          className=" bg-fuchsia-950 md:p-2 p-1 font-bold text-sm rounded-md text-center text-white"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EmailUpdate;
