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
            from : `Rohan Mostofa Abir <${process.env.MAIL_ID}>`,
            subject : `Exciting Consulting Website Development Opportunity `,
            to : to,
            html: `<div style="background:'#fff',width:'100%'">
                <h1 style="font-size:'55px'">Dev Rohan</h1>
                <h3 style="font-size:'25px'">Hello ${data.name}</h3>
                <h3 style="font-size:'25px'">Thank you for your interest in our consulting website. We have developed an exceptional web experience using React, TypeScript, JavaScript, Next.js, Vue.js, Tailwind, MUI, Node.js, Express.js, Nest.js & Mongodb to showcase your services professionally. The user-friendly design and seamless navigation will captivate your potential clients. We look forward to discussing the details shortly.</h3>
                <br>
                <h3 style="font-size:'25px'">Best regards,</h3>
                <h3 style="font-size:'25px'">Rohan Mostofa Abir</h3>
            </div>`
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
            from : `Rohan Mostofa Abir <${process.env.MAIL_ID}>`,
            subject : `Exciting Consulting Website Development Opportunity`,
            to : to,
            html: `<div style="background:'#fff',width:'100%'">
                <h1 style="font-size:'55px'">Dev Rohan</h1>
                <h3 style="font-size:'25px'">Hello ${data.name}</h3>
                <h3 style="font-size:'25px'">${data.message}</h3>
                <br>
                <h3 style="font-size:'25px'">Best regards,</h3>
                <h3 style="font-size:'25px'">${data.name}</h3>
            </div>`
        });

    }catch(err){
        console.log(err);
    }

}