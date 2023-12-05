import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { aboutSectionData } from "./data";
import { AboutParagraphs } from "./AboutParagraphs";
import { AboutImages } from "./AboutImages";
import { EducationParagraphs } from "./EducationParagraphs";
import { EducationImages } from "./EducationImages";


export function AboutSection() {

    return (
        <Flex
            w='100%'
            pt={['8rem', '8rem', '20rem', '20rem']}
            pb={[12,12,'8rem','8rem']}
            bgColor={'backgroundLight'}
            bgImage={'static/img/container_1/benefitsSection/benefits-wave.png'}
            bgPos={'top'}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}

            flexDir='column'

            px='1rem'
            gap={12}

            align={'center'}
        >

            {/* SOBRE A DRA LARISSA */}
            <Flex 
            flexDir={['column-reverse','column-reverse','column-reverse','row']} 
            textAlign='center'
            >
                <Flex
                    w='100%'
                    minH={['16rem', '16rem', '24rem', '24rem']}
                    justify={'center'}
                    gap={2}
                    p={4}
                >
                    <AboutImages />
                </Flex>

                <Flex
                    flexDir={'column'}
                    w='100%'
                    gap={[4, 4, 8, 12]}
                    textAlign={['left','left','left','right']}
                    p={[4, 4, 0, 4]}
                >
                    <AboutParagraphs />
                </Flex>


            </Flex>

            {/* FORMAÇÃO PROFISSIONAL */}
            <Flex 
            flexDir={['column','column','column','row']} 
            textAlign='center'
            >
                
                <Flex
                    flexDir={'column'}
                    w='100%'
                    gap={[4, 4, 8, 12]}
                    textAlign={['right','right','right','left']}
                    p={[4, 4, 0, 4]}
                >
                    <EducationParagraphs />
                </Flex>
                
                <Flex
                    w='100%'
                    minH={['16rem', '16rem', '24rem', '24rem']}
                    justify={'center'}
                    gap={2}
                    p={4}
                >
                    <EducationImages />
                </Flex>



            </Flex>
        </Flex>
    )
}