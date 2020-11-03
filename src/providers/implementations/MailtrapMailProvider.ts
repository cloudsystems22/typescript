import { IMailProvider, IMensagem } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider{
    private transporter;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "001cdf428bcc79",
                pass: "50101c0c934809"
            }
        })
    }
    async sendMail(message: IMensagem): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body,
        })
    }


}