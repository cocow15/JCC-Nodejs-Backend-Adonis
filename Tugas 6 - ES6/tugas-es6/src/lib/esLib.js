export const sapa = (nama) => {
    console.log(`halo selamat pagi, ${nama}`);
}

export const toObject = (nama, domisili, umur) => {
    const result = {nama, domisili, umur};
    return result;
}

/*
//Cara lama
function tampilkan(arr){
    let i;
    for(i=0; i<arr.length; i++){
        process.stdout.write(arr[i]);
    }
}

const checkScore = (data) => {
    if(data.length === 0){
        return;
    }
    let i, j=0;
    let tempKey = [];
    let tempValue = [];
    let Keys = [];
    let Values = [];
    let temp = [];
    let kondisi = true;
    for(i=0; i<data.length; i++){
        if(data[i]===":"){
            kondisi = false;
            tempKey.push(" ");
            i++; 
        }
        if(kondisi){
            tempKey.push(data[i]); 
        }
        if(data[i]===","){
            kondisi = true;
            tempValue.push(" ");
        }
        if(!kondisi){
            tempValue.push(data[i]);
        }
    }
    
    for(i=0; i<tempKey.length; i++){
        if(tempKey[i]===' ' || i===tempKey.length-1){
            Keys.push(temp);
            temp=[];
            j=0;
        }else{
            temp[j] = tempKey[i];
            j++;
        }
    }
    
    for(i=0; i<tempValue.length; i++){
        if(tempValue[i]===' '|| i===tempValue.length-1){
            if(i===tempValue.length-1){
                temp[j] = tempValue[i];
                j++; 
            }
            Values.push(temp);
            temp=[];
            j=0;
        }else{
            temp[j] = tempValue[i];
            j++;
        }
    }

    process.stdout.write("{");
    for(i=0; i<Keys.length; i++){
        process.stdout.write(` "`); 
        tampilkan(Keys[i]); 
        process.stdout.write(`": "`);
        tampilkan(Values[i]);
        process.stdout.write(`"`); 
        i !== Keys.length-1 ? process.stdout.write(",") : process.stdout.write(" ");
    }
    process.stdout.write("}");
    
    //console.log(tempKey);
    //console.log(tempValue);
    //console.log(Keys);
    //console.log(Values);
}
*/
export const checkScore = (data) => {
    let values = data.split(",");
    let i, value = [];
    for(i=0; i<values.length; i++){
        value.push(values[i].split(":"));
    }
    const result = {};
    for(i=0; i<value.length; i++){
        result[value[i][0]] = value[i][1];
    }
    return result;
}
/*
//Cara lama
const filterData = (data, kelas) => {
    if(kelas.length === 0){
        console.log("Kelas Belum Ditulis");
        return;
    }  
    let i, j = 0, result = [];
    for(i=0; i<data.length; i++){
        if(data[i].class===kelas){
            result[j] = data[i];
            j++;
        }
    }
    return result;
}*/

export const filterData = (data, kelas) => data.filter(nama => nama.class == kelas);

/*
//Cara lama
module.exports = {
    sapa: sapa,
    toObject: toObject,
    checkScore: checkScore,
    filterData: filterData
}*/