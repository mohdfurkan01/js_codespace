//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is here");
        
    }
    console.log(element);
    
}

for (let i = 0; i <= 5; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <=5; j++) {
     //console.log(`inner loop value of j: ${j} and inner loop value of i: ${i}`);
     console.log(i + ' * ' + j + ' = ' + i*j);
     
        
        
    }
    
}

// break
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break 
    }
    console.log(`value of index is ${index}`);  
    
}

// continue
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue 
    }
    console.log(`value of index is ${index}`);  
    
}