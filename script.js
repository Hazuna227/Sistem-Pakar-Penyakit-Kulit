//Data Gejala
const symptoms = [
    { kode: 'G01', gejala: 'Bercak kemerahan pada kulit' },
    { kode: 'G02', gejala: 'Adanya plaque (lesi kulit yang permukaannya meninggi dan atasnya rata)' },
    { kode: 'G03', gejala: 'Timbul gejala koebner phemenon' },
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
    { kode: 'P09', penyakit: 'Scabies' },
    { kode: 'P10', penyakit: 'Serkarial Dermatitis' }
];

//Aturan (Rules)
// Inisialisasi aturan (Rules)
const rules = [
    { gejala: ['G01'], penyakit:'Psioriasis', persen: '20%'},
    { gejala: ['G02'], penyakit: 'Psioriasis', persen: '20%'},
    { gejala: ['G03'], penyakit: 'Psioriasis', persen: '20%'},
    { gejala: ['G01', 'G02'], penyakit: 'Psioriasis', persen: '20%'},
    { gejala: ['G02', 'G03'], penyakit: 'Psioriasis', persen: '20%'},
    { gejala: ['G01', 'G03'], penyakit: 'Psioriasis', persen: '20%'},
    { gejala: ['G01', 'G02', 'G03'], penyakit: 'Psioriasis', persen: '20%'},
 
    { gejala: ['G04'], penyakit: 'Veruca', persen: '25%'},
    { gejala: ['G05'], penyakit: 'Veruca', persen: '25%'},
    { gejala: ['G06'], penyakit: 'Veruca', persen: '25%'},
    { gejala: ['G04', 'G05'], penyakit: 'Veruca', persen: '25%'},
    { gejala: ['G05', 'G06'], penyakit: 'Veruca', persen: '25%'},
    { gejala: ['G04', 'G06'], penyakit: 'Veruca', persen: '25%'},
    { gejala: ['G04', 'G05', 'G06'], penyakit: 'Veruca', persen: '25%'},

    { gejala: ['G07'], penyakit: 'Varicella', persen: '20%'},
    { gejala: ['G10'], penyakit: 'Varicella', persen: '20%'},
    { gejala: ['G11'], penyakit: 'Varicella', persen: '20%'},
    { gejala: ['G07', 'G10'], penyakit: 'Varicella', persen: '20%'},
    { gejala: ['G10', 'G11'], penyakit: 'Varicella', persen: '20%'},
    { gejala: ['G07', 'G11'], penyakit: 'Varicella', persen: '20%'},
    { gejala: ['G07', 'G10', 'G11'], penyakit: 'Varicella', persen: '20%'},

    { gejala: ['G12'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G13'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G14'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G15'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G16'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G12', 'G13'], penyakit: 'Eksim', persen: '25%'},
    { gejala: ['G13', 'G14'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G14', 'G15'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G15', 'G16'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G12', 'G14'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G13', 'G15'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G12', 'G13', 'G14'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G13', 'G14', 'G15'], penyakit: 'Eksim', persen: '15%'},
    { gejala: ['G14', 'G15', 'G16'], penyakit: 'Eksim', persen: '15%'},

    { gejala: ['G17'], penyakit: 'Vitiligo', persen: '25%'},
    { gejala: ['G18'], penyakit: 'Vitiligo', persen: '25%'},
    { gejala: ['G19'], penyakit: 'Vitiligo', persen: '25%'},
    { gejala: ['G17', 'G18'], penyakit: 'Vitiligo', persen: '25%'},
    { gejala: ['G18', 'G19'], penyakit: 'Vitiligo', persen: '25%'},
    { gejala: ['G17', 'G19'], penyakit: 'Vitiligo', persen: '25%'},
    { gejala: ['G17', 'G18', 'G19'], penyakit: 'Vitiligo', persen: '25%'},

    { gejala: ['G07'], penyakit: 'Herpes', persen: '20%'}, 
    { gejala: ['G22'], penyakit: 'Herpes', persen: '20%'},
    { gejala: ['G23'], penyakit: 'Herpes', persen: '20%'},
    { gejala: ['G07', 'G22'], penyakit: 'Herpes', persen: '20%'},
    { gejala: ['G22', 'G23'], penyakit: 'Herpes', persen: '20%'},
    { gejala: ['G07', 'G23'], penyakit: 'Herpes', persen: '20%'},
    { gejala: ['G07', 'G22', 'G23'], penyakit: 'Herpes', persen: '20%'},

    { gejala: ['G24'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G25'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G26'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G27'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G24', 'G25'], penyakit: 'Kusta', persen: '20%'},
    { gejala: ['G26', 'G27'], penyakit: 'Kusta', persen: '20%'},
    { gejala: ['G24', 'G26'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G25', 'G27'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G24', 'G27'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G25', 'G26'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G24', 'G25', 'G26'], penyakit: 'Kusta', persen: '15%'},
    { gejala: ['G25', 'G26', 'G27'], penyakit: 'Kusta', persen: '15%'},


    { gejala: ['G28'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},
    { gejala: ['G29'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},
    { gejala: ['G30'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},
    { gejala: ['G28', 'G29'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},
    { gejala: ['G29', 'G30'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},
    { gejala: ['G28', 'G30'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},
    { gejala: ['G28', 'G29', 'G30'], penyakit: 'Infeksi Jamur Kandida', persen: '20%'},


    { gejala: ['G31'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G32'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G33'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G34'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G32', 'G33'], penyakit: 'Scabies', persen: '20%'},
    { gejala: ['G33', 'G34'], penyakit: 'Scabies', persen: '20%'},
    { gejala: ['G31', 'G32'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G31', 'G33'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G31', 'G34'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G32', 'G34'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G31', 'G32', 'G33'], penyakit: 'Scabies', persen: '15%'},
    { gejala: ['G32', 'G33', 'G34'], penyakit: 'Scabies', persen: '15%'},


    { gejala: ['G35'], penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G36'], penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G37'], penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G38'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G35', 'G36'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G36', 'G37'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G37', 'G38'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G35', 'G37'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G35', 'G38'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G36', 'G38'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G35', 'G36', 'G37'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
    { gejala: ['G36', 'G37', 'G38'],  penyakit: 'Serkarial Dermatitis', persen: '20%'},
];

// Solusi untuk setiap penyakit
const solutions = {
    'Psioriasis': ['Gunakan pelembab secara teratur', 'Hindari faktor pemicu seperti stres dan cuaca ekstrem', 'Gunakan krim kortikosteroid topikal sesuai resep dokter', 'Pertimbangkan fototerapi di bawah pengawasan medis', 'Jaga pola makan sehat dan hindari alkohol'],
    'Veruca': ['Gunakan obat-obatan over-the-counter yang mengandung asam salisilat', 'Cryotherapy (pembekuan) oleh dokter', 'Hindari berbagi barang pribadi seperti handuk', 'Jaga kebersihan kaki dan tangan', 'Gunakan alas kaki di area umum yang lembab'],
    'Varicella': ['Istirahat yang cukup','Gunakan lotion calamine untuk mengurangi gatal','Minum banyak cairan','Gunakan pakaian longgar dan lembut','Konsumsi obat antihistamin sesuai anjuran dokter untuk mengurangi gatal'],
    'Eksim': ['Gunakan pelembab hipoalergenik secara teratur','Hindari bahan iritan dan alergen','Gunakan sabun lembut dan air hangat saat mandi','Aplikasikan krim kortikosteroid sesuai resep dokter','Jaga suhu dan kelembaban ruangan'],
    'Vitiligo': ['Gunakan tabir surya dengan SPF tinggi','Pertimbangkan terapi repigmentasi seperti fototerapi','Konsultasikan tentang krim imunomodulator dengan dokter','Pertimbangkan makeup kamuflase medis','Bergabung dengan grup dukungan untuk dukungan emosional'],
    'Herpes': ['Gunakan obat antivirus oral atau topikal sesuai resep','Hindari menyentuh atau menggaruk lesi','Jaga kebersihan area yang terkena','Hindari pemicu seperti stres atau paparan sinar matahari berlebih','Gunakan kompres dingin untuk meredakan gejala'],
    'Kusta': ['Ikuti rejimen antibiotik yang diresepkan dokter','Pemeriksaan rutin untuk memantau perkembangan penyakit','Perawatan luka dan pencegahan cedera pada area yang mati rasa','Terapi fisik dan okupasi jika diperlukan','Dukungan psikososial'],
    'Infeksi Jamur Kandida': ['Gunakan obat antijamur topikal atau oral sesuai resep','Jaga area yang terkena tetap kering dan bersih','Gunakan pakaian longgar dan bahan yang menyerap keringat','Hindari makanan tinggi gula dan ragi','Pertimbangkan probiotik untuk menjaga keseimbangan mikrobioma'],
    'Scabies': ['Gunakan lotion atau krim permethrin sesuai resep','Cuci semua pakaian, sprei, dan handuk dengan air panas','Isolasi barang-barang yang tidak bisa dicuci dalam kantong plastik selama beberapa hari','Beritahu kontak dekat untuk mendapatkan pengobatan juga','Hindari kontak kulit langsung dengan orang lain sampai pengobatan selesai'],
    'Serkarial Dermatitis': ['Hindari berenang di air yang tercemar parasit', 'Gunakan krim kortikosteroid topikal untuk mengurangi peradangan','Aplikasikan kompres dingin untuk meredakan gatal','Gunakan antihistamin oral untuk mengurangi gatal','Jaga kebersihan kulit dan gunakan sabun antibakteri ringan'],

};

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
    const tableBody = document.getElementById('rulesTableBody');
    tableBody.innerHTML = '';
    
    // Menampilkan tabel untuk data aturan
    rules.forEach((rule, index) => {
        const gejalaStr = rule.gejala.join(' AND ');
        const penyakitStr = rule.penyakit;
        const persenStr = rule.persen;
        const solusiList = solutions[rule.penyakit] || [];
        const solusiStr = solusiList.map(solusi => `<li>${solusi}</li>`).join('');
        const row = `<tr><td>${index + 1}</td><td>IF (${gejalaStr}) THEN (${penyakitStr})</td><td>${persenStr}</td><td><ul>${solusiStr}</ul></td></tr>`;
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

    // Menyimpan informasi diagnosa yang sesuai dengan gejala yang dipilih
    const matchedDiagnoses = {};
    rules.forEach(rule => {
        if (rule.gejala.every(g => selectedSymptoms.includes(g))) {
            if (!matchedDiagnoses[rule.penyakit]) {
                matchedDiagnoses[rule.penyakit] = {
                    penyakit: rule.penyakit,
                    persen: rule.persen,
                    solusi: solutions[rule.penyakit]
                };
            }
        }
    });

    // Menampilkan hasil diagnosa
    displayResult(Object.values(matchedDiagnoses));
});

// Menampilkan hasil diagnosa pada container hasil
function displayResult(matchedDiagnoses) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    
    // Jika ada diagnosa yang cocok, tampilkan informasi penyakit, persen, dan solusi
    if (matchedDiagnoses.length > 0) {
        resultContainer.innerHTML = '<h3> Hasil Diagnosa:</h3>';
        matchedDiagnoses.forEach(diagnosa => {
            resultContainer.innerHTML += `
                <div>
                    <p>Nama Penyakit: ${diagnosa.penyakit}</p>
                    <p>Persen Kepastian: ${diagnosa.persen}</p>
                    <ul>Solusi:
                        ${diagnosa.solusi.map(solusi => `<li>${solusi}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    } else {
        // Jika tidak ada yang cocok, beri pesan bahwa tidak ada data yang terkait
        resultContainer.innerHTML = '<p>Tidak ada data yang terkait, silahkan pilih gejala yang lain.</p>';
    }
}



