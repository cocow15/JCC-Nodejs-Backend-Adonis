import fspromise from 'fs/promises'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
const path = 'data.json'
export const login = (param) => {
    fspromise.readFile(path)
        .then(data => {
            let realData = JSON.parse(data)
            let [name, password] = param.split(",")
            let index = realData.findIndex(item => item.name == name)
            if(index !== -1){
                if(realData[index].name == name && realData[index].password == password){
                    realData[index].isLogin = true;
                    console.log("Berhasil Login");
                }else{
                    console.log("Password salah");
                }
            }else{
                console.log("Data tidak ditemukan");
            }
            return fspromise.writeFile(path, JSON.stringify(realData))
        })
        .catch(err => {
            console.log(err)
        })    
}

export const addSiswa = async (param) => {
    try {
        let dataRead = await fspromise.readFile(path)
        let realData = JSON.parse(dataRead)
        let [name, trainerName] = param.split(",")
        let index = realData.findIndex(item => item.name == trainerName)
        if(index !== -1){
            realData[index]["students"] = []
            realData[index].students.push({name})
            console.log("Berhasil add siswa");
        }else{
            console.log("Data tidak ditemukan");
        }
        await fspromise.writeFile(path, JSON.stringify(realData))
    } catch (error) {
        console.log(error);
    }
}