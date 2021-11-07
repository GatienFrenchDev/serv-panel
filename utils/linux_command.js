function linux_command(commande){
    const { exec } = require("child_process");

    exec(commande, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        return(stdout)
    });
    
}

module.exports = linux_command