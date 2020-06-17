
//'use strict';
// let vs var
//console.log(myVar);
//var myVar;

//let mivar;
//let mivar;

function createPerson(name, age, sex, childs){
 
    let isParent;    
    if(childs && childs.length > 0){
    
        isParent = true;        
    }else{

        isParent = false;
    }
    
    const person = {

        name: name,
        age: age,
        sex: sex,
        childs: childs,
        isParent: isParent
    };

    return person;
}

let man = createPerson("Rodolfo", 45, "M", ["Martín", "Luciana"]);
let woman = createPerson("Maria", 23, "F");

console.log(man.name);
console.log(man.childs[0]);
console.log(man);
console.log(woman);

/* part I - Add members to object */

man.job = "Architect";
console.log(man.name + " " + man.job);


/* part II - function assigment to variable*/

let bornFunc = function born(person, childName){

    if(person.childs){
        person.childs.push(childName);
    }else{        
        person.childs = [childName];
    }
    
    person.isParent = true;
}

bornFunc(woman, "Laura");
bornFunc(woman, "Miguel");



/* Part III - string replace*/
function printBasicPerson(person){
  
    return `Name: ${person.name} Age: ${person.age} Is parent?: ${person.isParent}`;
}

console.log(printBasicPerson(man));



/* Part IV - function as argument*/

function printArray(childs){

    let childsStr = " Childs: ";
    childs.forEach(element => {
        childsStr += " " + element;
    });

    return childsStr;
}

function prettyPrintPerson(person, printChilds){

    let str = printBasicPerson(person) + printChilds(person.childs);
    console.log(str);
}

prettyPrintPerson(man, printArray);


/* Part V - Error handling*/

function testNumber(num){
    
    if("string" == typeof num){
        let number = parseFloat(num);
        if(isNaN(number)){
            throw {error: "No es un numero"}            
        }
        return;
    }

    if("number" != typeof num){
        throw {error: "No es un numero"}            
    }
}

try{

    testNumber("aaaa");

}catch(e){
    console.log(e);
}
 

 /* Part V - classes */
 class Person {

    #isFemale;

    constructor(name, age, sex, childs, isParent){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.childs = childs;
        this.isParent = isParent;

        if(sex == "M"){
            this.#isFemale = false;
        }else{
            this.#isFemale = true;
        }
    }

    printPrivateProperty(){
        console.log(this.#isFemale);
    }
 }

 let juana = new Person("Juana", 19, "F");
 console.log(juana);
 juana.printPrivateProperty();
 console.log(juana.name);
 //console.log(juana.#isFemale);

