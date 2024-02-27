import { Flex, Text } from "@chakra-ui/react";


export const testimonies = [

    {
        name: 'Felipe Sadaka',
        stars:5,
        testimony:
            <Flex
                flexDir={'column'}
                gap={2}
            >
                <Text>
                    Excelente atendimento e know how sobre todo o processo além de extrema transparência.
                </Text>
                <Text>

                    Eu e minha família fizemos o processo e foi tudo ótimo!
                </Text>
                <Text>
                    Muito mais que recomendados!!!
                </Text>
            </Flex>,
    },
    {
        name: 'Joshua Kim',
        stars:5,
        testimony:
            <Flex
                flexDir={'column'}
                gap={2}
            >
                <Text>
                    Minha primeira vez necessitando de serviços de imigração!
                </Text>
                <Text>
                    Não tenho palavras para descrever a ajuda provida pelo Clube do Passaporte no meu processo…
                </Text>
                <Text>
                    Superaram minhas expectativas…
                </Text>
                <Text>
                    Nota 10 pelo atendimento e agilidade em resolver minhas pendências.
                </Text>
            </Flex>,
    },
    {
        name: 'Arthur Lube',
        stars:5,
        testimony:
            <Flex
                flexDir={'column'}
                gap={2}
            >
                <Text>
                    Atendimento excelente em todo o processo! Fora o suporte que me prestaram mesmo depois de concluído, super recomendo!
                </Text>
            </Flex>,
    },
    {
        name: 'Ilan Schapira',
        stars:5,
        testimony:
            <Flex
                flexDir={'column'}
                gap={2}
            >
                <Text>
                    Fiz meu processo de cidadania com eles, ninguém achava o documento do meu bisavô. Eles acharam e fizeram tudo, nota MIL!
                </Text>
            </Flex>,
    },
]