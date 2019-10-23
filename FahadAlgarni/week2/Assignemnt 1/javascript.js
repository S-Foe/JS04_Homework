let x=100
while(x>0){
    let j=x-1;
    if(x>1 && x<101)
        console.log(`${x} bottles of beer on the wall,${x} bottles of beer.\nTake one down and pass it around,${j} bottles of beer on the wall.\n`)
    else
        console.log(`${x} bottles of beer on the wall,${x} bottles of beer.\nTake one down and pass it around,no more bottles of beer on the wall.\n`)
    x--;
    
}
console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.\n")