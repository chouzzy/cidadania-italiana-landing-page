import { Flex, Text } from "@chakra-ui/react";
import { PiClockCountdown, PiCubeTransparentThin  } from "react-icons/pi";
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
            icon:<PiClockCountdown size={32} />,
            title: 'Cidadania reconhecida',
            subtitle: 'em poucos meses'
        },
        {
            icon:<PiCubeTransparentThin  size={32} />,
            title: 'Processo de A a Z, transparente',
            subtitle: 'sem surpresas ou letras miúdas'
        },
        {
            icon:<Percent size={32} weight="light" />,
            title: 'Taxa de 100% de aprovação',
            subtitle: 'advogados especialistas cuidam de todo o seu processo'
        },
    ]
}