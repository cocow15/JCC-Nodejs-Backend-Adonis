function teriak(){
    return ("Halo Sanbers!");
}

function kalikan(a, b){
    return a*b;
}

function introduce(name, age, address, hobby){
    console.log(`Nama saya ${name}, umur saya ${age} tahun, saya berasal dari ${address}, dan saya punya hobby yaitu ${hobby}!`);
}

module.exports = {
    teriak: teriak,
    kalikan: kalikan,
    introduce: introduce
}