import { Flex, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { InstagramLogo } from "phosphor-react";
import { CallToActionButton } from "../../../CallToActionButton";
import { mainSectionData } from "../data";
import { CallToActionButtonData } from "../../../CallToActionButton/data";


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
            px={['2rem', '2rem', '4rem', '2rem', '4rem']}
            py={['1rem', '1rem', '2rem', '2rem', '2rem']}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            {/* LOGO */}
            <Flex
                gap={4}
                alignItems={'center'}
                fontFamily={'Poppins'}
            >

                <Flex>
                    <Image
                        src={mainSectionData.logo.image}
                        maxW='4rem'
                    />
                </Flex>

                <Flex
                    flexDir={'column'}
                >
                    <Text
                        fontSize={'1rem'}
                    >
                        {mainSectionData.logo.title_part_1}
                    </Text>
                    <Text
                        color='teal.500'
                        fontWeight={'500'}
                        fontSize={'1.125rem'}
                    >
                        {mainSectionData.logo.title_part_2}
                    </Text>
                </Flex>

            </Flex>

            {/* CALL TO ACTION BUTTONS */}
            {isMobileVersion ?
                ''
                :

                <Flex
                    gap={8}
                    fontFamily={'Heebo'}
                >

                    <Flex>
                        <CallToActionButton
                            bgColor="dark.800"
                            fontColor="light.400"
                            bgCircleColor="teal.300"
                            height="3.75rem"
                            width="19rem"
                            title="Quero tirar minha cidadania"
                        />
                    </Flex>

                    <Flex
                        flexDir={'column'}
                        fontWeight={'600'}
                    >
                        <Text
                            w='100%'
                            fontSize={'0.9rem'}
                        >
                            {mainSectionData.callToActionLabel}
                        </Text>
                        <CallToActionButton
                            bgColor="teal.300"
                            fontColor="light.400"
                            bgCircleColor="dark.800"
                            height="2rem"
                            width="11rem"
                            arrowSize={24}
                            title="Descubra aqui"
                        />
                    </Flex>

                </Flex>
            }


            {/* INSTAGRAM */}
            <Flex
                alignItems={'center'}
                justifyContent={'flex-end'}
            >

                <Link
                    _hover={{ textDecor: 'none' }}
                    href={CallToActionButtonData.href}
                    target="_blank"
                >


                    <Flex
                        color={'teal.500'}

                        _hover={{ color: 'teal.300', transition: '600ms' }}
                        cursor={'pointer'}
                    >
                        <InstagramLogo
                            size={42}
                        />
                    </Flex>
                </Link>
            </Flex>

        </Flex>
    )
}