import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div className="p-2 px-4 w-full mt-10 mb-10">
      <div className="flex flex-col mb-4">
        <h2 className="text-3xl font-semibold text-primary">Education</h2>
        <p className="text-primary/50 text-sm mt-1">My academic background.</p>
      </div>
      <div className="flex gap-4 mt-2 items-center justify-between w-full p-5 md:p-6 border border-primary/10 rounded-xl bg-primary/5 hover:bg-primary/10 hover:shadow-md transition-all duration-300">
        <div className="flex gap-4 items-center w-full">
          <div>
            <Image
              src={"/lpulogo.jpg"}
              width={60}
              height={60}
              alt="LPU LOGO"
              className="rounded-full shadow-sm"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2 relative">
            <div className="text-primary">
              <div className="font-bold text-lg leading-tight">Lovely Professional University</div>
              <div className="text-primary/70 text-sm mt-1">
                B.Tech in Computer Science and Engineering AI/ML
              </div>
            </div> 
            <div className="text-primary/60 text-sm font-medium whitespace-nowrap md:ml-auto bg-primary/10 border border-primary/10 px-3 py-1 rounded-full self-start md:self-auto mt-2 md:mt-0">
              2023 - 2027
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;