import { Flex, Text } from "@chakra-ui/react";
import { AgendeUmaConsultaButton } from "../../../CallToActionButton";
import { commentsSectionData } from "../data";


export function JobInfo() {


    return (

        <Flex
            w='100%'
            maxW='1920px'
            justifyContent={'center'}
            py={[24, 16, 16, 16, 16]}
            px={[8, 8, 16, 12, 0]}
        >
            <Flex
                maxW={'1200px'}
                flexDir={[
                    'column-reverse',
                    'column-reverse',
                    'column-reverse',
                    'row',
                    'row'
                ]}
                gap={[8, 16, 16, 16, 16]}
            >
                {/* TEXTO */}
                <Flex
                    flexDir={'column'}
                    textAlign={'center'}
                    justifyContent={'center'}
                    gap={8}
                    w='100%'
                >
                    <Text
                        fontFamily={'Poppins'}
                        fontWeight={'100'}
                        fontSize={['2.5rem', '2.5rem', '3rem', '3rem', '3rem']}
                        lineHeight={'3.5rem'}
                        color={'dark.400'}
                    >
                        {commentsSectionData.odonto.title}
                    </Text>
                    <Flex
                        flexDir={'column'}
                        fontFamily={'Montserrat'}
                        fontSize={['1rem', '1rem', '1rem', '1.125rem', '1.125rem']}
                        fontWeight={'300'}
                        lineHeight={'1.5rem'}
                        textAlign={'justify'}

                    >
                        {commentsSectionData.odonto.description}
                    </Flex>

                    <Flex
                        justifyContent={'center'}
                    >
                        <AgendeUmaConsultaButton
                            bgColor="rose.400"
                            fontColor="light.400"
                        />
                    </Flex>

                </Flex>


                {/* IMAGEM */}
                <Flex
                    w='100%'
                    h={['20rem', '20rem', '32rem', 'auto', 'auto']}
                    bgImage={commentsSectionData.odonto.image}
                    bgSize={'cover'}
                    bgPos={'top'}
                    borderRadius={['64px', '64px', '200px 0 200px 0']}
                >

                </Flex>
            </Flex>
        </Flex>
    )
}