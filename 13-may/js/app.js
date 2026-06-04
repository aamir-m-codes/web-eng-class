let obj = {
    stud1:{
        name: "Ali",
        f_name: "Ahmad",
        r_no: 12,
    },
    stud2:{
        name: "Umar",
        f_name: "Zain",
        r_no: 15,
    },
    stud3:{
        name: "Usman",
        f_name: "Malik",
        r_no: 17,
        subjects:{
            eng: 45,
            math: 89,
            total: function(eng, math){
                return eng + math;
            }
        }
    }
}

// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj['r_no'])
// console.log(obj.stud3.name)
// console.log(obj.stud3.subjects.math)
console.log(obj.stud3.subjects.total(45, 89))

obj.stud1.name = "Hamza"
console.log(obj.stud1.name)

delete obj.stud2
console.log(obj)