/*
 * Assignment: AdvJavascript Assignment 1
 * Author:     Fanying Meng
 * Date:       2026-09-23
 */

const fs = require("fs");

/**
 * Remove a provided directory and the contents within
 * @param {string} dir The directory to remove
 * @returns {void}
 */
const removeDirectory = (dir) => {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, {
            recursive: true,
        });
    }
};

if (fs.existsSync("backup/books.json")) {
    fs.copyFileSync("backup/books.json", "books.json");
    fs.unlinkSync("backup/books.json");
}

removeDirectory("order");
removeDirectory("processed");
removeDirectory("backup");
