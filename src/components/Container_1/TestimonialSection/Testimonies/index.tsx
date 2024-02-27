import { Flex, SimpleGrid } from "@chakra-ui/react";
import { testimonies } from "./data";
import { Star } from "phosphor-react";
import { FaStar } from "react-icons/fa";


export function Testimonies() {

    return (
        <Flex
            p={[8, 12, 12, 24, 24]}
        >
            <SimpleGrid
                columns={[1, 1, 1, 2, 2]}
                gap={24}
            >


                {testimonies.map((testimony, index) => {

                    return (
                        <Flex
                            key={index}
                            flexDir={'column'}
                            borderRadius={'0px 60px 60px 60px'}
                            p={[10, 12, 12, 12, 16]}
                            boxShadow={'4px 4px 10px 4px #00000022'}
                            position={'relative'}

                        >
                            <Flex
                                bgColor='teal.500'
                                color={'white'}
                                fontWeight={'500'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                position={'absolute'}
                                top={-4}
                                left={0}

                                borderRadius={'20px 40px 40px 0px'}
                                py={2}
                                px={4}
                                gap={16}
                            >
                                <Flex>{testimony.name}</Flex>
                                <Flex
                                    gap={0.5}
                                >
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Flex>
                            </Flex>

                            <Flex
                                fontWeight={'500'}
                                fontSize={'1.125rem'}
                                lineHeight={'1.625rem'}
                                flexDir={'column'}
                            >
                                {testimony.testimony}
                            </Flex>
                        </Flex>
                    )
                })}
            </SimpleGrid>
        </Flex>
    )
}