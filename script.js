//Data Gejala
const symptoms = [
    { kode: 'G01', gejala: 'Bercak kemerahan pada kulit' },
    { kode: 'G02', gejala: 'Adanya plaque (lesi kulit yang permukaannya meninggi dan atasnya rata)' },
    { kode: 'G03', gejala: 'Komputer sering restart sendiri' },
    { kode: 'G04', gejala: 'Adanya papula kecil seukuran kepala jarum' },
    { kode: 'G05', gejala: 'Papula tumbuh menonjol' },
    { kode: 'G06', gejala: 'Permukaan kulit menjadi lebih gelap dan hiperkeratosis' },
    { kode: 'G07', gejala: 'Demam' },
    { kode: 'G08', gejala: 'Nyeri perut' },
    { kode: 'G09', gejala: 'Lemas' },
    { kode: 'G10', gejala: 'Perasaan tidak enak dengan vesikel pada kulit' },
    { kode: 'G11', gejala: 'Nafsu makan hilang' },
    { kode: 'G12', gejala: 'Gatal' },
    { kode: 'G13', gejala: 'Tanda kemerahan pada kulit' },
    { kode: 'G14', gejala: 'Kulit terasa kering' },
    { kode: 'G15', gejala: 'Kulit menebal' },
    { kode: 'G16', gejala: 'Kulit keropeng' },
    { kode: 'G17', gejala: 'Adanya makula hipopigmentasi pada kulit yang asimtomatik' },
    { kode: 'G18', gejala: 'Timbulnya bercak-bercak halus berwarna putih di kulit' },
    { kode: 'G19', gejala: 'Kulit terlihat bintik-bintik melebar, putih dan licin' },
    { kode: 'G20', gejala: 'Menggigil' },
    { kode: 'G21', gejala: 'Sesak nafas' },
    { kode: 'G22', gejala: 'Nyeri dipersendian atau pegal di satu bagian tubuh' },
    { kode: 'G23', gejala: 'Munculnya bintik kemerahan pada kulit yang akhirnya membentuk sebuah gelembung cair' },
    { kode: 'G24', gejala: 'Terdapat lesi kulit yang menyerupai kusta tuberkuloid namun jumlahnya lebih banyak dan tak beraturan' },
    { kode: 'G25', gejala: 'Bagian yang besar dapat mengganggu seluruh tungkai, dan gangguan saraf tepi dengan kelemahan dan kehilangan rasa rangsang' },
    { kode: 'G26', gejala: 'Satu atau lebih hipopigmentasi makula kulit dan bagian yang tidak berasa (anestetik)' },
    { kode: 'G27', gejala: 'Lesi, nodul, plak kulit simetris, dermis kulit yang menipis' },
    { kode: 'G28', gejala: 'Ditemukannya plak-plak (noda-noda) yang mudah dibersihkan yang didapati pada dinding bagian dalam mulut, langitlangit, dan kerongkongan' },
    { kode: 'G29', gejala: 'Kulit mengalami retak-retak dan nyeri pada kulit di sudut mulut (angular cheilitis)' },
    { kode: 'G30', gejala: 'Menebalnya kuku dan bahkan dapat tanggal sendiri' },
    { kode: 'G31', gejala: 'Rambut rontok disekitar telinga' },
    { kode: 'G32', gejala: 'Rasa gatal disekitar telinga' },
    { kode: 'G33', gejala: 'Dipinggiran daun telinga terlihat ada kerak berwarna putih' },
    { kode: 'G34', gejala: 'Penebalan dan keriput pada kulit ditutupi oleh kerak-kerak berwarna abu-abu kekuningan' },
    { kode: 'G35', gejala: 'Kemerahan pada kulit' },
    { kode: 'G36', gejala: 'Timbul makula pada kulit dalam 12 jam berikutnya, pada mereka yang kurang sesitif makula akan segera hilang' },
    { kode: 'G37', gejala: 'Edema di sekitar kulit yang terkena' },
    { kode: 'G38', gejala: 'Vesikula kemudian dapat menjadi pustula apabila telah terjadi infeksi bakterial sekunder' }

];

