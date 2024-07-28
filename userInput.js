const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Who are you?',name=>{
    console.log(`hey there ${name}! `);
    readline.close();
})