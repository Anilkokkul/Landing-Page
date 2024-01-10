import React, { useState, useEffect } from "react";
import { url } from "../url";
import axios from "axios";
import { errorToast, toastSuccess } from "../Toastify/toasts";
function ButtonTextUpdated() {
  const [text, setText] = useState("");

  useEffect(() => {
    getText();
  }, []);

  const getText = () => {
    axios
      .get(`${url}/get-text`)
      .then((data) => {
        setText(data.data[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/update-text`, { text: text })
      .then((data) => {
        toastSuccess("Your Text has been updated!");
        getText();
      })
      .catch((error) => {
        errorToast("Error in updating the text.");
        // console.log(error);
      });
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-3  justify-between flex-col md:flex-row border items-center p-2 rounded my-3"
      >
        <label className="flex  md:w-2/3 text-start items-center">
          <span className=" w-1/3 ">Update Button Text:</span>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="w-2/3 border p-1"
            placeholder="Enter text"
            required
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

export default ButtonTextUpdated;
