import { FaUserAstronaut } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { NavBar } from "../../components/navbar";

export const UserPage = () => {
  return (
    <>
      <div className="bg-black h-screen">
        <div className="flex flex-row ">
          <div className="flex justify-center items-center rounded-full border-2 border-solid bg-gray-800 border-white h-28 w-28 m-8">
            <FaUserAstronaut size={32} className="text-white" />
          </div>
          <div className="flex mt-4">
            <p className="m-4 mt-12 text-3xl text-white">Name of user</p>
          </div>
        </div>
        <div className="flex flex-row ">
          <p className="text-white ml-7 text-3xl">Playlist</p>
          <div className="flex ml-52">
            <FiAlignJustify size={30} className=" text-white " />
          </div>
        </div>
        <div className="flex flex-col m-6 gap-4 ">
          <div className="flex flex-row">
            <div className="border-solid border-white border h-32 w-32"></div>
            <div className="flex flex-col">
              <p className="text-white text-3xl ">Account</p>
              <p className="text-white text-3xl ">Account</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="border-solid border-white border h-32 w-32"></div>
            <div className="flex flex-col">
              <p className="text-white text-3xl ">Account</p>

              <p className="text-white text-3xl ">Account</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-screen">
          <NavBar />
        </div>
      </div>
    </>
  );
};