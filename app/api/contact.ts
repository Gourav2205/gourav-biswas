// import { NextApiRequest, NextApiResponse } from 'next'
// 
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { name, email, message } = req.body
// 
//         // Here you would typically send an email or save to a database
//         // For this example, we'll just log the data
//         console.log('Contact form submission:', { name, email, message })
// 
//         // Simulate a delay
//         await new Promise(resolve => setTimeout(resolve, 1000))
// 
//         res.status(200).json({ message: 'Message sent successfully' })
//     } else {
//         res.setHeader('Allow', ['POST'])
//         res.status(405).end(`Method ${req.method} Not Allowed`)
//     }
// }



import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        try {
            // Create a transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Use Gmail as the service
                auth: {
                    user: 'authportfolio@gmail.com', // Replace with your email
                    pass: 'Gourav@22', // Replace with your email app password
                },
            })

            // Email options
            const mailOptions = {
                from: email, // The sender's email
                to: 'gouravbiswas897@gmail.com', // Your email
                subject: `New Contact Form Submission from ${name}`,
                text: `
                You have received a new message from your contact form.

                Name: ${name}
                Email: ${email}
                Message: ${message}
                `,
            }

            // Send email
            await transporter.sendMail(mailOptions)

            res.status(200).json({ message: 'Message sent successfully' })
        } catch (error) {
            console.error('Error sending email:', error)
            res.status(500).json({ error: 'Failed to send message' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
