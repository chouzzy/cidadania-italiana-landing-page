import { Flex } from "@chakra-ui/react";
import { Cards } from "./Cards";


export function Highlights() {

    return (
        <Flex
            w='100%'
            maxW={'1280px'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDir={[
                'column',
                'column',
                'column',
                'row',
                'row',
            ]}
            p={[8,4,4,8,8]}
            gap={[16,4,4,0,8]}
        >
            <Cards />
            
        </Flex>
    )
}