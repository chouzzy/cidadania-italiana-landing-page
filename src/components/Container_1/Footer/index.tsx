import { Flex, Link, Text } from "@chakra-ui/react";
import { footerData } from "./data";
import { useState } from "react";
import { Header } from "./Header";

export function Footer() {

    const mapsUrls = footerData.mapsUrls
    const [map, setMap] = useState(mapsUrls[0].url)
    const [active, setActive] = useState(0)

    return (
        <Flex
            w='100%'
            pt={12}
            bgColor={'dark.800'}
            color={'light.400'}

            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}

            borderRadius={[
                0,
                0,
                0,
                '120px 120px 0px 0px',
                '120px 120px 0px 0px'
            ]}

            gap={6}
        >

            <Header />

            {/* MAPS */}
            <Flex>
                <Flex
                    w={['95vw', '90vw', '90vw', '90vw', '78rem']}
                    h='22rem'
                    p={4}
                >
                    <iframe src={map}
                        style={{ borderRadius: '80px' }} width="100%" height="100%" loading="lazy" />
                </Flex>

            </Flex>

            {/* ENDEREÇO E AWER */}
            <Flex
                w='100%'
                flexDir={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={8}
            >
                <Text
                    fontSize={'1.5rem'}
                    textAlign={'center'}
                >
                    {mapsUrls[0].endereço}
                </Text>

                <Flex
                    fontSize={'0.75rem'}
                    textAlign={'center'}
                    gap={1}
                >
                    <Link
                        _hover={{ textDecor: 'none', color:"#F55F5E" }}
                        href={'https://www.awer.co'}
                        target="_blank"
                        gap={2}
                    >
                        <Text display={'inline'}> Desenvolvido por</Text>
                        <Text display={'inline'} color='#F55F5E'> awer </Text>
                    </Link>
                </Flex>
            </Flex>


        </Flex>
    )
}