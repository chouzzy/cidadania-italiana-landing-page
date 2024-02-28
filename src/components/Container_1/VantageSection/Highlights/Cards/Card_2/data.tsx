import { Flex, Text } from "@chakra-ui/react";
import { ClockCountdown, CubeTransparent } from "@phosphor-icons/react";
import { Percent } from "phosphor-react";


export const Card_2_Data = {
    title:
        <Flex
            display={'inline'}
        >

            <Text> Tire a sua</Text>
            <Text color={'teal.500'}
            > Cidadania Italiana</Text>
            <Text display={'inline'}> sem sair de</Text>
            <Text display={'inline'} color={'teal.500'}> casa </Text>

        </Flex>,
    vantages: [
        {
            icon:<ClockCountdown size={32} weight="light" />,
            title: 'Cidadania reconhecida',
            subtitle: 'em poucos meses'
        },
        {
            icon:<CubeTransparent size={32} weight="light" />,
            title: 'Processo de A a Z, transparente',
            subtitle: 'sem surpresas ou letras miúdas'
        },
        {
            icon:<Percent size={32} weight="light" />,
            title: 'Taxa de 100% de aprovação',
            subtitle: 'cuidado com todos os detalhes no seu processo'
        },
    ]
}