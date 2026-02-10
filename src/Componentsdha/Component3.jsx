import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
export default function Component3() {
return (
<div className="w-screen  mx-auto  flex justify-center bg-gray-200">
<div className="w-80 p-3 text-center">
<p className="text-sm text-gray-500 mb-3">Or Continue With</p>


<div className="flex justify-center gap-4 mb-4">
<button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition"> <FcGoogle size={20}/></button>
<button className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:shadow-md transition"> <FaApple size={20}/></button>
</div>


<p className="text-sm">
Already have an Account?{' '}
<span className="font-semibold">SIGN IN</span>
</p>
</div>
</div>
);
}




