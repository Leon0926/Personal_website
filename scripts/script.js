let course1={
    code: "ACIT 1620", 
    name: "Web Fundamental Technologies"
};
let course2={
    code: "ACIT 1515",
    name: "Scripting for IT"
};
let course3={
    code: "ACIT 1630",
    name: "Database Systems"
};

let courseList = [course1, course2, course3];

number = input();
if((number.length != 4) || (Number(number)!=true)){
    number = input()
};

for (let i = 0; i < array.length; i++) {
    if (array[i].code == number){
        console.log(`Yes I am taking the course: ${array[i].code} - ${array[i.name]}`)
    }
    else{
        let num = i+4
        let arrayListName = 'course'.concat(num)
    }
};
    