const data = [
    {
        name: "Kovács János",
        age: 29,
        subjects: [
            {
                subjectName: "maths",
                subjectGrade: 5
            },
            {
                subjectName: "physics",
                subjectGrade: 4
            },
            {
                subjectName: "english",
                subjectGrade: 2
            }
        ]
    },
    {
        name: "Csányi Mihály",
        age: 35,
        subjects: [
            {
                subjectName: "maths",
                subjectGrade: 2
            },
            {
                subjectName: "physics",
                subjectGrade: 5
            },
            {
                subjectName: "english",
                subjectGrade: 4
            }
        ]
    },
    {
        name: "Jóska Pista",
        age: 50,
        subjects: [
            {
                subjectName: "maths",
                subjectGrade: 3
            },
            {
                subjectName: "physics",
                subjectGrade: 4
            },
            {
                subjectName: "english",
                subjectGrade: 3
            }
        ]
    }
]

/* for ( let i = 0; i < data.length; i++){
    console.log( data[i].name )
}
 */

/* data.forEach(student => console.log(student.name)) */

data.forEach(student => {
    console.log(student.name)
    student.subjects.forEach(subject => console.log(`${subject.subjectName}: ${subject.subjectGrade}`))
})

//lehetne így is:
data.forEach(e => {
    console.log(e.name)
    e.subjects.forEach(e2 => console.log(`${e2.subjectName}: ${e2.subjectGrade}`))
})


