import nodemailer from "nodemailer";

/**
 * 
 * @param {*} to 
 * @param {*} data 
 */

export const sendEmail = async (to, data) => {

    let transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_ID,
            pass : process.env.MAIL_PASS
        }
    });

    try{

        // send activation mail
        await transporter.sendMail({
            from : `Dev Rohan <${process.env.MAIL_ID}>`,
            subject : `Exciting Consulting Website Development Opportunity `,
            to : to,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                
                <div style="background:#fff;width:100%;color:#000000">
                    <div style="background:#fff;width:70%;margin:auto;box-shadow:0px 7px 29px 0px #20212426;padding:30px 40px;border-radius:7px;display:block;">
                        <a href="https://rohanmostofa.vercel.app/" target="_blank" style="font-size:20px;background:#28AE60;color:#fff;border-radius:25px;padding:10px 20px;margin-bottom:60px;text-align:center;display:block;text-decoration:none;">Dev Rohan</a>
                        <p style="font-size:15px">Hello ${data.name}</p>
                        <p style="font-size:15px">Thank you for your interest in our consulting website. We have developed an exceptional web experience using React, TypeScript, JavaScript, Next.js, Vue.js, Tailwind, MUI, Node.js, Express.js, Nest.js & Mongodb to showcase your services professionally. The user-friendly design and seamless navigation will captivate your potential clients. We look forward to discussing the details shortly.</p>
                        <p style="font-size:15px;margin-bottom:0px;">
                            Best regards,
                            <div style="font-size:17px;color:#28AE60;">Rohan Mostofa Abir</div>
                        </p>
                    </div>
                </div>

            </body>
            </html>`
        });

    }catch(err){
        console.log(err);
    }

}

/**
 * 
 * @param {*} to 
 * @param {*} data 
 */

export const sendEmailtoAdmin = async (to, data) => {

    let transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_ID,
            pass : process.env.MAIL_PASS
        }
    });

    try{

        // send activation mail
        await transporter.sendMail({
            from : `Dev Rohan <${process.env.MAIL_ID}>`,
            subject : `Exciting Consulting Website Development Opportunity`,
            to : to,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                
                <div style="background:#fff;width:100%">
                    <div style="background:#fff;width:70%;margin:auto;box-shadow:0px 7px 29px 0px #20212426;padding:30px 40px;border-radius:7px;display:block;">
                        <a href="https://rohanmostofa.vercel.app/" target="_blank" style="font-size:20px;background:#28AE60;color:#fff;border-radius:25px;padding:10px 20px;margin-bottom:60px;text-align:center;display:block;text-decoration:none;">Dev Rohan</a>
                        <p style="font-size:15px">Hello Rohan Mostofa Abir,</p>
                        <p style="font-size:15px">${data.message}</p>
                        <p style="font-size:15px;margin-bottom:0px;">
                            Best regards,
                            <div style="font-size:17px;color:#28AE60;">${data.name}</div>
                        </p>
                    </div>
                </div>

            </body>
            </html>`
        });

    }catch(err){
        console.log(err);
    }

}