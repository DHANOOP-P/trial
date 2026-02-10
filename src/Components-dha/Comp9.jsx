import {Link} from "react-router-dom";
const  Comp9 = ({ open = true, image }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-black">
      
      <div className="w-[80%] md:w-[60%]  md:pt-0 md:pb-15 rounded-2xl bg-[#F5F9FF]   p-0 text-center shadow-2xl">
        <div className="w-full h-9 flex justify-end items-center pr-5">
           <Link to="/Page11">
             <button className=" mt-0 bg-red-700 w-4 h-4 rounded-full"> </button>
           </Link>
        </div>
        {/* Illustration */}
       
        <img
          src={image}
          alt="success"
          className="mx-auto mb-4 h-27 w-29"
        />

        {/* Title */}
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Congratulations 🎉
        </h2>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-500">
          Your account is ready to use. You’ll be redirected to the Home page in
          a few seconds.
        </p>

        {/* Loader */}
        <div className="flex justify-center">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800"></span>
        </div>
      </div>
    </div>
  );
};

export default Comp9;