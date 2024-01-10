import UpdateLogo from "./UpdateLogo";
import ButtonTextUpdated from "./ButtonTextUpdated";
import EmailUpdate from "./EmailUpdate";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function AdminPanel() {
  return (
    <div className="text-center p-6">
      <h1 className="m-3 p-3 text-4xl">Admin Panel</h1>
      <button className=" bg-fuchsia-950 p-2 font-bold rounded-md text-center mb-6 text-white my-4 w-full sm:w-48 ">
        <Link to={"/"} className="">
          <IoMdArrowRoundBack className="mx-1 inline h-4 0-1" /> Back to Main
          App
        </Link>
      </button>
      <p>
        Welcome to the admin panel. Here you can manage all aspects of the
        website such as edit logo,text update and store email.
      </p>
      <div className=" lg:w-2/3 text-center mx-auto md:px-5 ">
        <UpdateLogo />
        <ButtonTextUpdated />
        <EmailUpdate />
      </div>
    </div>
  );
}

export default AdminPanel;
