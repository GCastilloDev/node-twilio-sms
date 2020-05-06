const config = require('../config');
const twilio = require('twilio');
const client = new twiliogit (
    config.accountSid,
    config.authToken);

/**
 * Send SMS message
 * @param {string} body - The meesage body
 * @param {string} phone - The phone number
 */
async function sendMessage(body, phone) {
    try {
        const message = await client.messages.create({
            to: phone,
            from: '+15414184645',
            body
        });
        return message;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sendMessage };