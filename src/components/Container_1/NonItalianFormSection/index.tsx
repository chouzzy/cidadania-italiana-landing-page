import { Flex } from "@chakra-ui/react";
import { NonItalianFormHeader } from "./NonItalianFormHeader";
import { Form } from "./Form";


export function NonItalianFormSection() {

    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            maxW='1920px'
            flexDir={'column'}
            bgColor={'light.400'}
            borderRadius={'0 64px 0 0'}
            zIndex={0}
            py={16}
        >

            <Flex
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