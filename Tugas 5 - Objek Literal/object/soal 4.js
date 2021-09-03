function found(data, inputan){
    let i;
    for(i=0; i<data.length; i++){
        if(data[i]===inputan){
            return true;
        }
    }
    return false;
}

function nilaiTertinggi(siswa) {
    if(siswa.length === 0){
        return siswa;
    }
    let tempKey = [];
    let tempName = [];
    let tempScore = [0, 0 ,0];
    let i, j;
    for(i=0; i<siswa.length; i++){
        if(found(tempKey, siswa[i].class)){

        }else{
            tempKey.push(siswa[i].class);
        }
    }
    for(i=0; i<tempKey.length; i++){
        for(j=0; j<siswa.length; j++){
            if(tempKey[i]===siswa[j].class){
                if(tempScore[i]<siswa[j].score){
                    tempScore[i] = siswa[j].score;
                    tempName[i] = siswa[j].name;
                }
            }
        } 
    }
    
    console.log("{");
    console.log(`   ${tempKey[0]}: { name: '${tempName[0]}', score: ${tempScore[0]} }`);
    console.log(`   ${tempKey[1]}: { name: '${tempName[1]}', score: ${tempScore[1]} }`);
    console.log(`   ${tempKey[2]}: { name: '${tempName[2]}', score: ${tempScore[2]} }`);
    console.log("}");
}
  
// TEST CASE
nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]);
  
  // OUTPUT:
  
  // {
  //   adonis: { name: 'Asep', score: 90 },
  //   vuejs: { name: 'Ahmad', score: 85 },
  //   reactjs: { name: 'Afrida', score: 78}
  // }
  
nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis'
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel'
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis'
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel'
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs'
    }
  ]);
  
  // {
  //   adonis: { name: 'Bondra', score: 100 },
  //   laravel: { name: 'Putri', score: 76 },
  //   vuejs: { name: 'Hilmy', score: 80 }
  // }