import { Box, Flex } from "@chakra-ui/react"
import { MdOutlinePregnantWoman } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { FaChild } from "react-icons/fa";
import { ImTongue } from "react-icons/im";



const specialitiesSectionsData = {
    title: 'Minhas especialidades',
    subTitle: 'Desvendando sorrisos, especialidades que transformam vidas: encontre aqui o cuidado personalizado que sua saúde bucal merece.',
    specs: [
        {
            name: 'Gestantes',
            icon: <MdOutlinePregnantWoman size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/gestante-selected.png',
            smart_description: 'A ausência de cuidados com a saúde bucal da paciente pode provocar um parto prematuro e/ou o nascimento do bebê com baixo peso.',
            complete_description: <>
                O Governo Federal, pelo Ministério da Saúde, instituiu uma Política Nacional de Saúde voltada para a Saúde Bucal das Gestantes, trazendo a necessidade do pré-natal odontológico, realizado por um Cirurgião-Dentista.
                <br></br>
                <br></br>
                Durante a gravidez, o corpo da mulher passa por diversas transformações, algumas delas podendo acarretar problemas na cavidade bucal, como alterações salivares, cáries e periodontite. A falta de intervenção médica no cuidado com as cáries e a gengivite pode causar o agravamento de ambas, gerando um quadro infeccioso de periodontite. Essa infecção bacteriana afeta os ossos e ligamentos da mandíbula, comprometendo a saúde dos dentes.
                <br></br>
                <br></br>
                Se esse quadro de periodontite não for solucionado, a infecção pode entrar na corrente sanguínea e causar problemas em outras partes do corpo, como no sistema cardiovascular. Além disso, estudos recentes apontam que se essas bactérias se instalarem no útero, o corpo produzirá um hormônio chamado prostaglandina, que, além de combater a infecção, pode induzir ao parto prematuro. Tais pesquisas também indicam que as gestantes que sofriam de gengivite davam à luz bebês com peso inferior ao esperado.
                <br></br>
                <br></br>
                A mulher vive a maternidade de forma intensa, pois há uma transformação total em sua anatomia que, por sua vez, se adapta a uma nova vida – isso sem contar os impactos emocionais gerados para a gestante. Nesse sentido, a mulher também adquire hábitos mais saudáveis durante a gravidez, uma vez que ela passa a ter mais preocupações com a saúde do bebê. O pré-natal tem como objetivo prevenir doenças e problemas bucais, identificar alterações e tratá-las antes que se agravem, orientar a paciente sobre os cuidados com a saúde bucal e sanar suas principais dúvidas.
                <br></br>
                <br></br>
                A tarefa do odontopediatra começa, idealmente, antes do nascimento da criança, através da orientação da mãe durante a gravidez.
            </>


        },
        {
            name: 'Bebês',
            icon: <LuBaby size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/gestante-selected.png',
            smart_description: 'Mesmo se os dentinhos do bebê não estejam ainda em boca, a odontologia para eles deve se iniciar ainda no primeiro ano de vida. Por isso é importante realizar a consulta preventiva.',
            complete_description: 'Bebês O Governo Federal, pelo Ministério da Saúde, instituiu uma Política Nacional de Saúde voltada para a Saúde Bucal das Gestantes, trazendo a necessidade do pré-natal odontológico, passando pela avaliação de um Cirurgião-Dentista. Durante a gravidez, o corpo da mulher passa por diversas transformações, e algumas delas podem acarretar problemas na cavidade bucal, como alterações salivares, cáries e periodontite, a falta de intervenção médica no cuidado com as cáries e a gengivite, por exemplo, é capaz de causar seu agravamento, gerando um quadro infeccioso de periodontite. Essa infecção bacteriana afeta os ossos e ligamentos da mandíbula, comprometendo a saúde dos dentes. Por sua vez, se esse quadro de periodontite não for solucionado, a infecção pode entrar na corrente sanguínea e causar problemas em outras partes do corpo, como no sistema cardiovascular. Além disso, estudos recentes apontam que se essas bactérias se instalarem no útero, o corpo produzirá um hormônio chamado prostaglandina, que mais do que combater a infecção, induzirá ao parto prematuro. Tais pesquisas também indicam que as gestantes que sofriam de gengivite davam a luz a bebês com o peso inferior ao esperado. A mulher vive a maternidade de forma intensa, porque há uma transformação total em sua anatomia que, por sua vez, se adapta à uma nova vida – isso sem contar os impactos emocionais gerados para a gestante. Nesse sentido, a mulher também adquire hábitos mais saudáveis durante a gravidez, uma vez que ela passa a ter mais preocupações com a saúde do bebê. O pré natal tem como objetivo prevenir doenças e problemas bucais, identificar alterações e tratá-las antes que se agravem, orientar o paciente sobre os cuidados com a saúde bucal e sanar suas principais dúvidas. A tarefa do odontopediatra começa, idealmente, antes do nascimento da criança. Através da orientação da mãe durante a gravidez.'
        },
        {
            name: 'Profilaxia infantil',
            icon: <FaChild size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/gestante-selected.png',
            smart_description: 'A prática da profilaxia é essencial para manter a saúde bucal em adultos e crianças, sendo especialmente crucial na prevenção de problemas futuros na higiene bucal infantil.',
            complete_description: 'Profilaxia infantil O Governo Federal, pelo Ministério da Saúde, instituiu uma Política Nacional de Saúde voltada para a Saúde Bucal das Gestantes, trazendo a necessidade do pré-natal odontológico, passando pela avaliação de um Cirurgião-Dentista. Durante a gravidez, o corpo da mulher passa por diversas transformações, e algumas delas podem acarretar problemas na cavidade bucal, como alterações salivares, cáries e periodontite, a falta de intervenção médica no cuidado com as cáries e a gengivite, por exemplo, é capaz de causar seu agravamento, gerando um quadro infeccioso de periodontite. Essa infecção bacteriana afeta os ossos e ligamentos da mandíbula, comprometendo a saúde dos dentes. Por sua vez, se esse quadro de periodontite não for solucionado, a infecção pode entrar na corrente sanguínea e causar problemas em outras partes do corpo, como no sistema cardiovascular. Além disso, estudos recentes apontam que se essas bactérias se instalarem no útero, o corpo produzirá um hormônio chamado prostaglandina, que mais do que combater a infecção, induzirá ao parto prematuro. Tais pesquisas também indicam que as gestantes que sofriam de gengivite davam a luz a bebês com o peso inferior ao esperado. A mulher vive a maternidade de forma intensa, porque há uma transformação total em sua anatomia que, por sua vez, se adapta à uma nova vida – isso sem contar os impactos emocionais gerados para a gestante. Nesse sentido, a mulher também adquire hábitos mais saudáveis durante a gravidez, uma vez que ela passa a ter mais preocupações com a saúde do bebê. O pré natal tem como objetivo prevenir doenças e problemas bucais, identificar alterações e tratá-las antes que se agravem, orientar o paciente sobre os cuidados com a saúde bucal e sanar suas principais dúvidas. A tarefa do odontopediatra começa, idealmente, antes do nascimento da criança. Através da orientação da mãe durante a gravidez.'
        },
        {
            name: 'Frenotomia',
            icon: <ImTongue size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/gestante-selected.png',
            smart_description: 'O freio lingual alterado no bebê pode atrapalhar várias funções, sendo a amamentação o maior impacto sentido pelas mães nos primeiros dias de vida dos recém-nascidos.',
            complete_description: 'Frenotomia O Governo Federal, pelo Ministério da Saúde, instituiu uma Política Nacional de Saúde voltada para a Saúde Bucal das Gestantes, trazendo a necessidade do pré-natal odontológico, passando pela avaliação de um Cirurgião-Dentista. Durante a gravidez, o corpo da mulher passa por diversas transformações, e algumas delas podem acarretar problemas na cavidade bucal, como alterações salivares, cáries e periodontite, a falta de intervenção médica no cuidado com as cáries e a gengivite, por exemplo, é capaz de causar seu agravamento, gerando um quadro infeccioso de periodontite. Essa infecção bacteriana afeta os ossos e ligamentos da mandíbula, comprometendo a saúde dos dentes. Por sua vez, se esse quadro de periodontite não for solucionado, a infecção pode entrar na corrente sanguínea e causar problemas em outras partes do corpo, como no sistema cardiovascular. Além disso, estudos recentes apontam que se essas bactérias se instalarem no útero, o corpo produzirá um hormônio chamado prostaglandina, que mais do que combater a infecção, induzirá ao parto prematuro. Tais pesquisas também indicam que as gestantes que sofriam de gengivite davam a luz a bebês com o peso inferior ao esperado. A mulher vive a maternidade de forma intensa, porque há uma transformação total em sua anatomia que, por sua vez, se adapta à uma nova vida – isso sem contar os impactos emocionais gerados para a gestante. Nesse sentido, a mulher também adquire hábitos mais saudáveis durante a gravidez, uma vez que ela passa a ter mais preocupações com a saúde do bebê. O pré natal tem como objetivo prevenir doenças e problemas bucais, identificar alterações e tratá-las antes que se agravem, orientar o paciente sobre os cuidados com a saúde bucal e sanar suas principais dúvidas. A tarefa do odontopediatra começa, idealmente, antes do nascimento da criança. Através da orientação da mãe durante a gravidez.'
        }
    ],
    darkColorScheme: {
        iconBg: 'light.400',
        fontColor: 'light.400',
        bgColor: 'rose.600',
        iconColor: 'brown.400'
    },
    lightColorScheme: {
        iconBg: 'brown.400',
        fontColor: 'dark.400',
        bgColor: 'light.400',
        iconColor: 'light.400'
    }
}



export { specialitiesSectionsData }

