import { Flex, Image, Text } from "@chakra-ui/react";
import { PiRoadHorizon } from "react-icons/pi";
import { AirplaneTakeoff } from "phosphor-react";
import { Card_1_Data } from "./data";

export function Card_1() {

    return (

        <Flex
            color={'light.400'}
            w='100%'
            gap={[2,2,2,2,2]}
            p={[0,0,8,0,0]}
        >
            < Flex
                flexDir={'column'}
                h={['26rem', '26rem', '34rem', '32rem', '32rem']}
                w='100%'
                gap={2}
            >

                {/* ITALY */}
                < Image
                    src={Card_1_Data.image}
                    borderRadius={'80px 0px 0px 0px'}
                    h='100%'
                    objectFit={'cover'}
                    objectPosition={'cover'}
                />

                {/* GRAY PLATE */}
                < Flex
                    bgColor={'dark.800'}
                    borderRadius={'0px 0px 64px 0px'}
                    flexDir={'column'}
                    p={4}
                >
                    <Flex>
                        <PiRoadHorizon size={32} />
                    </Flex>
                    <Flex>
                        <Text
                            fontWeight={'200'}
                        >
                            {Card_1_Data.left_card_text}
                        </Text>
                    </Flex>
                </Flex >
            </Flex >

            < Flex
                flexDir={'column'}
                w='100%'
            >

                {/* GREEN PART */}
                < Flex
                    bgColor={'teal.500'}
                    flexDir={'column'}
                    gap={4}
                    px={[2, 8, 4, 8, 8]}
                    py={[8, 8, 8, 8, 8]}
                    position={'relative'}
                    h={['26rem', '32rem', '34rem', '32rem', '32rem']}
                    w='100%'
                    mx={'1'}
                    borderRadius={'0px 120px 360px 360px'}
                >
                    <Flex
                        mx='auto'
                    >
                        <AirplaneTakeoff size={32} />


                    </Flex>
                    <Flex
                        px={2}
                    >
                        <Text
                            fontWeight={'200'}
                            textAlign={'center'}
                        >
                            {Card_1_Data.right_card_text}
                        </Text>
                    </Flex>


                    {/* GLOBE */}
                    <Flex
                        bgColor={'light.400'}
                        borderRadius={'100%'}
                        p={1}
                        position={'absolute'}
                        bottom={-1}
                        right={-2}
                        left={-2}
                        border='4px solid #EDF2F7'
                    >


                        <Flex
                            bgColor={'light.400'}
                            borderRadius={'100%'}
                            border={'2px solid #343434'}
                            p={2}
                        >

                            <Image
                                src={Card_1_Data.globe}
                                mb={'0.5px'}
                            />
                        </Flex>
                    </Flex>
                </Flex >



            </Flex >
        </Flex>
    )
}