const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'optionInquirer',
        message: 'What do you want?',
        choices: [
            {
                value: 1,
                name: `${'1.'.blue} Search City`
            },
            {
                value: 2,
                name: `${'2.'.blue} Recent searchs`
            },
            {
                value: 0,
                name: `${'0.'.blue} Exit`
            }
        ]
    }
];

const pauseInquierer = [
    {
        type: 'input',
        name: 'pause',
        message: `Please press ${'ENTER'.blue.bgYellow} to continue...\n`
    }
];

const showMenu = async () => {
    console.log('========================'.green);
    console.log('    Select an Option');
    console.log('========================\n'.green);

    const { optionInquirer } = await inquirer.prompt(questions);
    return optionInquirer;
}

const pauseMenu = async () => {
    const { pause } = await inquirer.prompt(pauseInquierer);
    return pause;
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'No value input.';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
}

module.exports = { showMenu, pauseMenu, readInput }