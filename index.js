const { showMenu, pauseMenu } = require("./helpers/inquirer");

const main = async () => {
    let option = 0;
    do {
        console.clear();
        option = await showMenu();
        switch (option) {
            case 1:
                console.log("1 Selected...");
                break;
            case 2:
                console.log("2 Selected...");
                break;
            case 0:
                console.log("Ending app".white.bgGreen);
                break;
        
            default:
                console.log("Invalid option!".red);
                break;
        }
        if (option !== 0) await pauseMenu();
    } while (option !== 0);
}

main();