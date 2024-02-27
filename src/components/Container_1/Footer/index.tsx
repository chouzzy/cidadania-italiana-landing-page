import { Button, Flex, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { InstagramLogo, WhatsappLogo, BookOpen, MapPin, FacebookLogo, ArrowRight } from "phosphor-react";
import { BiMapPin } from "react-icons/bi";
import { footerData } from "./data";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
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
                    <Text> Desenvolvido por</Text>
                    <Text color='#F55F5E'> awer </Text>
                </Flex>
            </Flex>


        </Flex>
    )
}