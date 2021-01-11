const juanLibrary = {}



//      =========each iterator=========
const numbers = [1, 2, 3, 4, 5, 6]

function actions(element) {
    element*3
    console.log(element)
}


juanLibrary.each = function(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

juanLibrary.each(numbers, actions)


//      =========filter method=========

let numbers2 = [19, 34, 454, 7634, 132]

juanLibrary.toFilter = function(array, fn) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

function actionsToFilter(element) {
    return element >=100
}

const final=juanLibrary.toFilter(numbers2, actionsToFilter)
console.log(final)


//     ========= map method=========

let numbers3 = [19, 34, 454, 7634, 132]

juanLibrary.toMap = function(array, fn) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        const finalValue = fn(array[i])
        newArray.push(finalValue)
    }
    return newArray
}

function actionsToMap(element) {
    return element*3
}

//let final = juanLibrary.toMap(numbers3, actionsToMap)
//console.log(final)



//      =========find method=========

let fruits = ['manzana','naranja', 'mandarina', 'sandia', 'naranja']

juanLibrary.toFind = function(array, fn) {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return array[i]
        }
    }
}

function actionsToFind(element) {
    return element === 'naranja'
}

//let final = juanLibrary.toFind(fruits, actionsToFind)
//console.log(final)




//      =========findIndex method=========

let fruits2 = ['manzana','naranja', 'mandarina', 'sandia', 'naranja']

juanLibrary.toFindIndex = function(array, fn) {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            const value = array[i];
            const index = array.indexOf(value);
            return index
        }
    }
}

function actionsToFindIndex(element) {
    return element === 'mandarina'
}

//let final = juanLibrary.toFindIndex(fruits2, actionsToFindIndex)
//console.log(final)




//      =========contains method=========

let fruits3 = ['manzana','naranja', 'mandarina', 'sandia', 'naranja']

juanLibrary.contains = function(array, fn) {
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            return true
        }
    }
}

function actionsContains(element) {
    return element === 'sandi'
}

//let final = juanLibrary.contains(fruits3, actionsContains)
//console.log(final)





//      =========pluck method=========

let fruits4 = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]

juanLibrary.pluck = function(array, elem) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i][elem])
    }
    return newArray
}


//let final = juanLibrary.pluck(fruits4, 'name')
//console.log(final)




//      =========without method=========

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

juanLibrary.without = function(array, ...elemens) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < elemens.length; j++) {
            if(array[i] !== elemens[i]) {
                newArray.push(array[i])
                break
            }
        }
    }
    return newArray
}


//let final = juanLibrary.without(list, 1,2,3,4)
//console.log(final)
