import { BOT_TOKEN, DEFAULT_PREFIX } from '../env-vars';

const { SapphireClient } = require('@sapphire/framework');

const client = new SapphireClient({
  //defaultPrefix: DEFAULT_PREFIX
});

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login(BOT_TOKEN);
		client.logger.info('logged in');

		console.log(client);
		
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();