function st(par){
    let count=0;
    let vow=['a','A','e','E','i','I','o','O','u','U'];
    for(let i of par){
        if(vow.includes(i)){
            count+=1;
        }
    }
    return count;
}
console.log(st("Sunny"));
