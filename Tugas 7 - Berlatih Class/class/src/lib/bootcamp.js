import Kelas from "./kelas";
export default class bootcamp {
    constructor(name){
        this._name = name;
        this._classes = [];
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get classes(){
        return this._classes;
    }

    set classes(classes){
        this._classes = classes;
    }

    createClass(name, level, instructor){
        let students = [];
        this._classes.push(new Kelas (name, students, level, instructor));
    }
    
    register(nameClass, newStud){
        if(this._classes.length == 0){
            return this._classes;
        }
        let i;
        for(i=0; i<this._classes.length; i++){
            if(this._classes[i].name == nameClass){
                this._classes[i].students.push(newStud);
            }   
        }
    }

    runBatch(){
        if(this._classes.length == 0 ){
            return this._classes;
        }
        let i, j, k;
        for(i=0; i<this._classes.length; i++){
            for(j=0; j<this._classes[i].students.length; j++){
                for(k=0; k<4; k++){
                    this._classes[i].students[j]._scores.push(Math.floor(Math.random() * 50) + 51);
                }
                this._classes[i].students[j]._finalScore = (this._classes[i].students[j]._scores[0] + this._classes[i].students[j]._scores[1] + this._classes[i].students[j]._scores[2] + this._classes[i].students[j]._scores[3])/4;
            }
        }
        for(i=0; i<this._classes.length; i++){
            console.log(`graduated from ${this._classes[i].name}:`);
            console.log(this._classes[i].graduate());
        }
    }
}