//Data Penyakit
const diagnoses = [
    { kode: 'P01', penyakit: 'Psioriasis' },
    { kode: 'P02', penyakit: 'Veruca' },
    { kode: 'P03', penyakit: 'Varicella' },
    { kode: 'P04', penyakit: 'Eksim' },
    { kode: 'P05', penyakit: 'Vitiligo' },
    { kode: 'P06', penyakit: 'Herpes' },
    { kode: 'P07', penyakit: 'Kusta' },
    { kode: 'P08', penyakit: 'Infeksi Jamur Kandida' },
    { kode: 'P09', penyakit: 'Scabies' }
];

//Aturan (Rules)
const rules = [
    { gejala: ['G01', 'G02', 'G03'], penyakit: ['P01'] }, //rule 1
    { gejala: ['G04', 'G05', 'G06'], penyakit: ['P02'] }, //rule 2
    { gejala: ['G07', 'G08', 'G09', 'G10', 'G11'], penyakit: ['P03'] }, //rule3
    { gejala: ['G12', 'G13', 'G14', 'G15', 'G16'], penyakit: ['P04'] }, //rule 4
    { gejala: ['G17', 'G18', 'G19'], penyakit: ['P05'] }, //rule 5
    { gejala: ['G07', 'G20', 'G21', 'G22', 'G23'], penyakit: ['P06'] }, //rule 6
    { gejala: ['G24', 'G25', 'G26', 'G27'], penyakit: ['P07'] }, //rule 7
    { gejala: ['G28', 'G29', 'G30'], penyakit: ['P08'] }, //rule 8
    { gejala: ['G31', 'G32', 'G33', 'G34'], penyakit: ['P09'] }, //rule 9
    { gejala: ['G01', 'G35', 'G36', 'G37', 'G38'], penyakit: ['P01'] } //rule 10
];


function toggleSection(sectionId) {
    // Mengambil semua elemen dengan kelas 'section'
    const sections = document.querySelectorAll('.section');
    // Menghapus kelas 'show' dari semua elemen 'section'
    sections.forEach(section => {
        section.classList.remove('show');
    });
    // Menambahkan kelas 'show' ke elemen dengan id yang sesuai
    const section = document.getElementById(sectionId);
    section.classList.add('show');

    // Memanggil fungsi tertentu tergantung pada id section yang dipilih
    if (sectionId === 'home') {
        showHomeData(); // Menampilkan Beranda pada halaman utama
    } else if (sectionId === 'symptoms') {
        showSymptoms(); // Menampilkan data gejala pada tabel gejala
    } else if (sectionId === 'diagnoses') {
        showDiagnoses(); // Menampilkan data penyakit pada tabel penyakit
    } else if (sectionId === 'rules') {
        showRules(); // Menampilkan data aturan pada tabel aturan
    } else if (sectionId === 'checkSymptoms') {
        populateSymptomCheckboxes(); // Memuat checkbox gejala pada halaman diagnosis
    } else if (sectionId === 'about') {
        showabout(); // Menampilkan informasi tentang Website
    }
}

// Menampilkan total data gejala, penyakit, dan aturan pada halaman utama
function showHomeData() {
    clearDataSummary();
    const dataSummary = document.getElementById('dataSummary');
    // barisan berikut merupakan total gejala, penyakit, dan aturan
    dataSummary.innerHTML = `
        <div class="summary-box">
            <h3>Total Data Gejala: ${symptoms.length}</h3>
        </div>
        <div class="summary-box">
            <h3>Total Data Penyakit: ${diagnoses.length}</h3>
        </div>
        <div class="summary-box">
            <h3>Total Aturan: ${rules.length}</h3>
        </div>
    `;
}

