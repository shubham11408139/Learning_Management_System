var command =process.argv[2];
console.log('command:',command);
console.log(process.argv);
if(command ==='add'){
    console.log('Adding new note');
}
else if(command ==='list'){
    console.log('Listing all notes');
}
else{
    console.log('command not recognized');
}