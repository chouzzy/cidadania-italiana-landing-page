import { Flex } from "@chakra-ui/react";
import { ItalianFormHeader } from "./ItalianFormHeader";
import { Form } from "./Form";


export function ItalianFormSection() {

    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            maxW='1920px'
            flexDir={'column'}
            bgColor={'light.400'}
            borderRadius={'0 64px 0 0'}
            zIndex={1}
        >
            <Flex
                bgImage={'static/img/container_1/ItalianFormSection/italy.png'}
                bgRepeat={'no-repeat'}
                bgPos={'center'}
                bgSize={'cover'}
                h={['32rem', '32rem', '32rem', '36rem', '42rem']}
                mt={[-60]}
            > </Flex>

            <Flex
                bgColor={'dark.800'}
                flexDir='column'
                borderRadius={'0 64px 0 0'}
                color={'light.400'}
                mt={[-32]}
                pt={[4,4,6,12,12]}
            >
                
                <Form />

            </Flex>
        </Flex>
    )
}