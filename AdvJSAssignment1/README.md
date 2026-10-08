# Advanced JavaScript Assignment 1
Complete the following spec.

1. Create the launch.json file to allow for debugging with breakpoints
2. Create an **app.js** file and complete the following
3. Create 3 constants
    - processedDir { string } - Assign the value **processed**
    - orderDir {string} - Assign the value **order**
    - backUp {string } - Assign the value **backup**
4. Within the **app.js** file, create the following functions:
    - Name: makeDirectory
        - Desc: 
            Creates a directory at a provided path if it does not exist. If the directory provided already exists, Display a message to the console. See video. Import the required module we have studied to complete this action.
        - Parameters:
            - dir { string } - Path of the directory to create 
        - Returns: 
            - void
    - Name: readFile
        - Desc: 
            Reads a file at the provided path and attempts to to deserialize the file. If unsuccessful, return an empty array
        - Parameters:
            - filePath { string } - Path of the file to read
        - Returns:
             - { Object[] }
    - Name: processOrder
        - Desc:
            - Creates an order json file from the books.json file. Complete the following features:
            1. Read the **books.json** file in a variable for processing called **order**.
            2. Check the length if the **order** array variable. If the length is zero, produce the message **No orders at ** and concatentate the current date time in ISO format.

                ```
                No orders at 2025-09-30-11:12:34:432Z
                ```

                When the orders array length is greater than zero complete continue beginning with step 3

            3. Create a variable **orderedByISBN** and assign it the **order** array vaiable sorted by the **isbn** property assending. See video.
            4. Create a variable  called **orderFile**. This is the path and file name of a new json file you will create. The file name will be structured as **book_order_YYYY-MM-DD-HH-MM-SS-mmmZ.json**

                Example file name
                ```
                book_order_2025-08-26T11-06-58-179Z.json
                ```

                Use the ISO string of the current date and time. Use the following **replace** string method to produce the file name
                ```
                `books_order_${new Date().toISOString().replace(/[:.]/g, '-')}.json`
                ```

                To create the full path, join the **orderDir** constant to your file name to create the complete path. Use the **path** module to join the directory and file name
                5. Write the data of the **orderedByISBN** variable using the path created in **orderFile**.
                6. Copy the original **books.json** file to the **processedDir** path with the file name in the format **book_processed_YYYY-MM-DD-HH-MM-SS-mmmZ.json**

                Example file name
                ```
                `books_processed_${new Date().toISOString().replace(/[:.]/g, '-')}.json`
                ```

                7. Copy the original **books.json** file to the **backUp** directory.
                8. Delete the original **books.json** file.
5. In **app.js** call
    **makeDirectory** using the **processedDir** as the function argument
    **makeDirectory** using the **backUp** as the function argument
    **makeDirectory** using the **orderDir** as the function argument

    **processOrder** to execute the features
6. Create a **reset.js** file. The purpose of this file is to reset the your folder structure and books.json file to the original starting state.
7. Within the **reset.js** file, create the following function:
    - Name: removeDirectory
        - Desc: Remove a provided directory and the contents within
        - Parameters:
            - dir { string } - The directory to remove
        - Returns:  
            - void
8. Check if the **backup/book.js** file exists. If the file exists, copy the **books.json** file from the **backup** directory to the root driectory of the project. Once the file has been copied, delete the **backup/book.js** file.
9. Call the **removeDirectory** function to delete the **order**, **processed** and **backup** directories.
