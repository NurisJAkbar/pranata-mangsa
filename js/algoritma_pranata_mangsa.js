// js/algoritma_pranata_mangsa.js

console.log("algoritma_pranata_mangsa.js loaded - Versi Desta di Mei");

// DATA_PRANATA_MANGSA dan URUTAN_NAMA_MANGSA ada di config_pranata_mangsa.js

// Durasi dari DATA_PRANATA_MANGSA (untuk referensi perhitungan tanggal akhir):
// Kasa:41, Karo:23, Katelu:24, Kapat:25, Kalima:27, Kanem:45 (adj agar total 365),
// Kapitu:41, Kawolu:26, Kasanga:25, Kadasa:24, Desta:23, Sada:41
// Total: 365
const mangsaDurations = [ // Urutan tradisional
    { nama: "Kasa", durasi: 41 }, { nama: "Karo", durasi: 23 }, { nama: "Katelu", durasi: 24 },
    { nama: "Kapat", durasi: 25 }, { nama: "Kalima", durasi: 27 }, { nama: "Kanem", durasi: 45 },
    { nama: "Kapitu", durasi: 41 }, { nama: "Kawolu", durasi: 26 }, { nama: "Kasanga", durasi: 25 },
    { nama: "Kadasa", durasi: 24 }, { nama: "Desta", durasi: 23 }, { nama: "Sada", durasi: 41 }
];

const RENTANG_MANGSA_DESTA_DI_MEI = (function() {
    const hasilRentang = [];
    let tanggalMulaiSaatIni;

    // Cari indeks Desta
    const startIndex = mangsaDurations.findIndex(m => m.nama === "Desta");

    // Tetapkan tanggal mulai Desta
    const tahunReferensiDesta = 2025; // Tahun referensi untuk memulai perhitungan siklus
    tanggalMulaiSaatIni = new Date(tahunReferensiDesta, 4, 26); // 26 Mei (bulan ke-4 di JS)

    // Bangun rentang dari Desta hingga akhir siklus, lalu dari awal siklus hingga sebelum Desta
    for (let i = 0; i < mangsaDurations.length; i++) {
        const mangsaLoopIndex = (startIndex + i) % mangsaDurations.length;
        const mangsa = mangsaDurations[mangsaLoopIndex];

        let durasiMangsaIni = mangsa.durasi;

        // Penyesuaian durasi untuk kabisat jika mangsa ini adalah yang seharusnya bertambah
        // dan TAHUN SAAT MANGSA ITU JATUH adalah kabisat.
        // Ini perlu dihitung dengan hati-hati karena siklusnya bergeser.
        // Kita perlu tahu tahun aktual `tanggalMulaiSaatIni` untuk cek kabisat.
        if (mangsa.nama === "Kawolu" && isTahunKabisat(tanggalMulaiSaatIni.getFullYear())) {
            // Jika mangsa yang sedang dihitung adalah Kawolu DAN tahun mulainya Kawolu adalah kabisat
            durasiMangsaIni = 27;
        } else if (mangsa.nama === "Kawolu" && !isTahunKabisat(tanggalMulaiSaatIni.getFullYear())) {
            durasiMangsaIni = 26; // Pastikan kembali ke 26 jika bukan kabisat
        }


        const tanggalAkhirSaatIni = new Date(tanggalMulaiSaatIni);
        tanggalAkhirSaatIni.setDate(tanggalAkhirSaatIni.getDate() + durasiMangsaIni - 1);

        // Simpan hasil sesuai urutan tradisional (Kasa, Karo, ..., Sada)
        const originalIndex = mangsaDurations.findIndex(m => m.nama === mangsa.nama);
        hasilRentang[originalIndex] = {
            nama: mangsa.nama,
            mulai: { hari: tanggalMulaiSaatIni.getDate(), bulan: tanggalMulaiSaatIni.getMonth() },
            akhir: { hari: tanggalAkhirSaatIni.getDate(), bulan: tanggalAkhirSaatIni.getMonth() },
            // Simpan juga tahun referensi saat rentang ini dibangun untuk debugging
            tahunMulaiRef: tanggalMulaiSaatIni.getFullYear(),
            tahunAkhirRef: tanggalAkhirSaatIni.getFullYear()
        };

        tanggalMulaiSaatIni = new Date(tanggalAkhirSaatIni);
        tanggalMulaiSaatIni.setDate(tanggalMulaiSaatIni.getDate() + 1);
    }
    console.log("RENTANG_MANGSA_DESTA_DI_MEI (Desta mulai 26 Mei):", hasilRentang);
    return hasilRentang;
})();


