/*
 * Assignment: AdvJavascript Assignment 1
 * Author:     Fanying Meng
 * Date:       2026-09-23
 */

const fs = require("fs");
const path = require("path");

const processedDir = "processed";
const orderDir = "order";
const backUp = "backup";

/**
 * Creates a directory at a provided path if it does not exist. If the directory provided already exists, Display a message to the console.
 * @param {string} dir Path of the directory to create
 * @returns {void}
 */
const makeDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    } else {
        console.log("The folder exists");
    }
};

/**
 * Reads a file at the provided path and attempts to to deserialize the file. If unsuccessful, return an empty array
 * @param {string} filePath Path of the file to read
 * @returns {Object[]}
 */
const readFile = (filePath) => {
    try {
        const file = fs.readFileSync(filePath).toString();
        return JSON.parse(file);
    } catch {
        return [];
    }
};

/**
 * Creates an order json file from the books.json fil
 * @param {}
 * @returns {void}
 */
const processOrder = () => {
    const order = readFile("books.json");
    if (order.length === 0) {
        console.log(`No orders at ${new Date().toISOString()}`);
    } else {
        const orderedByISBN = order.sort((a, b) => (a.isbn > b.isbn ? 1 : -1));

        const orderFile = path.join(
            orderDir,
            `books_order_${new Date().toISOString().replace(/[:.]/g, "-")}.json`,
        );
        fs.writeFileSync(orderFile, JSON.stringify(orderedByISBN, null, 2));

        fs.copyFileSync(
            "books.json",
            path.join(
                processedDir,
                `books_processed_${new Date().toISOString().replace(/[:.]/g, "-")}.json`,
            ),
        );

        fs.copyFileSync("books.json", path.join(backUp, "books.json"));
        fs.unlinkSync("books.json");
    }
};

makeDirectory(processedDir);
makeDirectory(backUp);
makeDirectory(orderDir);

processOrder();
