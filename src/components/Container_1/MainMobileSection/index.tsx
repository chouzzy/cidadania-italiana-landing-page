import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { mainSectionData } from "./data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { AgendeUmaConsultaButton } from "../../CallToActionButton";


export function MainMobileSection() {

    return (
        // CONTAINER PRINCIPAL
        <Flex
            h='100%'
            bgColor={'rose.400'}
            borderRadius={'0px 0px 120px 0'}
            boxShadow={'lg'}

        >
            {/* SEGUNDO CONTAINER */}
            <Flex
                w='100%'
            >
                {/* TEXTOS */}
                <Flex
                    flexDir={'column'}
                    w='100%'
                    h='auto'
                    gap={[6, 12, 8, 16, 8]}
                    p={[2, 2, 0, 0]}

                >
                    <Flex
                        h='100%'
                        flexDir='column'
                        justifyContent={'space-between'}
                        gap={16}
                        p={8}
                    >
                        <Flex
                            flexDir={'column'}
                            gap={[2,6,6,16,6]}
                        >


                            {/* LOGO + TITLE */}
                            <Flex
                                flexDir={'column'}
                            >
                                <Image
                                    src={"static/img/container_1/mainSection/main-logo.png"}
                                    objectFit={'cover'}
                                    objectPosition={'top'}
                                />
                            </Flex>



                            {/* SUBTITLE */}
                            <Text
                                fontWeight={'100'}
                                fontFamily={'Montserrat'}
                                fontSize={['1.5rem', '1.5rem', '2rem', '4rem','4rem']}
                                lineHeight={['1.5rem', '1.5rem', '2rem', '4rem','4rem']}
                                textAlign={'center'}
                                color='light.400'
                            >
                                {mainSectionData.subTitle}
                            </Text>

                            <Flex
                                mt={4}
                                maxH={['60vh','60vh','60vh','50vh','60vh']}
                            >
                                <Image
                                    src={"static/img/container_1/mainSection/main-sabrina.png"}
                                    borderRadius={'180px'}
                                    boxShadow={'lg'}
                                    objectFit={'cover'}
                                    objectPosition={'top'}
                                    
                                />
                            </Flex>
                        </Flex>

                        <Flex
                            flexDir={'column'}
                            gap={[6,4,4,8,4]}
                            textAlign={'center'}
                            alignItems={'center'}
                        >

                            {/* BUTTON TITLE */}
                            <Text
                                fontWeight={'300'}
                                fontFamily={'Montserrat'}
                                fontSize={['1rem', '1rem', '1.25rem', '2rem','4rem']}
                                lineHeight={['1.25rem', '1.5rem', '2rem', '1rem','4rem']}
                                color='light.400'
                            >
                                {mainSectionData.subTitle2}
                            </Text>

                            {/* BUTTON CALL TO ACTION */}
                            <AgendeUmaConsultaButton
                                bgColor={'light.400'}
                                fontColor={'rose.400'}
                            />
                        </Flex>

                    </Flex>
                </Flex>


            </Flex>
        </Flex>
    )
}