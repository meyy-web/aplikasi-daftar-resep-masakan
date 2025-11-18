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
