import { Divider, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { CallToActionButton } from "../../../CallToActionButton";

export function TestimonialHeader() {

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
            pt={['1rem', '1rem', '2rem', '4rem', '4rem']}
            mt={[12,24,12,0,0]}
            pb={['2rem', '2rem', '2rem', '0rem', '0rem']}
            alignItems={'center'}
            justifyContent={'space-between'}
            position={'relative'}
            flexDir={['column', 'column', 'column', 'row', 'row']}
            borderRadius={'120px'}
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
                        border={'1px solid #343434'}
                        color={'black'}
                        zIndex={0}
                    ></Flex>
                    {/* BOLA BOLA */}
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
                alignItems={['center','center','center','start','start']}
                justifyContent={['center','center','center','start','start']}
                mb={['', '', '', 3, 9]}

                position={'absolute'}
                left={[0,0,0,60,72]}
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
                        Depoimentos
                    </Text>
                </Flex>

                <Flex
                >
                    <Text
                        color={'dark.800'}
                        fontWeight={'300'}
                        fontSize={['1rem', '1rem', '1rem', '1.5rem', '1.5rem']}
                    >
                        De quem já realizou o sonho com a gente
                    </Text>
                </Flex>

            </Flex>

            {/* CALL TO ACTION BUTTON */}
            <Flex
                w='100%'
                zIndex={1}
                alignItems={'center'}
                mt={[50, 50, 12, 0, '']}
                justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end']}
            >
                <CallToActionButton
                    bgCircleColor="teal.300"
                    bgColor="dark.800"
                    fontColor="light.400"
                    height="2.5rem"
                    width='15rem'
                    title="Adquirir minha cidadania"
                />
            </Flex>

        </Flex>
    )
}