import dotenv from 'dotenv'
dotenv.config();

const BOT_TOKEN = process.env.DISCORD_AUTH2_TOKEN;
const DEFAULT_PREFIX = process.env.DEFAULT_PREFIX;

export { BOT_TOKEN, DEFAULT_PREFIX };