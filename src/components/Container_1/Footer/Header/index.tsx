import { Divider, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { InstagramLogo } from "phosphor-react";
import { CallToActionButton } from "../../../CallToActionButton";



export function Header() {

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
            px={['2rem', '2rem', '2rem', '2rem', '6rem']}
            py={['1rem', '1rem', '2rem', '2rem', '2rem']}
            alignItems={'center'}
            justifyContent={'space-between'}
            position={'relative'}
            flexDir={['column', 'column', 'column', 'row', 'row']}
        >


            {/* DIVIDER */}
            {/* BOLA BOLA */}
            {isMobileVersion ?
                ''
                :
                <>
                    {/* DIVIDER */}
                    <Flex
                        maxW={'100vw'}
                        w='100%'
                        left={'0'}
                        position={'absolute'}
                        border={'1px solid white'}
                        color={'black'}
                        zIndex={0}
                    ></Flex>

                    {/* BOLA BOLA ESQUERDA */}
                    <Flex
                        zIndex={1}
                        gap={4}
                        w='100%'
                        alignItems={'center'}
                        fontFamily={'Poppins'}
                    >
                        <Flex
                            w='5rem'
                            h='5rem'
                            bg='light.400'
                            borderRadius={'100%'}
                            border='1px solid black'
                        ></Flex>
                        <Flex
                            w='2.5rem'
                            h='2.5rem'
                            bg='light.400'
                            borderRadius={'100%'}
                            border='1px solid black'
                        ></Flex>

                    </Flex>
                </>
            }

            {/* VANTAGENS */}
            <Flex
                zIndex={1}
                fontFamily={'Heebo'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                mb={['', '', '', 3, 9]}

                position={'absolute'}
                left={0}
                right={0}
                top={[-4, -4, -4, 'initial', 'initial']}
            >

                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        color={'teal.500'}
                        fontWeight={'700'}
                        fontSize={['2rem', '2rem', '2rem', '2rem', '3rem']}
                    >
                        Onde nos encontrar
                    </Text>
                </Flex>

                <Flex
                >
                    <Text
                        color={'light.400'}
                        fontWeight={'300'}
                        fontSize={['1rem', '1rem', '1rem', '1.5rem', '1.5rem']}
                    >
                        E entrar em contato conosco
                    </Text>
                </Flex>

            </Flex>

            {/* BOLA BOLA DIREITA */}
            {isMobileVersion ?
                ''
                :

                <Flex
                    zIndex={1}
                    gap={4}
                    w='100%'
                    alignItems={'center'}
                    justifyContent={'right'}
                    fontFamily={'Poppins'}
                >
                    <Flex
                        w='2.5rem'
                        h='2.5rem'
                        bg='light.400'
                        borderRadius={'100%'}
                        border='1px solid black'
                    ></Flex>

                    <Flex
                        w='5rem'
                        h='5rem'
                        bg='light.400'
                        borderRadius={'100%'}
                        border='1px solid black'
                    ></Flex>

                </Flex>
            }

        </Flex>
    )
}