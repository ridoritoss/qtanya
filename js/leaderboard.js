let nama = localStorage.getItem('login');
// let randomScore = Math.floor(Math.random() * 3000) + 1;
let finalScore = localStorage.getItem('nilai');
console.log(finalScore);

function popupScore() {
    alert(`Congratulation ${nama}\n Total score kamu adalah ${finalScore}`);
}
popupScore();

function leaderBoard(newNama, newScore, parameter) {
    let cetak = document.querySelector('#leaderboard');
    cetak.innerHTML = '';
    let scores = [];
    for (const { idScore, nama, score } of parameter) {
        scores.push(score);
    }
    scores.push(newScore);

    scores.sort(function (a, b) { return b - a });
    let urutan = 0;
    let id = 0;
    for (let i = 0; i < scores.length; i++) {
        const perScore = scores[i];
        let nama = newNama;
        id = scores.length;
        for (let j = 0; j < parameter.length; j++) {
            if (perScore == parameter[j].score) {
                nama = parameter[j].nama;
                urutan = i + 1;
                id = parameter[j].idScore;
            }
        }
        cetak.innerHTML += `
            <tr id="${id}">
                <td>${nama}</td>
                <td>${perScore}</td>
                <td><button onClick="deleteButton()">Delete</button></td>
                </tr>
                `
        // <td onclick=""></td>
    }
}
leaderBoard(nama, finalScore, score);

function deleteButton() {
    localStorage.removeItem('nilai') 
    location.reload()   
}