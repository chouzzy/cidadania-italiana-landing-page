import { Box, Button, Container, Flex, HStack, Heading, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { } from "react-icons/bi";
import { TfiQuoteRight } from "react-icons/tfi";
import { useRef } from "react";
import { commentsSectionData } from "./data";
import { CaretCircleLeft, CaretCircleRight, Quotes } from "phosphor-react";
import { Header } from "./Header";
import { aboutSectionData } from "../AboutSection/data";
import { AgendeUmaConsultaButton } from "../../CallToActionButton";
import { Carousel_1 } from "./Carousel_1";
import { Carousel_2 } from "./Carousel_2";
import { JobInfo } from "./JobInfo";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards]);

export function CommentsSection() {
    return (

        <Flex
            w='100%'
            gap={32}

            flexDir={'column'}

            justifyContent={'center'}
            alignItems={'center'}
        >

            {/* Carrossel de fotos */}
            <Carousel_1 />

            {/* Carrossel de depoimentos */}
            <Carousel_2 />

            {/* O TRABALHO DE UMA ODONTOPEDIATRIA */}
            <JobInfo />


        </Flex>

    );
}