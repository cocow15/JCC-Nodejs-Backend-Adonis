import fs from 'fs';

const path = 'data.json'
export const readData = ()=> {
    fs.readFile(path, (err, data)=>{
        if (err) console.log(err)
        console.log(JSON.parse(data));
    });
}

export const writeData = (newData) => {
    fs.readFile(path, (err,data) =>{
        if (err) console.error(err)
        let dataArr = JSON.parse(data)
        dataArr.push(newData)
        fs.writeFile(path, JSON.stringify(dataArr), {encoding: 'utf-8'}, (err) =>{
            if (err) console.log(err)
        })
    })
}
