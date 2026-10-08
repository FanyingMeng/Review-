//read the students.json
//filter the students for senior and in course A112
//create a new file called registration.json
//make a back up of yhe students.json in a backupfolder
//delete the orignial datasource/students.json

try {
    const fs = require('fs');
    const studentData = fs.readFileSync('datasource/students.json');//read the file
    const students = JSON.parse(studentData);//Deserializing

    if(!!students.length){
        //we have students to work with

        const registrationStudents = students.filter(s => s.isSenior == true && s.courseId == 'A112');
        if(registrationStudents.length > 0){
            fs.writeFileSync('datasource/registration.json',JSON.stringify(registrationStudents,null,2));

            //create a backup of the student file
            if (!fs.existsSync('backup')) {
                fs.mkdirSync('backup');
                
            }
            //copy students.json from datasource to the backup folder
            fs.copyFileSync('datasource/students.json','backup/students.json');

            //delete a file
            fs.unlinkSync('datasource/students.json');
            
        }else{
            console.log('No students found for filter');
            
        }
    }else{
        console.log('No students found');
        
    }

    console.log(students);
} catch (error) {
    console.log('File not found');
    
}

