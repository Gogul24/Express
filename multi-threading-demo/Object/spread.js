const name1 = {
    firstName:'Gokul',
    lastName:'jijo'
}

const details = {
    job:'VIP',
    employer:'Planet Express'
}

const merge = {...name1,...details}
console.log(merge);