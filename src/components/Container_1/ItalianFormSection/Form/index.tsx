import { Button, Flex, FormControl, FormLabel, Image, Input, Link, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { form } from "./data";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export function Form() {

    const [bgColor, setBgColor] = useState('teal.500')
    const [disable, setDisable] = useState(false)
    const [sentText, setSentText] = useState('Enviar informações')    // initialize state for checked items
    const [triggerWebhook, seTtriggerWebhook] = useState(false)


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

        await axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY4MDYzZjA0M2Q1MjY0NTUzNjUxMzIi_pc", JSON.stringify(emailData))
            .then((res) => {
                console.log('res')
                console.log(res)
                console.log('res.status')
                console.log(res.status)
                console.log('res.data')
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

        // try {
        //     const response = await axios.post('/api/bitrix24form1', values);
        //     console.log('Resposta do endpoint:', response.data);
        //     // Lógica para lidar com a resposta do endpoint
        // } catch (error) {
        //     console.error('Erro ao enviar dados para o endpoint:', error);
        //     // Lógica para lidar com o erro
        // }


        return new Promise(() => {
            setTimeout(() => {
                fetch('/api/italianMail', {
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

    // useEffect(() => {

    //     const submitForm = async () => {
    //         try {
    //             const values = {
    //                 name: 'TestenomeLead', // Substitua pelos valores reais do formulário
    //                 whatsapp: '123',
    //                 parent: 'Pai',
    //                 nome_do_italiano: 'TesteItaliano',
    //                 documento: 'Sim',
    //             };

    //             const response = await axios.post('/api/bitrix24form1', values);
    //             console.log('Resposta do endpoint:', response.data);
    //             // Lógica para lidar com a resposta (ex: exibir mensagem de sucesso)
    //         } catch (error) {
    //             console.error('Erro ao enviar dados:', error);
    //             // Lógica para lidar com o erro (ex: exibir mensagem de erro)
    //         }
    //     };

    //     // Chamar a função para enviar o formulário
    //     submitForm();
    // }, [triggerWebhook])

    return (
        <Flex
            id="#italianFormSection"
            p={[8, 12, 12, 12, 24]}
            alignItems={'center'}
            justifyContent={'center'}

            flexDir={['column', 'column', 'column', 'row', 'row']}
            gap={12}
        >


            {/* FORM */}
            <form id="#contato_1" onSubmit={handleSubmit(onSubmit)}>
                <Flex
                    flexDir={'column'}
                    gap={4}
                    maxW={'33rem'}
                    p={[8, 8, 8, 2, 8]}
                    alignItems={'center'}
                    w='100%'
                >

                    <Flex
                        flexDir={'column'}
                        alignItems={'center'}
                        textAlign={'center'}
                        gap={8}
                    >
                        <Text
                            color='teal.300'
                            fontWeight={'700'}
                            fontSize={'3rem'}
                            letterSpacing={'2%'}
                        >
                            {form.title}
                        </Text>
                        <Text
                            fontSize={'1.5rem'}
                            letterSpacing={'2%'}
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

                    <FormControl
                        isRequired={true}
                    >
                        <FormLabel
                            fontSize={'0.875rem'}
                            fontWeight={'700'}
                            letterSpacing={'5%'}
                        >
                            {form.inputs.ancestor}
                        </FormLabel>

                        <Select
                            color={'light.400'}
                            {...register("parent")}
                        >
                            <option style={{ backgroundColor: '#343434' }} value="">Selecione</option>
                            <option style={{ backgroundColor: '#343434' }} value="ja_sei">Já sei</option>
                            <option style={{ backgroundColor: '#343434' }} value="ainda_nao_sei">Ainda não sei</option>
                        </Select>
                    </FormControl>

                    <FormControl
                        isRequired={true}
                    >
                        <FormLabel
                            fontSize={'0.875rem'}
                            fontWeight={'700'}
                            letterSpacing={'5%'}
                        >
                            {form.inputs.parent}
                        </FormLabel>
                        <Select
                            color={'light.400'}
                            {...register("parent")}
                        >
                            <option style={{ backgroundColor: '#343434' }} value="">Selecione</option>
                            <option style={{ backgroundColor: '#343434' }} value="pai">Pai</option>
                            <option style={{ backgroundColor: '#343434' }} value="mãe">Mãe</option>
                            <option style={{ backgroundColor: '#343434' }} value="avô">Avô</option>
                            <option style={{ backgroundColor: '#343434' }} value="avó">Avó</option>
                            <option style={{ backgroundColor: '#343434' }} value="outro">Outro</option>
                        </Select>
                    </FormControl>

                    <FormControl
                        isRequired={true}
                    >
                        <FormLabel
                            fontSize={'0.875rem'}
                            fontWeight={'700'}
                            letterSpacing={'5%'}
                        >
                            {form.inputs.italianName}
                        </FormLabel>
                        <Input placeholder="Italiano da Silva Exemplo" {...register("nome_do_italiano")} />
                    </FormControl>

                    <FormControl
                        isRequired={true}
                    >
                        <FormLabel
                            fontSize={'0.875rem'}
                            fontWeight={'700'}
                            letterSpacing={'5%'}
                        >
                            {form.inputs.document}
                        </FormLabel>

                        <RadioGroup
                            defaultValue='2'
                        >
                            <Stack
                                spacing={5}
                                direction='row'
                                color={'dark.800'}
                            >

                                <Flex
                                    display={'inline'}
                                    bgColor={'light.400'}
                                    borderRadius={'20px'}
                                    px={4}
                                    py={1}
                                >
                                    <Radio
                                        bgColor={'dark.800'}
                                        colorScheme='teal'
                                        value='Sim'
                                        {...register("documento")}
                                    >
                                        Sim
                                    </Radio>
                                </Flex>
                                <Flex
                                    display={'inline'}
                                    bgColor={'light.400'}
                                    borderRadius={'20px'}
                                    px={4}
                                    py={1}
                                >
                                    <Radio
                                        bgColor={'dark.800'}
                                        colorScheme='teal'
                                        value='Não'
                                        {...register("documento")}
                                    >
                                        Não
                                    </Radio>
                                </Flex>
                            </Stack>
                        </RadioGroup>
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

                    {/* <Link
                    href='https://b24-lmqq2d.bitrix24.site/crm_form_ngbvy/'
                >
                    <Button
                        mt={4}
                        bgColor={bgColor}
                        color={'light.400'}
                        borderRadius={'24px'}
                        _hover={{ bgColor: 'teal.300', transition: "600ms" }}
                    >
                        {sentText}
                    </Button>
                </Link> */}
                </Flex>
            </form>


            {/* IMAGE */}
            <Flex
            >
                <Image
                    borderRadius={['124px', '124px', '124px', '300px', '300px']}
                    border={'4px solid #EDF2F7'}
                    maxW={['', '', '28rem', '28rem', '34rem']}
                    h={['100%', '100%', '100%', '50rem', '50rem']}
                    src='static/img/container_1/ItalianFormSection/form-image.png'
                    objectFit={'cover'}
                    objectPosition={'center'}
                />
            </Flex>
        </Flex >
    )
}








// await axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY4MDYzZjA0M2Q1MjY0NTUzNjUxMzIi_pc", JSON.stringify(emailData))
//     .then((res) => {
//         console.log('res')
//         console.log(res)
//         console.log('res.status')
//         console.log(res.status)
//         console.log('res.data')
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err);
//     });