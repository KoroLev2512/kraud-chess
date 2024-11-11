import React from 'react';
import {Main} from '@/widgets/Main'
import {Info} from "@/widgets/Info";
import {Stages} from "@/widgets/Stages";
import {Carousel} from "@/widgets/Carousel";
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Line} from "@/shared/ui/Line";
import {Footer} from "@/shared/ui/Footer";
import {carousel_slides} from "@/shared/store/slides";


const Home: React.FC = () => {

    return (
        <>
            <Main/>
            <Info/>
            <Stages/>
            <Carousel slides={carousel_slides}/>
            <Line/>
            <Footer/>
            <SpeedInsights/>
        </>
    );
};

export default Home;