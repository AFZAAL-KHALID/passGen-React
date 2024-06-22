import Image from "next/image";
import Passwordgenerator from "./Components/Passwordgenerator";

export default function Home() {
  return (
  <>
  
  <div className="w-full h-screen p-6 ">
  <h1 className="w-full font-bold text-center text-[3rem] rounded-lg bg-black text-white">Password Generator with <span className="text-blue-400">React</span></h1>
    
    <Passwordgenerator/>
    
  </div>
  
  </>
  );
}
