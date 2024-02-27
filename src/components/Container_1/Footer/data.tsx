import { Flex } from "@chakra-ui/react"


const footerData = {
    info: {
        dr_name: "Dra. Sabrina Zanon",
        dr_role: "Ortodontista | Invisalign Doctor",
        dr_code: "CRO 11995",
        copyright: "Copyright © 2023 All rights reserved. Produzido por",
        awer: "awer.co",
    },
    title:
        <Flex display={'inline'}>
            Comece a transformação agora!
        </Flex>,
    mapsUrls: [
        {
            id:0,
            name:'Escritório',
            endereço:"R. Cláudio Soares, 72 - Pinheiros, São Paulo - SP, 05422-030",
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.007740530214!2d-46.696025824669526!3d-23.5681654787951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a098852ff3%3A0xdccdb81d4b7b562a!2sR.%20Cl%C3%A1udio%20Soares%2C%2072%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005422-030!5e0!3m2!1spt-BR!2sbr!4v1709065676062!5m2!1spt-BR!2sbr",
        }
    ]

}



export { footerData }