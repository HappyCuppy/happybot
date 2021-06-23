import { SapphireClient } from '@sapphire/framework';
import { DEFAULT_PREFIX } from '../env-vars';

const client = new SapphireClient({
  defaultPrefix: DEFAULT_PREFIX
});

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');

		console.log([...client.stores.get('commands')]);
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();
