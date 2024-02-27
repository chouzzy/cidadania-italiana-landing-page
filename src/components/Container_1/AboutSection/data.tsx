import { Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { Check } from "phosphor-react"


const aboutSectionData = {
    about: {
        clube_do_passaporte: {
            title: 'O Clube do Passaporte',
            description:
                <>
                    <Text>
                        Somos um escritório migratório conceituado com sede em São Paulo, Lisboa e Milão.
                        Acreditamos na desburocratização total dos processos para os nossos clientes e, por isso, cuidamos dos processos de A a Z, com intuito de conquistar a sua cidadania rapidamente e deixar todo o trabalho burocrático conosco.
                        <br></br>
                        <br></br>
                    </Text>
                    <Text>
                        Temos tanta paixão pela missão de ajudar o máximo de pessoas na busca de novas oportunidades de vida que desenvolvemos um método único de Pesquisa Genealógica: O Eurolink
                    </Text>
                </>
        },
        eurolink: {
            title: 'O Eurolink',
            description:
                <>
                    <Text>
                        O Eurolink te permite descobrir se você possui um antepassado Europeu - independente do país de origem - e garante que você possa comprovar isso de forma válida para a aquisição de cidadanias. Usamos uma base de dados extensa e específica, com acesso a arquivos e registros históricos europeus que não estão disponíveis em pesquisas genealógicas convencionais.
                        <br></br>
                        <br></br>
                    </Text>
                </>
        }
    },

}



export { aboutSectionData }