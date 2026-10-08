const fs = require('fs');

const helloWorldFromIO = () =>{
    console.log('Hello from IO');
    
}

/**
 * Provides a list of files and folder in a given directory
 * @param {string} dir the directory to read
 * @returns {string[]} the contents of the directory
 */

const getDirectoryContents = dir =>{
    try {
        const dirContents = fs.readdirSync(dir)
        return dirContents
    } catch(e) {
        fs.appendFileSync('errors.txt',`${new Date()}: ${e.message}\r\n`)
        return [];
    }
    
}
/**
 * Provides a list of files and folders in a given directory
 * @param {string} dir the directory to read
 * @param {string} sort the sort order of the output. ascending is default
 * @returns {string[]} sorted files and/or folders of the provided directory 
 */
const getDirectoryContentsSorted = (dir, sort) => {
    //'desc'
    try {
        const dirContents = fs.readdirSync(dir)
        if(sort.toLowerCase() == 'desc'){
            //dirContents.sort((a, b) => a < b ? 1 : -1);//string in reverse alpha order
            dirContents.reverse();
        }
        return dirContents;
    } catch (error) {
        return [];
    }
    
}

module.exports = {
    helloWorldFromIO,
    getDirectoryContents,
    getDirectoryContentsSorted
}

