function arr(par){
    let count=0
    for(let i=0;i<par.length;i++){
        if(par[i]%2==0){
            count+=par[i];
        }
    }
    return count;
}
console.log(arr([2,3,4]));