export default class Kelas{
    constructor(name, students, level, instructor){
        this.name = name;
        this.students = students;
        this.level = level;
        this.instructor = instructor;
    }

    graduate(){
        if(this.students.length == 0 ){
            return this.students;
        }
        let j;
        let participant = [];
        let completed = [];
        let mastered = [];
        for(j=0; j<this.students.length; j++){
            if(this.students[j]._finalScore < 60){
                participant.push(this.students[j]);
            }else if(this.students[j]._finalScore > 85){
                mastered.push(this.students[j]);
            }else{
                completed.push(this.students[j]);
            }
        }
        return {participant, completed, mastered};
    }

}