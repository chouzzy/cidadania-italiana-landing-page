import { Flex } from "@chakra-ui/react";
import { Highlights } from "./Highlights";
import { VantageHeader } from "./Header";
import { vantageSectionData } from "./data";


export function VantageSection() {



    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            // maxW='1920px'
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <VantageHeader />
            <Flex
                w='100%'
                maxW={'1280px'}
                p={[4,4,8,8,4]}
                gap={[16,16,16,6,12]}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={['column','column','column','row','row']}
            >
                {/* LEFT CARDS */}
                <Flex
                    gap={6}
                    flexDir={'column'}
                    w='100%'
                >
                    {vantageSectionData.cards.leftCards.map((card, index) => {
                        return (
                            <Flex
                                key={index}
                                borderRadius={'0px 60px 60px 0px'}
                                bgColor={card.bgColor}
                                h={'7.5rem'}
                            >
                                <Flex
                                    bgColor={'light.400'}
                                    borderRadius={'0px 60px 0px 0px'}
                                >
                                    <Flex
                                        w='3.5rem'
                                        bgColor={card.bgColor}
                                        borderRadius={card.radius}
                                    > </Flex>

                                    <Flex
                                        color={card.bgColor}
                                        bgColor={'light.400'}
                                        borderRadius={card.radius}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        p={2}
                                    >
                                        {card.icon}
                                    </Flex>
                                </Flex>

                                <Flex
                                    color={'light.400'}
                                    fontWeight={'300'}
                                    fontSize={['1rem','1rem','1rem','1.125rem','1.125rem']}
                                    maxW='28rem'
                                    p={[4,4,4,8,8]}
                                    alignItems={'center'}
                                >
                                    {card.description}
                                </Flex>
                            </Flex>
                        )
                    })}

                </Flex>

                {/* RIGHT CARDS */}
                <Flex
                    gap={6}
                    flexDir={'column'}
                    w='100%'
                >
                    {vantageSectionData.cards.rightCards.map((card, index) => {
                        return (
                            <Flex
                                key={index}
                                borderRadius={'60px 0px 0px 60px'}
                                bgColor={card.bgColor}
                                flexDir={'row-reverse'}
                                h={'7.5rem'}
                            >

                                <Flex
                                    bgColor={'light.400'}
                                    borderRadius={'60px 0px 0px 0px'}
                                >


                                    <Flex
                                        color={card.bgColor}
                                        bgColor={'light.400'}
                                        borderRadius={card.radius}

                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        p={2}
                                    >
                                        {card.icon}
                                    </Flex>

                                    <Flex
                                        w='3.5rem'
                                        bgColor={card.bgColor}
                                        borderRadius={card.radius}
                                    >
                                    </Flex>
                                </Flex>

                                <Flex
                                    color={'light.400'}
                                    fontWeight={'300'}
                                    fontSize={['1rem','1rem','1rem','1.125rem','1.125rem']}
                                    maxW='28rem'
                                    alignItems={'center'}
                                    textAlign={'end'}
                                    p={[4,4,4,8,8]}
                                >
                                    {card.description}
                                </Flex>
                            </Flex>
                        )
                    })}

                </Flex>

            </Flex>
        </Flex>
    )
}