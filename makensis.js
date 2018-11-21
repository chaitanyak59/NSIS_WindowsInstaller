const makensis = require('makensis'); 
const express = require('express');
const path = require('path');
const process = require('process');

const app = express();

// HOSTING NAV DLL & NSI FOLDER
app.use(express.static(path.resolve('navWindows')));

const options = {
    verbose: 2,
    define: {
        'SPECIAL_BUILD': true
    }
};
 
// Asynchronous: triggering
(async () => {
    // try {
    //     let output = await makensis.compile(path.resolve('navWindows/nsiScripts/main.nsi'), options);
    //     console.log(`Standard output:\n${output.stdout}`);
    // } catch (output) {
    //     console.error(`Exit Code ${output.status}: ${output.stderr}`);
    // }
    let output = await makensis.compile(path.resolve('navWindows/nsiScripts/main.nsi'), options);
})();

app.listen(3000, () => {
    console.log('NSIS started');
});

process.on('unhandledRejection', (reason, any) => {
    console.log('Reason To quit:', reason);
})