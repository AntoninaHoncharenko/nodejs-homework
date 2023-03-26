// 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
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "g.antonina.vl@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
