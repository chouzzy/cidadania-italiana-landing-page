import { Flex } from "@chakra-ui/react";
import { Testimonies } from "./Testimonies";
import { TestimonialHeader } from "./TestimonialHeader";


export function TestimonialSection() {

    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            maxW='1920px'
            flexDir={'column'}
            bgColor={'light.400'}
            zIndex={2}
            borderRadius={'64px'}
        >
            <Flex
                bgImage={'static/img/container_1/TestimonialSection/italy.png'}
                bgRepeat={'no-repeat'}
                bgPos={'center'}
                bgSize={'cover'}
                h={['32rem', '32rem', '32rem', '36rem', '42rem']}
                mt={[-60]}
            > </Flex>

            <Flex
                bgColor={'light.400'}
                flexDir='column'
                borderRadius={'64px'}
                mt={[-32]}
                pt={[4,4,6,12,12]}
            >
                <TestimonialHeader />
                <Testimonies />
            </Flex>
        </Flex>
    )
}