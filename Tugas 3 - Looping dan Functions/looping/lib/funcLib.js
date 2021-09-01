function loopingWhile(){
    var i = 2;
    console.log("LOOPING PERTAMA");
    while(i<21){
        console.log(i +" - I love coding");
        i += 2;
    }

    console.log("LOOPING KEDUA");
    i -= 2;
    while(i>0){
        console.log(i + " - I will become a mobile developer");
        i -= 2;
    }
}

function loopingFor(){
    for(var angka = 1; angka < 21; angka++){
        if(angka%3===0 && angka%2===1){
            console.log(angka + " - I Love Coding");
        }else if(angka%2===1){
            console.log(angka + " - Santai");
        }else{
            console.log(angka + " - Berkualitas");
        }
    }
}

function persegiPanjang(a, b){
    var angka;
    do{
        for(angka=0; angka<a; angka++){
            process.stdout.write("#");
        }
        process.stdout.write("\n");
        b--;
    }while(b>0);
}

function tangga(x){
    var i, j;
    for(i = 1; i <= x; i++){
        for(j = 0; j < i; j++){
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}

function catur(n){
    var temp = n;
    var buff;
    do{
        buff = temp;
        do{
            if(n % 2 == 0){
                if(buff % 2 == 0){
                    process.stdout.write(" "); 
                }else{
                    process.stdout.write("#");
                }
            }else{
                if(buff % 2 == 0){
                    process.stdout.write("#"); 
                }else{
                    process.stdout.write(" ");
                }   
            }
            buff--;
        }while(buff>0);
        n--;
        process.stdout.write("\n");
    }while(n>0);
}

module.exports = {
    loopingWhile: loopingWhile,
    loopingFor: loopingFor,
    persegiPanjang: persegiPanjang,
    tangga: tangga,
    catur: catur
}