import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from '../../../public/appBanner.png'

const HomePage = () => {
    return (
        <section>
            <div className='overflow-hidden
                px-4
                sm:px-6
                mt-6
                sm:flex
                sm:flex-col
                gap-4
                md:justify-center
                md:items-start
            '>
                <TitleSection pill="Your workspace, Perfected" title='All-In-One Collaboration and Productivity Platform'/>
                <div className="bg-white p-[2px] mt-[6] rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
                    <Button variant="btn-secondary" className="w-full rounded-[10px] p-6 text-2xl bg-background">Get It FREE</Button>
                </div>
                <div className="md:mt-[-90px] sm:w-full w-[750px] justify-center items-center mt-[-40px] sm:ml-0 ml-[-50px]"><Image src={Banner} alt='Application Banner' /></div>
            </div>
        </section>
    )
}

export default HomePage