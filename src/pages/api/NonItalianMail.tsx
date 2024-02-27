const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

   let sendTest = 0
   const body = JSON.parse(req.body)

   console.log(body)

   const message = `
   E-mail recebido via cidadaniaitaliana.clubedopassaporte.com.br: \r\n\r\n

   Ainda não sei se tenho um antepassado italiano!:
   
   Nome: ${body.name}\r\n
   Whatsapp: ${body.whatsapp}\r\n
   `

   const data = {
      to: 'clubedopassaporte@gmail.com',
      from: 'contato@awer.co',
      subject: `Contato via Landing Page - Cidadania Italiana - Clube do Passaporte`,
      text: message,
      html: message.replace(/\r\n/g, '<br>')
   }

   await mail.send(data).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while (response[0].statusCode != 202) {
         setTimeout(mail.send(data), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
      .catch((error) => {
         console.error(error)
      })

   console.log('Finalizando processo...')
   res.status(200).json({ status: 'Ok' })
   // Criar lógica do If status not 200, retry
}