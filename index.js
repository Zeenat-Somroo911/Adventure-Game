// src/index.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
const slowAnimate = async (text, delay = 100) => {
    for (const char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
    console.log();
};
const startGame = async () => {
    console.log(chalk.green.italic('Welcome to the Space Adventure Game!'));
    await mainMenu();
};
const mainMenu = async () => {
    const choices = [
        { name: 'Start Space Mission', value: 'start' },
        { name: 'Developer Info', value: 'developer' },
        { name: 'Quit', value: 'quit' },
    ];
    const answer = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: choices,
    });
    if (answer.action === 'start') {
        await startMission();
    }
    else if (answer.action === 'developer') {
        await showDeveloperInfo();
        await mainMenu(); // Return to the main menu after showing developer info
    }
    else {
        console.log(chalk.red('Thanks for playing!'));
        process.exit(0);
    }
};
const startMission = async () => {
    console.log(chalk.blue.italic('You are on a mission to explore a distant planet.'));
    const choices = [
        { name: 'Explore the surface', value: 'surface' },
        { name: 'Enter a cave', value: 'cave' },
        { name: 'Investigate a strange signal', value: 'signal' },
        { name: 'Return to the spaceship', value: 'spaceship' },
    ];
    const answer = await inquirer.prompt({
        name: 'task',
        type: 'list',
        message: 'What do you want to do?',
        choices: choices,
    });
    switch (answer.task) {
        case 'surface':
            console.log(chalk.yellow('You explore the surface and find alien plants!'));
            break;
        case 'cave':
            console.log(chalk.yellow('You enter the cave and discover ancient alien artifacts!'));
            break;
        case 'signal':
            console.log(chalk.yellow('You investigate the signal and encounter an alien being!'));
            break;
        case 'spaceship':
            console.log(chalk.yellow('You return to the spaceship and prepare for the next mission.'));
            break;
    }
    await mainMenu();
};
const showDeveloperInfo = async () => {
    const developerName = chalk.magenta.underline('ZEENAT SOMROO');
    await slowAnimate(chalk.magenta.bold(`\n<----------------------------------Developer Name: ${developerName}-------------------------------------->\n`));
};
startGame();
