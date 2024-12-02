// "use client"

// import LoginForm from "@/components/LoginForm"
// import SignUpForm from "@/components/Signup"
// import { Button } from "@/components/ui/button"
// // import { Ghost } from "lucide-react"
// import { useState } from "react"

// export default function User() {

//     const [isLogin, setIsLogin] = useState(true)

//     return(
//         <div className="min-h-screen flex flex-col justify-center items-center content-center bg-gray-50 bg-black text-white">
//             <div className="mb-4"> 
//                 <Button 
//                     className="text-sm"
//                     onClick={() => setIsLogin(!isLogin)}
//                     variant={"ghost"}
//                 >
//                     {isLogin ? "Need to account: Create" : "LogIn with your current account"}
//                 </Button>
//             </div>
//         </div>
                     
//     )
// }



"use client";

import { useState } from "react";
import LoginForm from "@/components/LoginForm"; // Component for user login
import SignUpForm from "@/components/Signup"; // Component for user signup
import { Button } from "@/components/ui/button"; // Button component

export default function User() {
  // State to toggle between Login and Sign-Up forms
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-black">
      <div className="mb-4">
        <Button
          className="text-sm"
          onClick={() => setIsLogin(!isLogin)}
          variant={"ghost"}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log In"}
        </Button>
      </div>

      {/* Conditional Rendering: Show LoginForm or SignUpForm based on isLogin */}
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}
