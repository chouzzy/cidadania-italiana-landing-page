import { Flex } from "@chakra-ui/react"
import { Gavel } from "@phosphor-icons/react"
import { Baby, FirstAid, GlobeHemisphereWest, HouseLine, Student } from "phosphor-react"

const iconSize = 60

const vantageSectionData = {
    cards: {
        leftCards: [

            {
                icon: <GlobeHemisphereWest size={iconSize} />,
                description: 'Isenção de visto para 194 países incluindo EUA, Austrália e Canadá',
                radius:'0px 120px 0px 0px',
                bgColor:'dark.800'
            },
            {
                icon: <HouseLine size={iconSize} />,
                description: 'Morar em qualquer /país da União Europeia',
                radius:'0px 0px 0px 0px',
                bgColor:'teal.500'
            },
            {
                icon: <Baby size={iconSize} />,
                description: 'Passar a cidadania para seus filhos e netos',
                radius:'0px 0px 120px 0px',
                bgColor:'dark.800'
            },
        ],
        rightCards: [


            {
                icon: <FirstAid size={iconSize} />,
                description: 'Acesso a um dos melhores sistemas de saúde do mundo',
                radius:'120px 0px 0px 0px',
                bgColor:'teal.500'
            },
            {
                icon: <Student size={iconSize} />,
                description: 'Estudar nas melhores universidades do mundo',
                radius:'0px 0px 0px 0px',
                bgColor:'dark.800'
            },
            {
                icon: <Gavel size={iconSize} />,
                description: 'Ser um cidadão europeu com todos os seus direitos',
                radius:'0px 0px 0px 120px',
                bgColor:'teal.500'
            }
        ]

    },
    title: 'Como é a experiência da primeira consulta?',
    subTitle: 'Sorrisos que nascem saudáveis, crescem felizes!',
    subTitle2: 'Na nossa odontopediatria, cuidamos dos sorrisos mais preciosos com carinho, expertise e alegria. O caminho para uma vida inteira de saúde bucal começa aqui, com cuidado que encanta e faz crescer sorrisos fortes.',
    buttonCallAction: 'Entre em contato agora!'
}



export { vantageSectionData }