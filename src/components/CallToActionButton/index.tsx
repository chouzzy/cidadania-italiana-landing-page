import { Button, Flex, Link, Text } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs"
import { CallToActionButtonData } from "./data"
import { ArrowUpRight } from "phosphor-react"


interface CallToActionButtonProps {
    bgColor: string,
    fontColor: string,
    bgCircleColor: string,
    width: string,
    height: string,
    arrowSize?: number,
    title?: string,

}

export function CallToActionButton({
    bgColor = 'light.400',
    fontColor = 'light.400',
    bgCircleColor = 'teal.300',
    width = '19rem',
    height = '3.75rem',
    arrowSize = 32,
    title,
}: CallToActionButtonProps) {


    return (
        <Link
            _hover={{ textDecor: 'none' }}
            href={CallToActionButtonData.href}
            target="_blank"
        >

            <Button
                w={width}
                h={height}
                p={0}
                _hover={{bgColor:'teal.500'}}
                boxShadow={'0 4 4 0 #000000'}
                bgColor={bgColor}
                borderRadius={'2rem'}
                fontFamily={'Heebo'}
                color={fontColor}

            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    gap={'1rem'}
                    w='100%'
                >
                    <Text
                        pl={6}
                    >
                        {title}
                    </Text>

                    <Flex
                        bg={bgCircleColor}
                        borderRadius={'100%'}
                        minH={height}
                        minW={height}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <ArrowUpRight size={arrowSize} weight="light" />
                    </Flex>

                </Flex>
            </Button >
        </Link>
    )
}