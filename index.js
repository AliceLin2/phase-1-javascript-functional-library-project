function myEach(collection, callback){
    let newCol
    if (!Array.isArray(collection)){
        newCol = Object.values(collection)
    } else {
        newCol = collection
    }
    for(let i=0; i<newCol.length; i++){
        callback(newCol[i])
    }
    return collection
}

function myMap(collection, callback){
    let result = []
    let newCol
    if (!Array.isArray(collection)){
        newCol = Object.values(collection)
    } else {
        newCol = collection
    }
    for(let i=0; i<newCol.length; i++){
       result.push(callback(newCol[i]))
    }
    return result
}

function myReduce(collection, callback, acc){
    let newCol
    if (!Array.isArray(collection)){
        newCol = Object.values(collection)
    } else {
        newCol = collection
    }
    if (acc !== undefined){
        for(let i=0; i<newCol.length; i++){
            acc = callback(acc, newCol[i])
         }
    } else {
        acc = newCol[0]
        for(let i=1; i<newCol.length; i++){
            acc = callback(acc, newCol[i])
         }
    }
    return acc
}

function myFind(collection, predicate){
    let find
    let newCol
    if (!Array.isArray(collection)){
        newCol = Object.values(collection)
    } else {
        newCol = collection
    }
    for(let i=0; i<newCol.length; i++){
       if(predicate(newCol[i])){
           find = newCol[i]
           return find
       }
    }
    return find
}

function myFilter(collection, predicate){
    let find = []
    let newCol
    if (!Array.isArray(collection)){
        newCol = Object.values(collection)
    } else {
        newCol = collection
    }
    for(let i=0; i<newCol.length; i++){
       if(predicate(newCol[i])){
           find.push(newCol[i])
       }
    }
    return find
}

function mySize(collection){
    let newCol
    if (!Array.isArray(collection)){
        newCol = Object.values(collection)
    } else {
        newCol = collection
    }
    return newCol.length
}

function myFirst(array, n){
    if (n === undefined){
        return array[0]
    } else {
        const newCol = array.slice(0, n)
        return newCol
    }
}

function myLast(array, n){
    if (n === undefined){
        return array[array.length-1]
    } else {
        const newCol = array.slice(array.length-n, array.length)
        return newCol
    }
}

function myKeys(object){
    let result = []
    for (let key in object){
        result.push(key)
    }
    return result
}

function myValues(object){
    let result = []
    for (let key in object){
        result.push(object[key])
    }
    return result
}