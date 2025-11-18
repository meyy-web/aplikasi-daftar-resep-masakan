# aplikasi-daftar-resep-masakan
aplikasi daftar resep masakan favorit
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Resep Masakan Statis</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>📖 Koleksi Resep Masakan</h1>
    </header>

    <main id="resep-container">
        <h2>Memuat Resep...</h2>
    </main>

    <footer>
        <p>&copy; 2025 Aplikasi Resep Statis GitHub</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
}

#resep-container {
    padding: 20px;
    max-width: 900px;
    margin: 20px auto;
}

.resep-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resep-card h3 {
    color: #4CAF50;
    margin-top: 0;
}

.resep-card ul, .resep-card ol {
    padding-left: 20px;
}
// Data Resep Statis
const daftarResep = [
    {
        nama: "Nasi Goreng Sederhana",
        durasi: "20 menit",
        porsi: "2 porsi",
        bahan: [
            "2 piring nasi putih dingin",
            "2 siung bawang putih, cincang",
            "1 butir telur",
            "1 sdm kecap manis",
            "Garam, merica secukupnya",
            "Minyak goreng"
        ],
        langkah: [
            "Panaskan minyak, orak-arik telur, angkat dan sisihkan.",
            "Tumis bawang putih hingga harum.",
            "Masukkan nasi, aduk rata.",
            "Masukkan telur, kecap manis, garam, dan merica. Aduk hingga semua tercampur dan matang.",
            "Sajikan selagi hangat."
        ]
    },
    {
        nama: "Sayur Sop Ayam",
        durasi: "45 menit",
        porsi: "4 porsi",
        bahan: [
            "250g daging ayam, potong dadu",
            "1 buah wortel, potong",
            "1 buah kentang, potong",
            "100g kembang kol",
            "Daun bawang, seledri",
            "Air secukupnya",
            "Bumbu sop instan (opsional)"
        ],
        langkah: [
            "Rebus ayam hingga empuk, buang buihnya.",
            "Masukkan wortel dan kentang, masak hingga agak lunak.",
            "Masukkan kembang kol dan bumbu.",
            "Tambahkan daun bawang dan seledri. Masak sebentar hingga sayuran matang.",
            "Koreksi rasa dan sajikan."
        ]
    }
    // Anda bisa tambahkan lebih banyak resep di sini
];

// Fungsi untuk menampilkan resep ke HTML
function tampilkanResep() {
    const container = document.getElementById('resep-container');
    container.innerHTML = ''; // Kosongkan kontainer

    daftarResep.forEach(resep => {
        // Membuat elemen div untuk setiap resep (kartu resep)
        const resepCard = document.createElement('div');
        resepCard.classList.add('resep-card');

        // Judul Resep
        const judul = document.createElement('h3');
        judul.textContent = resep.nama;
        resepCard.appendChild(judul);

        // Durasi dan Porsi
        const info = document.createElement('p');
        info.innerHTML = `**Durasi:** ${resep.durasi} | **Porsi:** ${resep.porsi}`;
        resepCard.appendChild(info);

        // Daftar Bahan
        const bahanJudul = document.createElement('h4');
        bahanJudul.textContent = "Bahan-bahan:";
        resepCard.appendChild(bahanJudul);

        const bahanList = document.createElement('ul');
        resep.bahan.forEach(bahanItem => {
            const li = document.createElement('li');
            li.textContent = bahanItem;
            bahanList.appendChild(li);
        });
        resepCard.appendChild(bahanList);

        // Langkah-langkah
        const langkahJudul = document.createElement('h4');
        langkahJudul.textContent = "Langkah-langkah:";
        resepCard.appendChild(langkahJudul);

        const langkahList = document.createElement('ol');
        resep.langkah.forEach(langkahItem => {
            const li = document.createElement('li');
            li.textContent = langkahItem;
            langkahList.appendChild(li);
        });
        resepCard.appendChild(langkahList);

        // Masukkan kartu resep ke dalam kontainer utama
        container.appendChild(resepCard);
    });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanResep);
