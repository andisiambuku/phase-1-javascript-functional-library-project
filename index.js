function valueObj(input){
    if (typeof input ==='object'){
        return Object.values(input)
    }else return input
}
function myEach(collection, callback){
    let valueArr = valueObj(collection)
    for(let x=0;x<valueArr.length;x++){
        callback(valueArr[x])
    }
    return collection;
}
function myMap(collection, callback){
    let valueArr = valueObj(collection)
    let newArr = []
    for (let x=0;x<valueArr.length;x++){
        newArr[x] = callback(valueArr[x])
    }
    return newArr;
}
function myReduce(collection,callback,acc){
    let valueArr = valueObj(collection)
    if(!acc){
        acc = valueArr[0]
        valueArr=valueArr.slice(1)
    }
    for (let x=0;x<valueArr.length;x++){
        acc = callback(acc,valueArr[x],valueArr)
    }
    return acc;
}

function myFind(collection,predicate){
    let valueArr=valueObj(collection)
    for(let x=0;x<valueArr.length;x++){
        if (predicate(valueArr[x])===true) return valueArr[x]
    }   
    return undefined;
}

function myFilter(collection,predicate){
    let valueArr = valueObj(collection)
    let newArr=[]
    for(let x=0;x<valueArr.length;x++){
        if(predicate(valueArr[x])) newArr.push(valueArr[x])
    }
    return newArr;
}

function mySize(collection){
    let valueArr = valueObj(collection)
    return valueArr.length;
}
function myFirst(array,n){
    let answer = n ? array.slice(0,n):array[0]
    return answer;
}
function myLast(array,n){
    let  last= array.length
    let answer = n? array.slice(last-n):array[last-1]
    return answer;
}

function myKeys(object){
    let keys=[]
    for (let key in object){
        keys.push(key)
    }
    return keys;
}

function myValues(object){
    let values=[]
    for(let key in object){
        values.push(object[key])
    }
    return values;
}