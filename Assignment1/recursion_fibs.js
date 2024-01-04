function fibsRec(n){
    if(n===1){return [0];}
    else if(n===2){return [0,1];}
    else{
        let arr = fibsRec(n-1);
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        return arr;
    }
}

console.log(fibsRec(8));