import { Container, useBreakpointValue } from "@chakra-ui/react";
import { MainSection } from "./MainSection";
import { VantageSection } from "./VantageSection";
import { AboutSection } from "./AboutSection";
import { TestimonialSection } from "./TestimonialSection";
import { ItalianFormSection } from "./ItalianFormSection";
import { NonItalianFormSection } from "./NonItalianFormSection";
import { Footer } from "./Footer";


export function Container_1() {


    // Iphone, ipads mini and pro. Desktops not included
    const isMobileVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: true,
        xl: false,
    })

    return (
        <Container
            minW='100%'
            bg='backgroundLight'
            centerContent={true}
            gap={16}
            p={0}
            m={0}
            position={'relative'}
        >
            {/* <Flex color='black' position={'absolute'} top={1000} > O </Flex> */}
            <MainSection />

            <VantageSection />

            <AboutSection />

            <TestimonialSection />

            <ItalianFormSection />

            <NonItalianFormSection />

            <Footer />
        </Container>
    )
}