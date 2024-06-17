import { Button, Flex, FormControl, FormLabel, Image, Input, Link, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { form } from "./data";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface NonItalianForm {
    name: string,
    whatsapp: string
}

export function Form() {

    const [bgColor, setBgColor] = useState('teal.500')
    const [disable, setDisable] = useState(false)
    const [sentText, setSentText] = useState('Enviar informações')    // initialize state for checked items


    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const router = useRouter()

    async function onSubmit(values) {
        setDisable(true)
        setBgColor('brown.400')
        setSentText('Enviado ✔')

        const lead:NonItalianForm = {...values}

        console.log('lead')
        console.log(lead)

        await axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY4MDYzZjA0M2Q1MjY0NTUzNjUxMzIi_pc", JSON.stringify(lead))
            .then((res) => {
            })
            .catch((err) => {
            });

        try {
            const bitrix24Data = {
                fields: {
                    TITLE: `(API) Novo Lead do Site - Nacionalidade Italiana`,
                    NAME: `${lead.name}`,
                    SOURCE_DESCRIPTION: `SABE QUEM É O ITALIANO: Não sei. `,
                    PHONE: [{ VALUE: `${lead.whatsapp}`, VALUE_TYPE: 'WORK' }]
                    // Mapeie os outros campos do formulário para os campos do Bitrix24
                },
            };

            const response = await axios.post(
                `https://clubedopassaporte.bitrix24.com.br/rest/25/5hdcmzn4hx3udhy3/crm.lead.add.json?PARENTE=${'parente'}&NOME_DO_ITALIANO=${'italiano'}&POSSUI_DOCUMENTO=${'doc'}`,
                bitrix24Data
            );

            console.log(response.status)
            console.log(response.data)

            // Lógica para lidar com a resposta (ex: exibir mensagem de sucesso)
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            // Lógica para lidar com o erro (ex: exibir mensagem de erro)
        }

        return new Promise(() => {
            setTimeout(() => {
                fetch('/api/NonItalianMail', {
                    method: 'post',
                    body: JSON.stringify(lead)
                })
            }, 2000)

            if (typeof window !== "undefined") {
                router.push({
                    pathname: "obrigado-whatsapp",
                })
            }
        })
    }

    return (
        <Flex
            p={[2, 2, 8, 12, 24]}
            alignItems={'center'}
            justifyContent={'center'}
            color={'dark.800'}

            flexDir={['column', 'column', 'column', 'row-reverse', 'row-reverse']}
            gap={12}
        >

            {/* FORM */}
            <form id='#contato_2' onSubmit={handleSubmit(onSubmit)}>
                <Flex
                    flexDir={'column'}
                    gap={4}
                    maxW={'33rem'}
                    alignItems={'center'}
                    p={[4, 4, 4, 2, 8]}
                    w='100%'
                >

                    <Flex
                        flexDir={'column'}
                        alignItems={'center'}
                        textAlign={'center'}
                        gap={8}
                    >
                        <Text
                            color={'teal.400'}
                            fontWeight={'700'}
                            fontSize={['2.25rem', '2.25rem', '2.5rem', '3rem', '3rem']}
                            letterSpacing={'2%'}
                        >
                            {form.title}
                        </Text>
                        <Text
                            fontSize={['1.25rem', '1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                            letterSpacing={'2%'}
                            textAlign={'center'}
                        >
                            {form.subtitle}
                        </Text>
                    </Flex>


                    <FormControl
                        isRequired={true}
                    >
                        <FormLabel
                            fontSize={'0.875rem'}
                            fontWeight={'700'}
                            letterSpacing={'5%'}
                        >
                            {form.inputs.name}
                        </FormLabel>
                        <Input placeholder="João da Silva Exemplo" type="name" {...register("name")} />
                    </FormControl>

                    <FormControl
                        isRequired={true}
                    >
                        <FormLabel
                            fontSize={'0.875rem'}
                            fontWeight={'700'}
                            letterSpacing={'5%'}
                        >
                            {form.inputs.whatsapp}
                        </FormLabel>
                        <Input placeholder="(11) 91234-5678" {...register("whatsapp")} />
                    </FormControl>

                    <Button
                        mt={4}
                        w='100%'
                        type='submit'
                        bgColor={bgColor}
                        color={'light.400'}
                        borderRadius={'24px'}
                        _hover={{ bgColor: 'teal.300', transition: "600ms" }}
                    >
                        {sentText}
                    </Button>
                </Flex>
            </form>


            {/* IMAGE */}
            <Flex
            >
                <Image
                    borderRadius={['124px', '124px', '124px', '300px', '300px']}
                    border={'4px solid #343434'}
                    maxW={['', '', '28rem', '28rem', '34rem']}
                    h={['100%', '100%', '100%', '50rem', '50rem']}
                    src='static/img/container_1/NonItalianFormSection/positano.png'
                    objectFit={'cover'}
                    objectPosition={'center'}
                />
            </Flex>
        </Flex >
    )
}