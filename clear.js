const job ={
    position: 'Cashier',
    type:'Hourly',
    isAvailable: false,
    showDetails(){
        const accepting = this.isAvailable ? 'Is Accepting Applications' : 'NOT Accepting Applications'
        console.log(`This position ${this.position} of type ${this.type} and ${accepting}`);
    }
}
const obj= Object.create(job);
obj.isAvailable =true
obj.showDetails();