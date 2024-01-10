import React, { useState } from "react";
import axios from "axios";
import { url } from "../url";
import { errorToast, toastSuccess } from "../Toastify/toasts";

function UpdateLogo() {
  const [logo, setLogo] = useState("");
  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", logo);
    axios
      .post(`${url}/upload`, formData)
      .then((data) => {
        toastSuccess("Image has been uploaded successfully!");
        // console.log(data.data);
      })
      .catch((error) => {
        errorToast("Error in Uploading");
        // console.log(error);
      });
    setLogo("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-3  justify-between flex-col md:flex-row border items-center p-2 rounded my-3"
      >
        <label className="flex  md:w-2/3 text-start items-center">
          <span className=" w-1/3">Update Logo:</span>
          <input
            type="file"
            onChange={handleLogoChange}
            required
            className=" w-2/3 border p-1"
          />
        </label>
        <button
          type="submit"
          className=" bg-fuchsia-950 md:p-2 p-1 font-bold text-sm rounded-md text-center text-white"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default UpdateLogo;
