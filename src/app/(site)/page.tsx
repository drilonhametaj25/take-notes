import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import { CLIENTS } from "@/lib/constants";

const HomePage = () => {
  return (
    <>
      <section
        className="overflow-hidden
            px-4
            sm:px-6
            mt-6
            sm:flex
            sm:flex-col
            gap-4
            md:justify-center
            justify-center
                "
      >
        <TitleSection
          pill="✨ Your workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-[6] rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px] justify-center">
          <Button
            variant="btn-secondary"
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get It FREE
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full w-[750px] justify-center items-center mt-[-40px] sm:ml-0 ml-[-50px]">
          <Image src={Banner} alt="Application Banner" />
          <div
            className="
                            bottom-0
                            top-[50%]
                            bg-gradient-to-t
                            dark:from-background
                            left-0
                            right-0
                            z-10
                        "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden 
                flex 
                after:content[''] 
                after:dark:from-brand-dark 
                after:to-transparent 
                after:from-background 
                after:bg-grandient-to-l 
                after:right-0 
                after:top-0 
                after:bottom-0 
                after:w-20 
                after:z-10
                after:absolute

                before:content[''] 
                before:dark:from-brand-dark 
                before:to-transparent 
                before:from-background 
                before:bg-grandient-to-r
                before:left-0 
                before:top-0 
                before:bottom-0 
                before:w-20 
                before:z-10
                before:absolute
                "
        >
            {[...Array(2)].map((arr) => (
                <div key={arr} className="flex flex-nowrap animate-slide">
                    {CLIENTS.map((client) => (
                        <div key={client.alt} className="relative w-[200px] m-20 shrink-0 flex items-center">
                            <Image src={client.logo} alt={client.alt} width={200} className="object-contain max-w-none"/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </section>
      <section className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      ">
          <div className="w-[30%]
             blur-[120px]
             rounded-full
             h-32
             absolute
             bg-brand-primaryPurple/50
             -z-10
             top-22
          "/>
          <TitleSection title="Keep track of your meetings all in one place"
            subheading="Capture your ideas, thoughts, and meetings notes in a structured and organized manner"
            pill="Features"
          />
          <div className="mt-10 max-w-[450px] justify-center items-center relative sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10">
            <Image src={Cal} alt="Banner"  className="rounded-2xl"/>
          </div>

      </section>
    </>
  );
};

export default HomePage;
