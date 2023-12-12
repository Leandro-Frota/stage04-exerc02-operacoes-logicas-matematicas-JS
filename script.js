let listStudent = [
    {
        name: "José",
        note1: 8,
        note2: 7,

    },
    {
        name: "Maria",
        note1: 9,
        note2: 8,

    },
    {
        name: "Rafael",
        note1: 6,
        note2: 7,

    },
    {
        name: "João",
        note1: 9,
        note2: 7,

    }
]

function media(note1, note2) {
    mediaFinal = (note1 + note2) / 2;
    console.log(mediaFinal);
    return mediaFinal;
}


function printStudentsMedia(student) {

    media(student.note1, student.note2);

    if (mediaFinal >= 7) {

        alert(`A média do(a) aluno(a) ${student.name} é ${mediaFinal}.\nParabéns ${student.name}! Você foi aprovado no concurso `)

    } else {
        alert(`A média do(a) aluno(a) ${student.name} é ${mediaFinal}.\nNão foi dessa vez, ${student.name}! Tente novamente `)
    }

}

for (let student of listStudent) {
    printStudentsMedia(student);

}


