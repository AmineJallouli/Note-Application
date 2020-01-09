console.log('starting app')
const input=require('yargs')
const notes=require('./functions')

// var title =process.argv[3] ;  
// var body =process.argv[4]
// var  command =process.argv[2]
var title =input.argv.title ;  
var body =input.argv.body
var  command =input.argv._[0]

if (command==='ADD') {
console.log('adding')
    notes.ADD(title,body)
}else if( command==='remove') {
    console.log('remove')
    notes.Remove (title)
}else if (command==='Read') {
    console.log('reading')
    notes.Read(title)
}else if (command ==='List') {
    console.log('listing')
    notes.List()
}