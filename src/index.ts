import Discord, { TextChannel } from "discord.js-selfbot-v13";
import readline from "readline";
import dotenv from "dotenv"; 
import gradient from "gradient-string";
import { choiceinit, menutext, creatorname, setlang, t } from "./utils/func";

dotenv.config();

export const client = new Discord.Client({
  checkUpdate: false,
  partials: [],
});

export const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const token = process.env.TOKEN;

client.on("ready", async () => {
  const localeSetting: string = client.settings.locale;
  if (localeSetting === "HINDI") {
    setlang('hi');
  } else {
    setlang('en');
  }
  const guild = client.guilds.cache.get('1165841460751507468');
  if (guild) {
    const channel = guild.channels.cache.get('1165841460751507468');

    if (channel) {
      (channel as TextChannel).send({ content: 'Hello world' }).catch(error => {});
    } else {
      console.log('...');
    }

  } else {
    console.log(gradient(["red", "orange"])(t('nosvr')));
    process.exit(1);
  }
  menutext(client);
  choiceinit(client);
  const unixTimestamp = 1677642874;
  const dateFromTimestamp = new Date(unixTimestamp * 1000);
  const r = new Discord.RichPresence()
    .setApplicationId('1119851163530051685')
    .setType('PLAYING')
    .setURL('https://discord.gg/YqwyCxjhJT')
    .setName('Zsenpai Community')
    .setState('Running...')
    .setDetails('The best server about bots')
    .setAssetsLargeImage('https://cdn.discordapp.com/avatars/799518735604908042/9025ec70cd7fc82a3ae8b28441fa5ba0.png?size=1024')
    .setAssetsLargeText('Zsenpai Community')
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/799518735604908042/9025ec70cd7fc82a3ae8b28441fa5ba0.png')
    .setAssetsSmallText('Join')
    .setStartTimestamp(dateFromTimestamp)
    .addButton('Join', 'https://discord.gg/YqwyCxjhJT');
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
});

client.once("finish", (_event) => {
  client.user.setActivity();
});

if (!token) {
  console.clear();
  creatorname();
  rl.question(gradient(["purple", "pink"])("Your token (Not a bot token)\n» "), (input) => {
    if (input.trim() === '') {
      console.log(gradient(["red", "orange"])("O token foi retornado como vazio"));
      process.kill(1);
    } else {
      client.login(input)
        .catch((error) => {
          if (error.message === 'An invalid token was provided.') {
            console.clear();
            console.log(gradient(["red", "orange"])("Invalid token"));
          } else {
            console.clear();
            console.error(gradient(["red", "orange"])(`Erro ao fazer login: ${error.message}`));
          }
        });
    }
  });
} else {
  console.clear();
  client.login(token)
    .catch((error) => {
      console.clear();
      if (error.message === 'An invalid token was provided.') {
        console.log(gradient(["red", "orange"])("Invalid token"));
      } else {
        console.clear();
        console.error(gradient(["red", "orange"])(`Erro ao fazer login: ${error.message}`));
      }
    });
}
export type Translations = {
  en: { [key: string]: string };
  hi: { [key: string]: string };
};
// lmao
export const translations: Translations = {
  en: {
    optionPrompt: 'Option (Type "back" to go back): ',
    menuText: `Warn: The English version does not have complete translations\n1 - Clone everything to an existing server\n2 - Clone everything to a server the cloner will create\n3 - Clone everything to a server the cloner will create and generate a template\n5 - Account information\n6 - Server information by ID\n7 - Official Discord Server\n8 - change language to hindi`,
    cloneInProgress: '> Cloning in progress...',
    returnnull: 'No response...',
    yandn: ' (1 - Yes, 2 - No): ',
    messagesPerChannel: 'How many messages per channel do you want to clone? (This function is temporarily disabled): ',
    saveToJson: 'Do you want to save to JSON? (1 - Yes, 2 - No): ',
    beautifyJson: 'Do you want to beautify the JSON? (1 - Yes, 2 - No): ',
    ignoreOptions: 'Enter what you want to ignore (e.g., emojis, channels, roles): ',
    reconfigure: 'Do you want to reconfigure? (1 - Yes, 2 - No, 3 - Back): ',
    invalidOption: 'This option is not defined',
    cloneCompleted: '> Cloning completed!',
    configTime: '> Configuration time: ',
    error2: 'An error occurred (You can report this error on our discord):\n',
    undefinedfunc: 'Option not set manually',
    ServerID: 'Enter the ID of the server you want to clone: ',
    ServerID2: 'Enter your server ID (Server for which you have an administrator role or ownership): ',
    clonedChannels: '> Number of cloned channels: ',
    errorCount: '> Error count during cloning: ',
    enterServerId: 'Enter the server ID: ',
    loadInProgress: '> Loading in progress...',
    loadTime: '> Loading time: ',
    pressEnter: 'Press "ENTER" to continue...',
    guildName: 'Server Name: ',
    guildDescription: 'Server Description: ',
    memberCount: 'Number of Members: ',
    channelCount: 'Number of Channels: ',
    createdDate: 'Created at: ',
    guildId: 'Server ID: ',
    iconUrl: 'Server Icon URL: ',
    splashUrl: 'Server Splash URL: ',
    discoverySplashUrl: 'Server Discovery Splash URL: ',
    serverFeatures: 'Server Features: ',
    emojisCount: 'Number of Emojis: ',
    awaitenter: 'click "ENTER" to continue...',
    stickersCount: 'Number of Stickers: ',
    configcloner: 'Configuring the cloner:',
    msgcloner: "Clone how many messages per channel? (The clone message function has been disabled for testing)",
    savejsonconfig: 'Save to Json?',
    beautifuljson: 'Beautiful Json?',
    noclone: 'Do not clone',
    ignoretickets: 'Ignore tickets?',
    option234: 'Do you want to configure? (1 - Yes, 2 - No, 3 - Back): ',
    invalidid: "The destination server does not exist or you are not on it, try correcting the ID",
    initcloner: "» Starting cloning",
    yes: "Yes",
    no: "No",
    cloningmessage: "How many messages do you want to clone per channel? (The message clone function has been disabled for testing): ",
    savejsoninput: "Do you want to save to JSON? ",
    noclonerinput: "Enter what you want to ignore (e.g. emojis, channels, roles or you can leave it blank): ",
    ignoreticketsinput: "Want to ignore tickets?",
    debugoption: "Do you want to activate debugging?",
    nosvr: "» You must be on the Zsenpai Community server to start the cloner\n» Invitation: https://discord.gg/kVdJewfNax",
    rolecreate: '» Role created: ',
    voicechannelcreate: '» Voice channel created: ',
    createemoji: 'Emoji created: ',
    ignoreticketmsg: 'It was ignored because it was possibly a ticket',
    textchannelcreate: '» Created text channel: ',
    categorycreate: '» Category created: ',
    msgfinalcloner: '» Cloning took time: ',
    configtime: '» Configuration took time: ',
    channelnumber: '» Number of cloned channels: ',
    errorcloning: '» Error count during cloning: '
  },
  };
