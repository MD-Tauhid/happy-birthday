import Image from "next/image";
import img from "../public/assets/happy-birthday.jpg"

export default function Home() {
  return (
    <main className="">
      <div className=" text-8xl font-bold text-center strk text-transparent select-none">
      <marquee className="h-28" behavior="scroll" direction="left" scrollamount="20">Happy Birthday To You <span className="text-[#EB6A66]"> Tasmim</span> my <span className="text-[#EB6A66]">Tasu</span></marquee>
      </div>
      <div className="flex items-center justify-center mt-20">
        {/* <div className="relative">
          <div className="bg-[#CD5C5C] w-48 h-16 absolute top-28 shadow-lg rounded-[100%]"></div>
          <div className="bg-[#CD5C5C] h-28 w-48 top-8 absolute"></div>
          <div className="absolute w-4 top-9 h-10 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-6 top-8 left-[168px] h-10 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-8 top-12 left-2 h-5 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-48 h-16 bg-amber-800 rounded-[100%] shadow-sm">
            <h1 className="text-pink-300">Happy Birthday</h1>
          </div>
          <div className="absolute w-6 h-10 top-12 left-9 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-8 top-[52px] left-[52px] h-5 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-6 h-10 top-[52px] left-20 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-8 top-[52px] left-[96px] h-5 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-12 top-[52px] left-32 h-5 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
          <div className="absolute w-6 h-10 top-[52px] left-32 bg-amber-800 rounded-b-[100%] shadow-lg"></div>
        </div> */}
        <div>
          <Image src={img} height={100} width={500}></Image>
        </div>
      </div>
    </main>
  );
}
