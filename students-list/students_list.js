const fs = require('fs');
const { min, max, repeat } = require('lodash');
const students_data = require('./students_data.json');

class Data{
    constructor(data) {
        this.data = data;
    }
    avg(){
        return (this.data.grade.math + this.data.grade.physics + this.data.grade.chem + this.data.grade.english)/4;
    }
    alphaGrade(){
        if(this.avg() < 0 || this.avg() > 10) return 'err';
        if(this.avg() < 4) return 'F';
        else if(this.avg() < 5) return 'D';
        else if(this.avg() < 5.5) return 'D+';
        else if(this.avg() < 7) return 'C';
        else if(this.avg() < 8.5) return 'B';
        else return 'A';
    }
    passed(){
        if(this.alphaGrade() == 'err') return undefined;
        return (this.alphaGrade() != 'F')  ? true : false;
    }
}

let dataArray = [];
let lowest = 10;
let highest = 0;

for (let i = 0; i < students_data.length; i++) {
    dataArray[i] = new Data(students_data[i]); 
    let avg = dataArray[i].avg();
    lowest = (avg < lowest) ? avg : lowest;
    highest = (avg > highest) ? avg : highest;
}

for (let i = 0; i < dataArray.length; i++) {
    console.log();
    console.log(`Name: ${dataArray[i].data.name}`);
    console.log(`ID: ${dataArray[i].data.id}`);
    console.log(`GPA: ${dataArray[i].avg()}`);
    console.log(`Rating: ${dataArray[i].alphaGrade()}`);
    console.log(`Status: ${dataArray[i].passed() ? "Passed" : "Failed"}`);
    if(dataArray[i].avg() == lowest) console.log("Note: Lowest GPA");
    if(dataArray[i].avg() == highest) console.log("Note: Highest GPA");
    console.log();    
    console.log(repeat('-',30));
}
