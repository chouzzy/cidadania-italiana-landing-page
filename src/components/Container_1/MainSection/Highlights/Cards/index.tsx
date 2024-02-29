import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { RoadHorizon, Heart, Horse } from "@phosphor-icons/react";
import { AirplaneTakeoff } from "phosphor-react";
import { Card_1 } from "./Card_1";
import { Card_2 } from "./Card_2";
import { CallToActionButton } from "../../../../CallToActionButton";

export function Cards() {

    const isMobileVersion = useBreakpointValue({
        base:true,
        sm:true,
        md:true,
        lg:false,
        xl:false
    })

    return (

        <>
            <Card_1 />
            {isMobileVersion?
            <CallToActionButton
                bgCircleColor="teal.300"
                bgColor="dark.800"
                fontColor="light.400"
                height="2.5rem"
                width='15rem'
                title="Adquirir minha cidadania"
            />
            :
            ''
            }
            <Card_2 />
        </>
    )
}