import { Divider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { aboutSectionData } from "./data";
import { CallToActionButton } from "../../CallToActionButton";

export function AboutSection() {


    const isMobileVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
    })

    return (
        <Flex
            w='100%'
            maxW='1920px'
            justifyContent={'center'}
            borderRadius={'64px 0px 64px 0px'}
            bgColor='dark.800'
            zIndex={3}
            py={[12, 16, 16, 16, 32]}
            px={[8, 16, 16, 16, 0]}
        >
            <Flex
                maxW={'1200px'}
                flexDir={[
                    'column',
                    'column',
                    'column',
                    'row',
                    'row'
                ]}
                gap={[16, 16, 16, 24, 32]}
            >
                {/* TEXTO 1*/}
                <Flex
                    flexDir={'column'}
                    textAlign={'left'}
                    justifyContent={'center'}
                    gap={8}
                    w='100%'
                >
                    <Text
                        fontWeight={'700'}
                        fontSize={['2.5rem', '2.5rem', '3rem', '3rem', '3rem']}
                        lineHeight={'4rem'}
                        color={'teal.300'}
                    >
                        {aboutSectionData.about.clube_do_passaporte.title}
                    </Text>
                    <Flex
                        flexDir={'column'}
                        fontSize={['1rem', '1rem', '1rem', '1.25rem', '1.25rem']}
                        fontWeight={'400'}
                        lineHeight={'1.875rem'}
                        textAlign={'justify'}
                        color={'light.400'}

                    >
                        {aboutSectionData.about.clube_do_passaporte.description}
                    </Flex>


                </Flex>


                {/* DIVIDER BOLA BOLA */}
                <Flex
                    position={'relative'}
                    justifyContent={'center'}
                >

                    {/* DIVIDER */}
                    {/* BOLA BOLA */}
                    {isMobileVersion ?
                        <>
                            <Flex
                                // w='100%'
                                zIndex={1}
                                gap={4}
                                top={-10}
                                left={5}
                                alignItems={'center'}
                                flexDir={'row'}
                                position={'absolute'}
                            >
                                <Flex
                                    w='5rem'
                                    h='5rem'
                                    bg='light.400'
                                    borderRadius={'100%'}
                                ></Flex>
                                <Flex
                                    w='2.5rem'
                                    h='2.5rem'
                                    bg='light.400'
                                    borderRadius={'100%'}
                                ></Flex>

                            </Flex>
                            <Divider
                                orientation="horizontal"
                            />
                        </>
                        :
                        <>
                            {/* BOLA BOLA */}
                            <Flex
                                w='100%'
                                zIndex={1}
                                gap={4}
                                top={16}
                                alignItems={'center'}
                                flexDir={'column'}
                                position={'absolute'}
                            >
                                <Flex
                                    w='5rem'
                                    h='5rem'
                                    bg='light.400'
                                    borderRadius={'100%'}
                                ></Flex>
                                <Flex
                                    w='2.5rem'
                                    h='2.5rem'
                                    bg='light.400'
                                    borderRadius={'100%'}
                                ></Flex>

                            </Flex>
                        </>
                    }

                    <Divider
                        mx='auto'
                        orientation="vertical"
                    />
                </Flex>

                {/* TEXTO 2*/}
                <Flex
                    flexDir={'column'}
                    textAlign={'right'}
                    justifyContent={'space-between'}
                    w='100%'
                >
                    <Flex
                        flexDir={'column'}
                        gap={8}
                    >
                        <Text
                            fontWeight={'700'}
                            fontSize={['2.5rem', '2.5rem', '3rem', '3rem', '3rem']}
                            lineHeight={'4rem'}
                            color={'teal.300'}
                        >
                            {aboutSectionData.about.eurolink.title}
                        </Text>
                        <Flex
                            flexDir={'column'}
                            fontSize={['1rem', '1rem', '1rem', '1.25rem', '1.25rem']}
                            fontWeight={'400'}
                            lineHeight={'1.875rem'}
                            textAlign={'justify'}
                            color={'light.400'}

                        >
                            {aboutSectionData.about.eurolink.description}
                        </Flex>
                    </Flex>
                    <CallToActionButton
                        bgCircleColor="light.400"
                        bgColor="teal.300"
                        fontColor="dark.800"
                        height="3.75rem"
                        width="19rem"
                        title="Quero tirar minha cidadania"
                    />


                </Flex>

            </Flex>
        </Flex>
    )
}