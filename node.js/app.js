console.log('starting app.js');

const fs=require('fs');
var command= process.argv[2];
console.log('command:',command);
console.log(process.argv);

if(command=== 'add')
{
    console.log('adding new note');
}
else if(command==='list')
{
    console.log('Listing all notes');
}
else if(command=== 'read')
{
    console.log('Reading the note');
}
else if(command === 'remove')
{
    console.log('Remove the notes');
}
else{
    console.log('command not Recognized');
}
