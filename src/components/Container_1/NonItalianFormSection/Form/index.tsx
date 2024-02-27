import { Button, Flex, FormControl, FormLabel, Image, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { form } from "./data";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


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

        const emailData = { ...values }

        console.log(emailData)

        // await axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzMzA0MzQ1MjZkNTUzMjUxMzMi_pc", JSON.stringify(emailData))
        // .then((res) => {
        // })
        // .catch((err) => {
        //   console.log(err);
        // });

        return new Promise(() => {
            setTimeout(() => {
                fetch('/api/NonItalianMail', {
                    method: 'post',
                    body: JSON.stringify(emailData)
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex
                    flexDir={'column'}
                    gap={4}
                    maxW={'33rem'}
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