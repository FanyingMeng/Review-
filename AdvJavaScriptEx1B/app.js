const path = require('path');

const {helloWorldFromIO, getDirectoryContents, getDirectoryContentsSorted} = require('./io');
const chalk = require('chalk');

helloWorldFromIO();

const dirContent = getDirectoryContents('files');//or :(`c:\src`);

for(const f of dirContent){
    console.log(chalk.red.bold.italic(f));
    console.log(`File extension: ${chalk.bgBlue(path.extname(f))}`);
    
    
}
console.log('-------------------------------------------------');

//forEach extension method
const moreContent = getDirectoryContents('more files')
moreContent.forEach(f => {
    console.log(f);
    
});

const sortedContent = getDirectoryContentsSorted('files','desc')
for (const f of sortedContent) {
    console.log(f);
    
    
}

