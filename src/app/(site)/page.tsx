import TitleSeciton from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
    return (
        <section>
            <div className='overflow-hidden
                px-4
                sm:px-6
                mt-10
                sm:flex
                sm:flex-col
                gap-4
                md:justify-center
                md:items-start
            '>
                <TitleSeciton pill="Your workspace, Perfected" title='All-In-One Collaboration and Productivity Platform'/>
                <div className="bg-white p-[2px] mt-[6] reounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
                    <Button></Button>
                </div>
            </div>
        </section>
    )
}

export default HomePage