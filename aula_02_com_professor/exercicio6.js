for(let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FIZZBUZZ');
    }
    else if(i % 3 == 0){
        console.log('FiZZ');
    }
    else if(i % 5 ==0){
        console.log('BuZZ');
    } else{
        console.log(i);
    }
}



