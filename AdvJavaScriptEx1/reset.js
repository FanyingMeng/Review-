const fs = require('fs');

if (fs.existsSync('backup')) {
    fs.rmSync('backup',{
        recursive:true
    })
}

if (fs.existsSync('datasource')) {
    fs.rmSync('datasource',{
        recursive:true
    })
}