// Menampilkan data gejala pada tabel gejala
function showSymptoms() {
    clearDataSummary();
    const tableBody = document.getElementById('symptomsTableBody');
    tableBody.innerHTML = '';
    // Menampilkan tabel untuk data gejala
    symptoms.forEach((symptom, index) => {
        const row = `<tr><td>${index + 1}</td><td>${symptom.kode}</td><td>${symptom.gejala}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

// Menampilkan data penyakit pada tabel penyakit
function showDiagnoses() {
    clearDataSummary();
    const tableBody = document.getElementById('diagnosesTableBody');
    tableBody.innerHTML = '';
    // Menampilkan tabel untuk data penyakit
    diagnoses.forEach((diagnose, index) => {
        const row = `<tr><td>${index + 1}</td><td>${diagnose.kode}</td><td>${diagnose.penyakit}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

// Menampilkan data aturan pada tabel aturan
function showRules() {
    clearDataSummary(); // Menghapus konten ringkasan sebelum menambahkan yang baru
    const tableBody = document.getElementById('rulesTableBody');
    tableBody.innerHTML = '';
    // Menampilkan tabel untuk data aturan
    rules.forEach((rule, index) => {
        const gejalaStr = rule.gejala.join(' AND ');
        const penyakitStr = rule.penyakit.join(' OR ');
        const row = `<tr><td>${index + 1}</td><td>IF (${gejalaStr}) THEN (${penyakitStr})</td></tr>`;
        tableBody.innerHTML += row;
    });
}

// Menghapus konten jika pindah ke menu lainnya
function clearDataSummary() {
    const dataSummary = document.getElementById('dataSummary');
    dataSummary.innerHTML = '';
}

// Memuat data gejala pada halaman diagnosis
function populateSymptomCheckboxes() {
    const checkboxesDiv = document.getElementById('checkboxes');
    checkboxesDiv.innerHTML = '';
    // Menampilkan data gejala pada halaman diagnosis
    symptoms.forEach(symptom => {
        const checkbox = `
            <label>
                <input type="checkbox" name="selectedSymptoms" value="${symptom.kode}">
                ${symptom.kode}: ${symptom.gejala}
            </label><br>
        `;
        checkboxesDiv.innerHTML += checkbox;
    });
}

document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mendapatkan gejala yang dipilih dari checkbox
    const selectedSymptoms = Array.from(document.querySelectorAll('#symptomForm input[name="selectedSymptoms"]:checked'))
                                 .map(checkbox => checkbox.value);

    // Jika tidak ada gejala yang dipilih, tampilkan pesan peringatan
    if (selectedSymptoms.length === 0) {
        alert('Tidak ada gejala yang dipilih.');
        return;
    }

    // Menyimpan penyakit yang sesuai dengan gejala yang dipilih
    const matchedDiagnoses = [];
    rules.forEach(rule => {
        if (rule.gejala.every(g => selectedSymptoms.includes(g))) {
            rule.penyakit.forEach(k => {
                if (!matchedDiagnoses.includes(k)) {
                    matchedDiagnoses.push(k);
                }
            });
        }
    });

    // Menampilkan hasil diagnosis
    displayResult(matchedDiagnoses);
});

// Menampilkan hasil diagnosis pada container hasil
function displayResult(matchedDiagnoses) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    
    // Jika ada diagnosis yang cocok, tampilkan nama penyakitnya
    if (matchedDiagnoses.length > 0) {
        resultContainer.innerHTML = '<h3> Nama penyakit yang mungkin diderita:</h3>';
        matchedDiagnoses.forEach(k => {
            const diagnosis = diagnoses.find(d => d.kode === k);
            if (diagnosis) {
                resultContainer.innerHTML += `<p>${diagnosis.kode}: ${diagnosis.penyakit}</p>`;
            }
        });
    } else {
        // Jika tidak ada yang cocok, beri pesan bahwa tidak ada data yang terkait
        resultContainer.innerHTML = '<p>Tidak ada data yang terkait, silahkan pilih gejala yang lain.</p>';
    }
}

