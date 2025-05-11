import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import IIIT_KOTA from "../assets/RSET-Kochi-Logo.png";
import R_HSS from "../assets/359844570_582310587435057_4183705170198742365_n.jpg"; // 🔁 Make sure you have this logo in assets
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>

        {/* College */}
        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={IIIT_KOTA}
                alt="RSET"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider">
                Rajagiri School of Engineering and Technology
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Bachelor of Technology
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                November 2021 - May 2025
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Computer Science And Engineering
              </p>
            </div>
          </div>

          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>

        {/* Higher Secondary */}
        <div
          className="EDUCATION flex gap-7 justify-between mt-10 flex-row-reverse max-sm:flex-col"
          data-aos="fade-left"
        >
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={R_HSS}
                alt="Rajagiri HSS"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-green-500 via-emerald-600 to-teal-500 dark:from-[#10b981] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider">
                Rajagiri Higher Secondary School
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Higher Secondary Education (Plus One & Two)
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                June 2019 - March 2021
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Bio-Maths Stream
              </p>
            </div>
          </div>

          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
