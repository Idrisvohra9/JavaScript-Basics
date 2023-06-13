const fs = require('fs');


var path = "02.JavaScript/Basics/JSON/demo.json";
// Read:
// var data = ;
// const object = JSON.parse(fs.readFileSync(path));
// console.log("Existing Data");
// console.log(object);

// console.log("Updated Data");
// console.log(object.find(obj => obj.Age === 19));
// deleteEntry(7)

// console.log(object);

function updateEntry(id, newData) {
    // First Get all Data
    const obj = JSON.parse(fs.readFileSync(path));
    // Filter and splice the old data according to id and insert the new one:
    obj.splice(obj.findIndex(o => o.Id === id), 1, { ...newData, Id: id });

    fs.writeFile(path, JSON.stringify(obj), err => {
        // Check for error
        if (err) throw err;
        console.log("data updated..");
    });

}

function deleteEntry(id) {
    // First Get all Data
    const obj = JSON.parse(fs.readFileSync(path));
    // Filter and splice the old data according to id:
    obj.splice(obj.findIndex(o => o.Id === id), 1);

    fs.writeFile(path, JSON.stringify(obj), err => {
        // Check for error
        if (err) throw err;
        console.log("data deleted..");
    });
}

async function getEntry(id) {
    const obj = await JSON.parse(fs.readFileSync(path));
    // Filter and splice the old data according to id:
    return obj.find(o => o.Id === id);

}
getEntry(8).then((entry) => console.log(entry));