/**
 * Mengecek apakah suatu tahun adalah tahun kabisat.
 * @param {number} tahun
 * @returns {boolean}
 */
function isTahunKabisat(tahun) {
    return (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
}

/**
 * Menentukan Pranata Mangsa berdasarkan tanggal Masehi.
 * @param {Date} tanggalInputObjek - Objek Date JavaScript dari tanggal Masehi.
 * @returns {object|null} Objek berisi nama mangsa dan detailnya, atau null jika error.
 */
function getPranataMangsa(tanggalInputObjek) {
    console.log("Fungsi getPranataMangsa (Desta di Mei) dipanggil dengan tanggal:", tanggalInputObjek.toDateString());

    if (!(tanggalInputObjek instanceof Date) || isNaN(tanggalInputObjek.getTime())) {
        console.error("Input tanggal tidak valid untuk getPranataMangsa");
        return null;
    }

    const tahunInput = tanggalInputObjek.getFullYear();
    const bulanInput = tanggalInputObjek.getMonth();

    let mangsaDitemukan = null;

    for (const mangsa of RENTANG_MANGSA_DESTA_DI_MEI) {
        // Ambil tahun referensi dari rentang yang sudah di-generate
        // Ini penting karena siklus bisa jadi tidak pas dengan tahun Masehi jika patokannya spesifik
        let tahunMulaiUntukMangsaIni = mangsa.tahunMulaiRef;
        let tahunAkhirUntukMangsaIni = mangsa.tahunAkhirRef;

        // Sesuaikan tahunMulai dan tahunAkhir berdasarkan tahunInput
        // Jika tahunInput berbeda dari tahunReferensi saat generate rentang
        const selisihTahun = tahunInput - mangsa.tahunMulaiRef; // Bisa juga dari tahunAkhirRef jika melintas
                                                            // Untuk Desta di Mei, tahunMulaiRef dan tahunAkhirRef akan sama
                                                            // kecuali untuk mangsa yang melintasi Des-Jan dalam siklus itu.

        tahunMulaiUntukMangsaIni += selisihTahun;
        tahunAkhirUntukMangsaIni += selisihTahun;

        // Penanganan khusus jika definisi mangsa di RENTANG melintasi Des-Jan
        // (misalnya jika Kanem berakhir di Januari pada siklus yang dibangun)
        if (mangsa.mulai.bulan > mangsa.akhir.bulan) { // Mangsa melintasi Des-Jan
            // Jika bulan input ada di awal tahun (misal Jan) dan mangsa ini mulai Des tahun lalu
            if (bulanInput < mangsa.mulai.bulan) {
                // tahunMulaiUntukMangsaIni sudah benar (tahunInput - 1 jika selisihTahun = 0)
                // tahunAkhirUntukMangsaIni sudah benar (tahunInput jika selisihTahun = 0)
            } else { // Jika bulan input ada di akhir tahun (misal Des)
                // tahunMulaiUntukMangsaIni sudah benar (tahunInput jika selisihTahun = 0)
                // tahunAkhirUntukMangsaIni perlu jadi tahunInput + 1 jika selisihTahun = 0
                // Logika selisihTahun di atas seharusnya sudah menangani ini secara implisit
                // jika tahunReferensi saat generate adalah tahun yang sama dengan tahunInput.
                // Perlu dipastikan jika tahunInput sangat berbeda.
            }
        }


        const tanggalMulaiObj = new Date(tahunMulaiUntukMangsaIni, mangsa.mulai.bulan, mangsa.mulai.hari);
        let tanggalAkhirObj = new Date(tahunAkhirUntukMangsaIni, mangsa.akhir.bulan, mangsa.akhir.hari);

        // Penyesuaian akhir untuk mangsa yang durasinya berubah di tahun kabisat
        // Kita perlu tahu mangsa mana yang secara tradisional durasinya berubah (biasanya Kawolu)
        const defMangsaIni = mangsaDurations.find(m => m.nama === mangsa.nama);
        if (defMangsaIni && defMangsaIni.nama === "Kawolu" && isTahunKabisat(tahunMulaiUntukMangsaIni)) {
            // Jika ini Kawolu dan tahun mulainya adalah kabisat, durasinya jadi 27
            // Maka tanggal akhirnya perlu dihitung ulang dari tanggal mulai + 26 hari (karena durasi 27)
            // Ini hanya jika RENTANG_MANGSA_DESTA_DI_MEI dibangun dengan durasi non-kabisat untuk Kawolu.
            // IIFE di atas sudah mencoba menangani ini saat generate.
            // Cek ulang:
            if (isTahunKabisat(tahunMulaiUntukMangsaIni) && tanggalAkhirObj.getMonth() === mangsa.akhir.bulan && tanggalAkhirObj.getDate() === mangsa.akhir.hari) {
                 // Jika durasi Kawolu di mangsaDurations adalah 26
                if (defMangsaIni.durasi === 26) {
                    const tempAkhirKabisat = new Date(tanggalMulaiObj);
                    tempAkhirKabisat.setDate(tempAkhirKabisat.getDate() + 27 - 1);
                    tanggalAkhirObj = tempAkhirKabisat;
                     console.log(`Penyesuaian kabisat untuk ${mangsa.nama} di ${tahunMulaiUntukMangsaIni}, akhir menjadi: ${tanggalAkhirObj.toDateString()}`);
                }
            }
        }


        tanggalMulaiObj.setHours(0, 0, 0, 0);
        tanggalAkhirObj.setHours(23, 59, 59, 999);

        const tanggalInputUntukPerbandingan = new Date(tanggalInputObjek.getTime());
        tanggalInputUntukPerbandingan.setHours(12, 0, 0, 0);

        if (tanggalInputUntukPerbandingan >= tanggalMulaiObj && tanggalInputUntukPerbandingan <= tanggalAkhirObj) {
            mangsaDitemukan = mangsa.nama;
            console.log(`>>> Mangsa ditemukan: ${mangsaDitemukan} untuk tanggal ${tanggalInputObjek.toDateString()}`);
            break;
        }
    }

    if (mangsaDitemukan) {
        if (typeof DATA_PRANATA_MANGSA === 'undefined' || !DATA_PRANATA_MANGSA[mangsaDitemukan]) {
            console.error("DATA_PRANATA_MANGSA tidak terdefinisi atau tidak ada data untuk mangsa:", mangsaDitemukan);
            return { /* ... objek default error ... */ };
        }
        const detailMangsa = DATA_PRANATA_MANGSA[mangsaDitemukan];
        const tahunSaka = tanggalInputObjek.getFullYear() - 78;

        let durasiHariTampil = mangsaDurations.find(m => m.nama === mangsaDitemukan)?.durasi || detailMangsa.durasi_hari;
        if (mangsaDitemukan === "Kawolu" && isTahunKabisat(tahunInput)) {
            // Cek apakah tahunInput adalah tahun di mana Kawolu jatuh dalam siklus baru ini
            const kawoluDefRentang = RENTANG_MANGSA_DESTA_DI_MEI.find(m => m.nama === "Kawolu");
            if (kawoluDefRentang) {
                // Tentukan tahun aktual Kawolu jatuh relatif terhadap tahunInput
                let tahunKawoluJatuh = tahunInput;
                if (kawoluDefRentang.mulai.bulan > kawoluDefRentang.akhir.bulan) { // Jika Kawolu melintasi Des-Jan
                    if (bulanInput < kawoluDefRentang.mulai.bulan) tahunKawoluJatuh = tahunInput -1;
                    // else tahunKawoluJatuh tetap tahunInput (jika mulai Des), atau tahunInput+1 (jika akhir Jan)
                } else { // Jika Kawolu tidak melintasi Des-Jan
                    // Jika bulan mulai Kawolu lebih besar dari bulan input, Kawolu di tahun lalu
                    // Ini perlu logika yang lebih presisi untuk menentukan tahun aktual Kawolu jatuh
                    // Untuk sekarang, kita asumsikan jika tahunInput kabisat dan mangsanya Kawolu, durasinya 27
                }
                 if (isTahunKabisat(tahunInput)) { // Penyederhanaan: jika tahun input kabisat, Kawolu 27 hari
                    durasiHariTampil = 27;
                 }
            }
        }


        return {
            nama: mangsaDitemukan,
            ...detailMangsa,
            durasi_hari: durasiHariTampil,
            tahunSaka: tahunSaka
        };
    }

    console.warn("Tidak dapat menentukan Pranata Mangsa untuk tanggal:", tanggalInputObjek.toDateString());
    return {
        nama: "Tidak Terdefinisi",
        catatan: "Tanggal di luar rentang Pranata Mangsa yang didefinisikan (Desta di Mei).",
        tahunSaka: tanggalInputObjek.getFullYear() - 78
    };
}

console.log("getPranataMangsa function (Desta di Mei) defined:", typeof getPranataMangsa);