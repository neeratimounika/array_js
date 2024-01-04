const red= [1,2,3,4,5,6];
 //add sum  

 const output = red.reduce(function(acc,curr){
    acc = acc+curr;
    return acc; 

 },0);

 console.log(output)