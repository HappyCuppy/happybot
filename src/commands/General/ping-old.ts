import { Command } from '@sapphire/framework';

export default class extends Command {
	constructor(context) {
		super(context, {
			name: 'ping',
			description: 'Send back the ping of the bot'
		});
	}

	async run(message) {
		const msg = await message.channel.send('ping');
		return msg.edit(
			//`Pong! Bot La tency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`
      `Pong!!!`
		);
	}
};
