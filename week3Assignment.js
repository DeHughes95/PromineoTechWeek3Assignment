
let ages = [3, 9, 23, 64, 2, 8, 28, 93];    //creates given ages array

function subtractFirstFromLast(){           // function for dynamic use of different sized arrays

    return ages[ages.length-1] - ages[0];
}

console.log(subtractFirstFromLast());

ages.push(4);                               // adds new number to end of array
console.log(subtractFirstFromLast());       // prints new result testing function

averageAge = 0;

for(let i = 0; i<ages.length; i++){         //loops through array and recalculates averageAge
    averageAge += (ages[i]/ages.length);
}

console.log(averageAge);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];        //creates given names array

avgLPN = 0;

for(let i = 0; i<names.length; i++){            //loops through names array and recalculates avgLPN variable
    avgLPN += (names[i].length/names.length);
}

console.log(avgLPN);

console.log(names[names.length-1]);             //how we can access last element in any length array

console.log(names[0]);                          //how we can access the first element of any array

let namesLengths = [];

for(let i = 0; i < names.length; i++){          //iterates through names array and inputs name length from each element into namesLengths
    namesLengths.push(names[i].length);
}

sumOfElements = 0;

for(let i = 0; i< namesLengths.length; i++){    //itterates through namesLengths and adds all the elements and assigns to sumOfElements
    sumOfElements += namesLengths[i];
}

console.log(sumOfElements);

function duplicateWord(word, n){                //takes perameters of string and int and will duplicate string by n with no spaces

    words = '';         

        for(let i = 1; i<=n; i++){                  //will return an empty string if n = 0
        words += word;
        }
        return words;
}

console.log(duplicateWord('Hello',3));

function createFullName(firstName, lastName){   //concatinates first and last name with a space between them into fullName
    fullName = firstName + ' ' + lastName;
    return fullName;
}

console.log(createFullName('David', 'Hughes'));

function aboveHundredCheck(array1){             //sums all elements in an array and returns true if above 100 else false

    totalofElements = 0;

        for(let i = 0; i < array1.length; i++){
            totalofElements += array1[i]; 
        }
        if(totalofElements > 100){
            return true;
        }
    return false;
} 

console.log(aboveHundredCheck([50,50,1]));
console.log(aboveHundredCheck([1,2,3,4,5,6,7,8,9,10]));
console.log(aboveHundredCheck([25,25,25,25]));
console.log(aboveHundredCheck([25,25,25,25,1]));

function averageOfElements(array1){                     // caculates average of integers in given array

    totalAverage = 0;

        for(let i = 0; i < array1.length; i++){
            totalAverage += (array1[i]/array1.length);
        }
    return totalAverage; 

}

console.log(averageOfElements(ages));
console.log(averageOfElements([25,25,25,25]));
console.log(averageOfElements([2,4,2,6,2,8,2,10,2]));

function compareArrayAverage(array1, array2){           //compares 2 array averages and returns true if array1 is > array2 else false (using averageOfElements function)

    if(averageOfElements(array1) > averageOfElements(array2)){
        return true;
    }
    return false;
}

console.log(compareArrayAverage(ages,[25,25,25,25]));
console.log(compareArrayAverage(ages,[100,100,100]));
console.log(compareArrayAverage([1,2,3,4], ages));

function willBuyDrink(isHotOutside, moneyInPocket){     //checks truthyness of isHotOutside and compares moneyInPocket to 10.50
    if(isHotOutside && (moneyInPocket > 10.50)){
        return true; 
    }
    return false;
}

console.log(willBuyDrink(true, 10.51));
console.log(willBuyDrink(true, 10.50));
console.log(willBuyDrink(false, 100.50));

function areTheyHere(name, nameList){           //This Function will take an array of Strings and tell you if the name exists in the array ignoring 
                                                //user input error while still returning the value of the actual array. I created this as a roll call 
    lowerCaseNames = [];                        //feature that could be used in a classroom setting to check attendence. although it could be more robust using fullnames

        for(let i = 0; i<nameList.length; i++){
            lowerCaseNames.push(nameList[i].toLowerCase());
        }

    if(lowerCaseNames.indexOf(name.toLowerCase()) >= 0){
        return console.log("You're in luck! " + nameList[lowerCaseNames.indexOf(name.toLowerCase())] + " is currently here.");
    }
    return console.log("I'm sorry, " + name + " is not here.");
    
}

areTheyHere('Bob', names);
areTheyHere('David', names);
areTheyHere('sally', names);
areTheyHere('david', ['Allison', 'David', 'Loretta', 'Cary', 'Grant']);

