import { Flex, Image, Text } from "@chakra-ui/react";
import { specialitiesSectionsData } from "../data";
import { GiClick } from "react-icons/gi";
import { useRef, useState } from "react";
import { AgendeUmaConsultaButton } from "../../../CallToActionButton";

export function Menu() {
    const { darkColorScheme, lightColorScheme } = specialitiesSectionsData;

    // Create a separate state variable to track active index
    const [activeIndex, setActiveIndex] = useState(0); // Initialize to -1 for no initial selection

    const menuInfoRef = useRef(null);

    return (
        <>
            {/* MENU COM ICONS  */}
            <Flex
                flexDir={["column", "column", "column", "column", "row"]}
                w="100%"
                h="100%"
            >
                {specialitiesSectionsData.specs.map((spec, index) => (
                    <Flex
                        key={index} // Add key for accessibility and performance

                        _hover={
                            index != activeIndex ?
                                { bgColor: 'light.600', transition: '600ms' }
                                :
                                {}
                        }
                        bgColor={
                            index === activeIndex ?
                                darkColorScheme.bgColor : lightColorScheme.bgColor
                        } // Dynamically apply color scheme based on active index
                        color={
                            index === activeIndex ?
                                darkColorScheme.fontColor : lightColorScheme.fontColor
                        }
                        onClick={() => {
                            setActiveIndex(index)
                            menuInfoRef.current.scrollIntoView({ behavior: "smooth" });
                        }} // Update activeIndex



                        cursor="pointer"
                        w="100%"
                        p={[4, 4, 4, 16, 16]}
                        gap={4}
                        flexDirection="column"
                        textAlign={['center', 'center', 'center', 'left', 'left']}
                        borderRadius={[
                            "",
                            "",
                            "",
                            "0px 200px 0px 0px",
                            "0px 200px 0px 0px"
                        ]}
                        fontFamily="Montserrat"
                    >
                        {/* Icon */}
                        <Flex
                            bgColor={
                                index === activeIndex ?
                                    darkColorScheme.iconBg : lightColorScheme.iconBg
                            }
                            color={
                                index === activeIndex ?
                                    darkColorScheme.iconColor : lightColorScheme.iconColor
                            }
                            mr={["initial", "initial", "initial", "auto", "auto"]}
                            minW="5rem"
                            minH="5rem"
                            maxW="5rem"
                            maxH="5rem"
                            mx={['auto', 'auto', 'auto', 'initial', 'initial']}
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="0px 40px 40px 40px"
                        >
                            {spec.icon}
                        </Flex>

                        {/* Name */}
                        <Flex
                            mx={['auto', 'auto', 'auto', 'initial', 'initial']}
                        >
                            <Text
                                fontSize="1.5rem"
                                fontWeight="600"
                                lineHeight="1.75rem"
                            >
                                {spec.name}
                            </Text>
                        </Flex>

                        {/* Smart Description */}
                        <Flex
                            h='100%'
                        >
                            <Text fontSize="1rem" fontWeight="300" lineHeight="1.25rem">
                                {spec.smart_description}
                            </Text>
                        </Flex>

                        {/* Ver mais */}
                        <Flex
                            gap={2}
                            alignItems="center"
                            h='100%'
                            mx={['auto', 'auto', 'auto', 'initial', 'initial']}
                        >
                            <Text
                                color={
                                    index === activeIndex ?
                                        darkColorScheme.iconBg : lightColorScheme.iconBg
                                }

                            >
                                Ver mais
                            </Text>
                            <GiClick />
                        </Flex>
                    </Flex>
                ))}
            </Flex>

            {/* PAGINA COM TEXTO E FOTO */}
            <Flex
                id="#menuInfo"
                ref={menuInfoRef} // Attach the ref to the element
                flexDir={["column", "column", "column", "column", "row"]}
                bgColor={'rose.600'}
                color={'light.400'}
                fontFamily={'Montserrat'}
                justifyContent={'center'}
                alignItems={'center'}
                px={[0, 0, 0, 16, 16]}
                py={24}
                mt={[-2, -2, -2, -2, -2]}
                textAlign={['justify', 'justify', 'justify', 'left', 'left']}
            >
                {/* Texto */}
                <Flex
                    flexDir='column'
                    gap={8}
                    pr={[8, 8, 8, 24, 24]}
                    pl={[8, 8, 8, 0, 0]}
                    py={0}
                >
                    <Text
                        fontSize={'2.5rem'}
                        lineHeight={'3rem'}
                        fontWeight={'700'}
                        textAlign={['center', 'center', 'center', 'left', 'left']}
                    >
                        O que é e como funciona?
                    </Text>
                    <Text
                        fontSize={'1.125rem'}
                        lineHeight={'1.5rem'}
                        fontWeight={'300'}
                    >
                        {specialitiesSectionsData.specs[activeIndex].complete_description}
                    </Text>

                    <Flex
                        mx={['auto','auto','auto','initial','initial']}
                    >
                        <AgendeUmaConsultaButton
                            bgColor="light.400"
                            fontColor="rose.600"
                        />
                    </Flex>

                </Flex>

                {/* Imagem */}
                <Flex
                    my={['2rem', '2rem', '2rem', 'auto', 'auto']}
                    minH={['20rem', '0', '0', '0', '30rem']}
                    h={['initial', '0px', '0px', '0px', 'initial']}
                >
                    <Image
                        src={specialitiesSectionsData.specs[activeIndex].image}
                        minW={'25rem'}
                        objectFit={'cover'}
                        borderRadius={[
                            "40px 40px 40px 40px",
                            "100px 100px 100px 100px",
                            "64px 64px 64px 64px",
                            "200px 200px 0px 0px",
                            "200px 200px 0px 0px"
                        ]}
                        p={[8, 32, 32, 8, 8]}

                    />
                </Flex>
            </Flex>
        </>
    );
}