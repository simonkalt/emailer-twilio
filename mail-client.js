require('dotenv').config({ path: './config.env' });

const notifier = require('mail-notifier');

const inbox = {
 user: process.env.IMAP_USER,
 password: process.env.IMAP_PASS,
 host: process.env.IMAP_HOST,
 port: process.env.IMAP_PORT,
 tls: true,
 tlsOptions: { rejectUnauthorized: false }
};