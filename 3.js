const prompt=require("prompt-sync")({sigint:true}); 
console.log("hello");
let input = prompt("Enter value: ");
for(let i=0;i<input;i++){
    if(i%2==0){
        console.log(i+" is a even number");
    }
    else{
        console.log(i+" is a odd number");
    }
}
