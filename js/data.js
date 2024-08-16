let soal = [{
    "id": 1,
    "soal": 'Siapa Presiden Indonesia dengan masa jabatan terlama?',
    "option1": 'Jokowi',
    "option": 'Megawati',
    "jawaban": 'Soeharto'
}, {
    "id": 2,
    "soal": 'Kapan Indonesia memproklamasikan kemerdekaannya?',
    "option1": '17 Agustus 2024',
    "option": '17 Agustus 1495',
    "jawaban": '17 Agustus 1945'
}, {
    "id": 3,
    "soal": 'Berapa jumlah bulu pada leher Garuda Pancasila?',
    "option1": '17',
    "option": '8',
    "jawaban": ' 45'
}, {
    "id": 4,
    "soal": 'Apa dasar negara Indonesia?',
    "option1": 'Tigasila',
    "option": 'Limasila',
    "jawaban": 'Pancasila'
}, {
    "id": 5,
    "soal": 'Pada tahun 2024, Indonesia merayakan Hari Kemerdekaan ke berapa?',
    "option1": 'Ke-97 tahun',
    "option": 'Ke-78 tahun',
    "jawaban": ' Ke-79 tahun'
}, {
    "id": 6,
    "soal": 'Apa nama ibu kota Kalimantan Timur?',
    "option1": 'Bontang',
    "option": 'Balikpapan',
    "jawaban": ' Samarinda'
}, {
    "id": 7,
    "soal": 'Siapakah yang menulis naskah teks proklamasi menggunakan tangan? ',
    "option1": 'Soeharto',
    "option": 'Megawati',
    "jawaban": ' Soekarno'
}, {
    "id": 8,
    "soal": 'Selain Soekarno dan Hatta, tokoh lain yang turut menyusun isi teks proklamasi Kemerdekaan Indonesia adalah? ',
    "option1": 'Jokowi',
    "option": 'Gibran',
    "jawaban": ' Achmad Soebardjo'
}, {
    "id": 9,
    "soal": 'Di mana lokasi pembacaan teks proklamasi? ',
    "option1": 'Di Pondok Indah Mall 3',
    "option": 'Di depan gedung HACKTIV8',
    "jawaban": ' Di depan rumah Soekarno, jalan Pegangsaan Timur No. 56, Jakarta.'
}, {
    "id": 10,
    "soal": 'Pada pukul berapa teks proklamasi dibacakan di tanggal 17 Agustus 1945? ',
    "option1": 'Jam 10.30 WIB',
    "option": 'Jam 12.00 WIB',
    "jawaban": ' Jam 10.00 WIB'
}, {
    "id": 11,
    "soal": 'Apa lambang negara Indonesia? ',
    "option1": 'Burung Pipit',
    "option": 'Burung Bangau',
    "jawaban": ' Burung Garuda'
}, {
    "id": 12,
    "soal": 'Siapakah pencipta lagu Indonesia Raya? ',
    "option1": 'W.P Soepratman',
    "option": 'W.Q Soepratman',
    "jawaban": ' W.R Soepratman'
}, {
    "id": 13,
    "soal": 'Bahasa Jepang dari PPKI adalah?',
    "option1": 'Honda Yamaha Suzuki',
    "option": 'Toshiba Sanyo Aqua',
    "jawaban": 'Dokuritsu Junbi Inkai'
}, {
    "id": 14,
    "soal": 'Pada tahun berapa Indonesia resmi merdeka dan mendapatkan pengakuan dari negara-negara lain?',
    "option1": '1945',
    "option": '2020',
    "jawaban": ' 1949'
}, {
    "id": 15,
    "soal": 'Siapa tokoh yang ikut membacakan teks proklamasi selain Soekarno?',
    "option1": 'Gibran RangkasBumi',
    "option": 'Kaesang',
    "jawaban": 'Mohammad Hatta'
}, {
    "id": 16,
    "soal": 'Apa makna dari lambang bendera Merah Putih?',
    "option1": 'Merah warna PDI dan putih karena cat merahnya abis',
    "option": 'Merah Api putih tulang',
    "jawaban": 'Merah melambangkan keberanian dan putih melambangkan kesucian.'
}, {
    "id": 17,
    "soal": 'Apa arti dari burung Garuda pada lambang negara Indonesia?',
    "option1": 'Mau pakai burung pipit ga cocok',
    "option": 'Biar keren aja',
    "jawaban": 'Lambang kekuatan, keperkasaan, dan kemegahan bangsa Indonesia'
}
]

let score = [
    {
        idScore: 1,
        nama: "indah",
        score: 1100
    },
    {
        idScore: 2,
        nama: "bagus",
        score: 2900
    },
    {
        idScore: 3,
        nama: "kelvin",
        score: 999
    },
    {
        idScore: 4,
        nama: "kio",
        score: 2000
    },
    {
        idScore: 5,
        nama: "rido",
        score: 2500
    }
]


// console.log(soal)

const quizContainer = document.getElementById("quiz-container")

let questionShow = document.getElementById('question-show')
// soal.forEach(()=>{
    
    // })
    
let getScore = 0
for(let i=0; i<10; i++){
    let statusJawabanButton = false
    let statusOptionBtn = false
    let statusOptionSatuBtn = false
    let perObj = soal[i]
    let perQuestion = document.getElementById("per_question")
    // console.log(perObj)
    // perQuestion.setAttribute("id", perObj.id)
    let h3 = document.createElement("h3")
    
    h3.innerHTML = perObj.soal
    // console.log(h3.value)

    let buttonAnswer = document.createElement("button")
    buttonAnswer.innerHTML=perObj.jawaban

    let option = document.createElement("button")
    option.innerHTML=perObj.option

    let optionSatu = document.createElement("button")
    optionSatu.innerHTML = perObj.option1

    let pilihan = document.createElement("div")
    pilihan.setAttribute("class", "btn-pilihan")

    if(perObj.id %2 ===0){
        pilihan.append(buttonAnswer, option, optionSatu)
    }else{
        pilihan.append(option, buttonAnswer, optionSatu)
    }
    
    perQuestion.append(h3, pilihan)

    // if(buttonAnswer.setAttribute("onClick", jawab()))

    buttonAnswer.addEventListener("click", (e)=>{
        // e.preventDefault()
        getScore += Math.floor((Math.random()*100))
        // console.log(getScore)
        statusJawabanButton=true

        if(statusJawabanButton===true){
            option.disabled = true
            optionSatu.disabled = true
        }
        
    })

    option.addEventListener("click", (e)=>{
        
        statusOptionBtn = true

        if(statusOptionBtn===true){
            optionSatu.disabled=true
            buttonAnswer.disabled=true
        }
    })

    optionSatu.addEventListener("click", ()=>{
        statusOptionSatuBtn = true

        if(statusOptionSatuBtn===true){
            option.disabled=true
            buttonAnswer.disabled=true
        }
    })

    let submitButton = document.getElementById("submit-btn")
    submitButton.addEventListener("click", (e)=>{
        localStorage.setItem("nilai", getScore)        
    })

}

