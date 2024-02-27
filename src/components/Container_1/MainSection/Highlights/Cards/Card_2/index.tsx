import { Flex, Text } from "@chakra-ui/react";
import { Card_2_Data } from "./data";
import { ClockCountdown } from "@phosphor-icons/react";


export function Card_2() {

    return (
        <Flex
            w='100%'
            flexDir={'column'}
            gap={8}
            p={[0,0,8,12,12]}
        >
            <Flex
                fontWeight={'700'}
                fontFamily={'Heebo'}
                fontSize={['2.25rem','2.25rem','2.5rem','3rem','3.5rem']}
                lineHeight={['2.75rem','2.75rem','3rem','3rem','5rem']}
                color={'dark.800'}
            >
                {Card_2_Data.title}
            </Flex>

            <Flex
                flexDir={'column'}
                gap={4}
            >

                {Card_2_Data.vantages.map((vantage, index) => {

                    return (
                        <Flex
                            key={index}
                            alignItems={'center'}
                            justifyContent={'flex-start'}
                        >

                            <Flex
                                color={'teal.500'}
                                bgColor='#7CC3BB20'
                                borderRadius={'100%'}
                                border={'2px solid #343434'}
                                p={2}
                            >
                                {vantage.icon}
                            </Flex>

                            <Flex flexDir={'column'}
                            w='100%'
                            >

                                <Flex
                                    borderBottom={'2px solid black'}
                                    px={2}
                                    color={'teal.500'}
                                    fontWeight={'500'}
                                    fontSize={['1rem','1rem','1.25rem','1rem','1rem']}
                                    
                                >
                                    {vantage.title}
                                </Flex>

                                <Flex
                                    px={2}
                                    fontWeight={'300'}
                                    fontSize={['0.875rem','0.875rem','0.875rem','0.75rem','0.75rem']}
                                >
                                    {vantage.subtitle}
                                </Flex>
                            </Flex>

                        </Flex>
                    )
                })}
            </Flex>

        </Flex>
    )
}