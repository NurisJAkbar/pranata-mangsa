// js/config_pranata_mangsa.js

const URUTAN_NAMA_MANGSA = [
    "Kasa", "Karo", "Katelu", "Kapat", "Kalima", "Kanem",
    "Kapitu", "Kawolu", "Kasanga", "Kadasa", "Desta", "Sada"
];

// Durasi hari harus konsisten dengan yang ada di mangsaDurations di algoritma_pranata_mangsa.js
// (Kasa:41, Karo:23, Katelu:24, Kapat:25, Kalima:27, Kanem:45,
// Kapitu:41, Kawolu:26, Kasanga:25, Kadasa:24, Desta:23, Sada:41)

const DATA_PRANATA_MANGSA = {
    "Desta": { // Mangsa XI - Patokan Mulai 26 Mei (Akhir Mei - Pertengahan Juni)
        nama_panjang: "Desta (Padrawana / Jesta)",
        candrasengkala: "Peksi Anilar Susuh (Burung meninggalkan sarangnya)",
        gambaran_candrasengkala: "Menggambarkan anak burung yang telah dewasa dan mandiri, meninggalkan sarang untuk memulai kehidupannya sendiri. Alam memasuki awal musim kemarau.",
        watak_mangsa: "Awal musim kemarau mulai terasa. Udara semakin panas, tanah mengering. Anak-anak burung yang menetas di mangsa sebelumnya mulai belajar terbang dan mandiri.",
        pengaruh_alam: {
            deskripsi_umum: "Awal musim kemarau dengan peningkatan suhu dan berkurangnya kelembapan.",
            atmosfer: "Suhu udara meningkat, terutama di siang hari. Kelembapan mulai menurun. Angin timur (muson Australia) mulai terasa membawa udara kering. Langit cenderung cerah.",
            hidrologi: "Debit air sungai dan mata air mulai menurun. Tanah permukaan cepat mengering.",
            vegetasi: "Rumput-rumput mulai menguning. Beberapa jenis pohon mulai menunjukkan tanda-tanda kekurangan air.",
            fauna: "Anak-anak burung mulai aktif di luar sarang. Serangga musim kering mulai bermunculan.",
            hujan_pagi: "-", hujan_siang: "-", hujan_sore: "Sangat jarang, mungkin hanya awan tanpa hujan", hujan_malam: "-"
        },
        kegiatan_utama: "Menanam palawija yang tahan kekeringan di lahan tegalan. Mempersiapkan lahan untuk tembakau (di beberapa daerah). Perbaikan saluran irigasi sekunder.",
        tanaman_cocok: "Jagung, kedelai varietas genjah, kacang tanah, awal tanam tembakau.",
        hewan_muncul: "Burung-burung muda, belalang, jangkrik.",
        makna_simbolis: "Masa kemandirian, awal perjuangan menghadapi musim kering, adaptasi.",
        durasi_hari: 23,
    },
    "Sada": { // Mangsa XII - Setelah Desta (Pertengahan Juni - Akhir Juli)
        nama_panjang: "Sada (Asada / Asadha)",
        candrasengkala: "Tirta Mambeg Madyaning Palagan (Air terhenti di tengah medan/lapangan)",
        gambaran_candrasengkala: "Menggambarkan kondisi air yang semakin sulit didapat, seolah terhenti dan tidak mengalir. Puncak musim kemarau mulai terasa dengan udara dingin di malam hari (bediding).",
        watak_mangsa: "Musim kemarau semakin intens. Udara sangat panas di siang hari, namun bisa sangat dingin di malam hingga pagi hari (bediding). Sumber air semakin menipis.",
        pengaruh_alam: {
            deskripsi_umum: "Pertengahan hingga puncak musim kemarau, kontras suhu siang-malam (bediding).",
            atmosfer: "Sangat kering dan panas di siang hari. Malam hari suhu turun drastis (bediding). Angin timur kencang membawa debu. Langit sangat cerah.",
            hidrologi: "Banyak sumber air kecil mengering. Debit sungai sangat rendah. Tanah keras dan berdebu.",
            vegetasi: "Banyak pohon menggugurkan daunnya (meranggas). Rumput kering total. Hanya tanaman sangat tahan kering yang bertahan.",
            fauna: "Hewan kesulitan mencari air. Aktivitas hewan terpusat di pagi/sore hari.",
            hujan_pagi: "-", hujan_siang: "-", hujan_sore: "-", hujan_malam: "-"
        },
        kegiatan_utama: "Menghemat air secara maksimal. Merawat tanaman palawija yang sudah ditanam. Banyak kegiatan sosial (hajatan) karena petani tidak banyak pekerjaan di ladang.",
        tanaman_cocok: "Tembakau, singkong, sorgum, tanaman yang sangat toleran kekeringan.",
        hewan_muncul: "Kalong, burung hantu, serangga malam.",
        makna_simbolis: "Masa keprihatinan air, kesederhanaan, ujian ketahanan.",
        durasi_hari: 41,
    },
    "Kasa": { // Mangsa I - Setelah Sada (Akhir Juli - Awal September)
        nama_panjang: "Kasa (Kartika / Srawana)",
        candrasengkala: "Surya Ngumpet Ing Mega (Matahari bersembunyi di awan [panas terik])",
        gambaran_candrasengkala: "Meskipun kemarau, kadang ada awan tipis di langit yang tidak membawa hujan, matahari tetap terasa menyengat. Daun-daun terakhir berguguran.",
        watak_mangsa: "Puncak musim kemarau. Tanah sangat kering, daun-daun habis berguguran. Angin timur masih kencang. Masa paling sulit air.",
        pengaruh_alam: {
            deskripsi_umum: "Puncak musim kemarau yang paling ekstrem.",
            atmosfer: "Sangat panas, kering, dan berdebu. Angin timur sangat dominan. Kelembapan sangat rendah.",
            hidrologi: "Krisis air di banyak tempat. Sungai-sungai kecil kering total.",
            vegetasi: "Pohon-pohon gundul. Vegetasi rendah mati kekeringan.",
            fauna: "Hewan sangat menderita karena kekurangan air dan pakan.",
            hujan_pagi: "-", hujan_siang: "-", hujan_sore: "-", hujan_malam: "-"
        },
        kegiatan_utama: "Bertahan dengan sisa air. Membakar jerami (jika ada sisa panen sebelumnya). Persiapan lahan paling awal untuk palawija jika ada harapan hujan 'salah mangsa'.",
        tanaman_cocok: "Hanya tanaman yang paling ekstrem tahan kering yang mungkin bertahan.",
        hewan_muncul: "Belalang kayu, semut, kalajengking.",
        makna_simbolis: "Puncak keprihatinan, ujian kesabaran tertinggi, introspeksi mendalam.",
        durasi_hari: 41,
    },
    "Karo": { // Mangsa II - Setelah Kasa (Awal September - Akhir September)
        nama_panjang: "Karo (Pusa / Badra)",
        candrasengkala: "Wiji Tuwuh Ing Siti Kering (Benih tumbuh di tanah kering)",
        gambaran_candrasengkala: "Meskipun tanah masih kering, ada harapan benih (palawija) yang ditanam mulai bertunas, menandakan daya hidup alam.",
        watak_mangsa: "Kemarau masih kuat, namun ada sedikit tanda-tanda kehidupan baru. Tanah mulai sedikit 'bernafas'. Pohon randu/mangga mulai berbunga tipis.",
        pengaruh_alam: {
            deskripsi_umum: "Kemarau kuat namun ada sedikit perubahan di alam.",
            atmosfer: "Masih panas dan kering, tapi mungkin ada sedikit peningkatan kelembapan di akhir mangsa. Angin timur mulai sedikit melemah.",
            hidrologi: "Air masih sangat sulit. Tanah masih merekah.",
            vegetasi: "Beberapa pohon keras mulai menunjukkan tanda akan berbunga. Palawija yang ditanam dengan susah payah mulai tumbuh.",
            fauna: "Hewan masih berjuang, namun ada harapan dengan bakal buah/bunga.",
            hujan_pagi: "-", hujan_siang: "-", hujan_sore: "Sangat jarang, mungkin awan lebih banyak", hujan_malam: "-"
        },
        kegiatan_utama: "Merawat palawija. Persiapan menyambut musim labuh (transisi).",
        tanaman_cocok: "Palawija yang sudah ditanam, perawatan tanaman keras.",
        hewan_muncul: "Tupai mencari bakal buah.",
        makna_simbolis: "Ketabahan, harapan mulai tumbuh kembali.",
        durasi_hari: 23,
    },
    "Katelu": { // Mangsa III - Setelah Karo (Akhir September - Pertengahan Oktober)
        nama_panjang: "Katelu (Manggasri / Asuji)",
        candrasengkala: "Kembang Mekar Ing Wana Gersang (Bunga mekar di hutan/lahan gersang)",
        gambaran_candrasengkala: "Beberapa jenis tanaman (seperti pohon kapuk) mulai berbunga meskipun kondisi masih kering, memberikan keindahan di tengah kegersangan.",
        watak_mangsa: "Udara sangat gerah. Umbi-umbian (jika ditanam sebelumnya dan bertahan) mulai berisi. Pohon kapuk berbunga.",
        pengaruh_alam: {
            deskripsi_umum: "Akhir kemarau, udara sangat gerah, persiapan transisi.",
            atmosfer: "Sangat panas dan gerah. Kelembapan mulai sedikit naik. Angin tidak menentu.",
            hidrologi: "Air masih minim. Tanah sangat kering.",
            vegetasi: "Pohon kapuk berbunga. Umbi-umbian mulai bisa dipanen jika ada.",
            fauna: "Serangga penyerbuk mulai aktif pada bunga kapuk. Kunang-kunang.",
            hujan_pagi: "-", hujan_siang: "-", hujan_sore: "Potensi awan lebih tebal, tapi hujan masih langka", hujan_malam: "Embun mulai terasa."
        },
        kegiatan_utama: "Panen umbi-umbian. Persiapan lahan intensif menyambut hujan.",
        tanaman_cocok: "Kapuk, panen singkong/ubi (jika ada).",
        hewan_muncul: "Kunang-kunang, serangga malam.",
        makna_simbolis: "Penghujung masa sulit, harapan akan perubahan.",
        durasi_hari: 24,
    },
    "Kapat": { // Mangsa IV - Setelah Katelu (Pertengahan Oktober - Awal November)
        nama_panjang: "Kapat (Sitra / Kartika)",
        candrasengkala: "Mega Mendhung Pertanda Warsa (Awan mendung pertanda musim hujan)",
        gambaran_candrasengkala: "Langit mulai sering tertutup awan mendung, memberikan harapan besar akan datangnya musim hujan yang membawa kesegaran.",
        watak_mangsa: "Musim 'labuh' atau pancaroba. Udara tidak menentu. Awan mendung sering terlihat. Burung-burung sibuk membuat sarang. Hujan pertama (salah mangsa) mungkin turun.",
        pengaruh_alam: {
            deskripsi_umum: "Transisi jelas dari kemarau ke hujan.",
            atmosfer: "Langit sering mendung. Angin berubah-ubah. Suhu bervariasi. Kelembapan meningkat.",
            hidrologi: "Tanah menanti hujan. Sumur masih kering.",
            vegetasi: "Pohon kapuk kapasnya beterbangan. Beberapa pohon mulai bertunas tipis.",
            fauna: "Burung aktif bersarang. Laron keluar setelah hujan pertama.",
            hujan_pagi: "Kadang kabut", hujan_siang: "Gerimis singkat/hujan lokal", hujan_sore: "Potensi hujan ringan-sedang sporadis", hujan_malam: "Udara lembap."
        },
        kegiatan_utama: "Menyebar benih padi gaga. Membersihkan saluran air. Berdoa minta hujan.",
        tanaman_cocok: "Benih padi, empon-empon.",
        hewan_muncul: "Laron, burung bersarang.",
        makna_simbolis: "Harapan besar, persiapan, penantian.",
        durasi_hari: 25,
    },
    "Kalima": { // Mangsa V - Setelah Kapat (Awal November - Akhir November)
        nama_panjang: "Kalima (Manggala / Margasira)",
        candrasengkala: "Tirta Mulya Tumrah Ing Bumi (Air mulia turun ke bumi)",
        gambaran_candrasengkala: "Hujan mulai turun secara teratur, menyirami bumi yang haus dan memulai siklus kehidupan baru.",
        watak_mangsa: "Awal musim hujan. Hujan mulai teratur. Pohon-pohon mulai menghijau. Udara sejuk.",
        pengaruh_alam: {
            deskripsi_umum: "Awal musim hujan yang sebenarnya.",
            atmosfer: "Angin barat/barat laut membawa uap air. Hujan teratur. Kelembapan tinggi.",
            hidrologi: "Tanah basah. Sungai mulai terisi.",
            vegetasi: "Daun muda bermunculan (trubus). Rumput menghijau.",
            fauna: "Katak bersuara. Cacing keluar.",
            hujan_pagi: "Gerimis/hujan ringan", hujan_siang: "Kadang hujan sedang", hujan_sore: "Sering hujan sedang-lebat", hujan_malam: "Kadang hujan ringan."
        },
        kegiatan_utama: "Menanam padi sawah (tandur). Menanam sayuran.",
        tanaman_cocok: "Padi sawah, sayuran hijau.",
        hewan_muncul: "Katak, cacing, laron, siput.",
        makna_simbolis: "Kesuburan, pertumbuhan, awal baru.",
        durasi_hari: 27,
    },
    "Kanem": { // Mangsa VI - Setelah Kalima (Akhir November - Pertengahan Januari)
        nama_panjang: "Kanem (Naya / Posya)",
        candrasengkala: "Wohing Pakarti Ngesti Widhi (Buah perbuatan mengharap Tuhan)",
        gambaran_candrasengkala: "Musim buah-buahan melimpah sebagai hasil dari siklus alam, diiringi rasa syukur dan harapan akan berkah lanjutan. Hujan deras.",
        watak_mangsa: "Musim buah-buahan melimpah. Hujan deras. Padi menghijau subur. Banyak ulat.",
        pengaruh_alam: {
            deskripsi_umum: "Musim hujan deras, puncak musim buah.",
            atmosfer: "Kelembapan sangat tinggi. Langit sering mendung tebal. Angin barat kuat.",
            hidrologi: "Sungai meluap, potensi banjir. Tanah jenuh air.",
            vegetasi: "Tanaman subur. Padi tumbuh pesat. Musim buah (durian, manggis, rambutan).",
            fauna: "Ulat, serangga air, ikan berkembang biak.",
            hujan_pagi: "Sering hujan sedang-lebat", hujan_siang: "Hujan lebat, angin", hujan_sore: "Hujan lebat lama, banjir", hujan_malam: "Sering hujan sedang."
        },
        kegiatan_utama: "Merawat padi. Panen buah. Waspada banjir.",
        tanaman_cocok: "Padi, buah-buahan musim hujan.",
        hewan_muncul: "Ulat, nyamuk, ikan, katak.",
        makna_simbolis: "Kelimpahan, kesuburan, kewaspadaan bencana.",
        durasi_hari: 45,
    },
    "Kapitu": { // Mangsa VII - Setelah Kanem (Pertengahan Januari - Akhir Februari)
        nama_panjang: "Kapitu (Palguna / Maga)",
        candrasengkala: "Roganing Awak Kena Ing Lara (Badan sakit terkena penyakit)",
        gambaran_candrasengkala: "Cuaca buruk dengan hujan dan angin membawa banyak penyakit bagi manusia dan tanaman.",
        watak_mangsa: "Puncak musim hujan. Hujan sangat deras, angin kencang. Banyak penyakit. Banjir dan longsor.",
        pengaruh_alam: {
            deskripsi_umum: "Puncak musim hujan, cuaca ekstrem, banyak penyakit.",
            atmosfer: "Hujan intensitas tinggi. Angin kencang, badai. Langit gelap. Suhu dingin.",
            hidrologi: "Banjir, longsor. Sungai di puncak debit.",
            vegetasi: "Padi bunting. Tanaman rentan penyakit.",
            fauna: "Nyamuk, tikus sawah.",
            hujan_pagi: "Hujan lebat, angin", hujan_siang: "Hujan sangat lebat, badai", hujan_sore: "Hujan terus menerus", hujan_malam: "Hujan deras."
        },
        kegiatan_utama: "Menjaga tanaman dari hama/penyakit. Jaga kesehatan. Waspada bencana.",
        tanaman_cocok: "Padi bunting, sayuran dataran tinggi.",
        hewan_muncul: "Nyamuk, lalat, tikus.",
        makna_simbolis: "Ujian alam, ketahanan, kewaspadaan.",
        durasi_hari: 41,
    },
    "Kawolu": { // Mangsa VIII - Setelah Kapitu (Akhir Februari - Pertengahan Maret)
        nama_panjang: "Kawolu (Wisaka / Palguna)",
        candrasengkala: "Jalma Mrana Marga Rahayu (Manusia sakit menuju jalan kesembuhan/kebaikan)",
        gambaran_candrasengkala: "Setelah masa sulit penyakit di Kapitu, alam mulai membaik. Hujan berkurang, padi menguning, ada harapan kesembuhan dan panen.",
        watak_mangsa: "Hujan mulai mereda. Padi menguning. Musim kawin kucing. Uret dan walang sangit muncul.",
        pengaruh_alam: {
            deskripsi_umum: "Hujan berkurang, transisi akhir musim hujan.",
            atmosfer: "Sinar matahari lebih banyak. Angin masih ada. Udara lebih hangat.",
            hidrologi: "Banjir surut. Tanah masih lembap.",
            vegetasi: "Padi menguning. Palawija kedua mulai ditanam.",
            fauna: "Kucing kawin. Burung pemakan padi datang. Hama padi.",
            hujan_pagi: "Kadang hujan ringan", hujan_siang: "Jarang hujan", hujan_sore: "Kadang hujan sedang", hujan_malam: "Jarang."
        },
        kegiatan_utama: "Persiapan panen. Usir hama. Tanam palawija kedua.",
        tanaman_cocok: "Padi siap panen, kedelai, kacang hijau.",
        hewan_muncul: "Kucing, burung pipit, walang sangit, uret.",
        makna_simbolis: "Harapan panen, kewaspadaan hama, siklus reproduksi.",
        durasi_hari: 26, // (27 di tahun kabisat)
    },
    "Kasanga": { // Mangsa IX - Setelah Kawolu (Pertengahan Maret - Awal April)
        nama_panjang: "Kasanga (Jita / Cetra)",
        candrasengkala: "Wong Bungah Olehe Nampa (Orang gembira atas apa yang diterima/panen)",
        gambaran_candrasengkala: "Kegembiraan masyarakat saat panen raya, menerima hasil jerih payah dari sawah.",
        watak_mangsa: "Panen raya padi. Suasana gembira. Suara serangga malam riuh. Musim semi hewan.",
        pengaruh_alam: {
            deskripsi_umum: "Akhir hujan, cuaca cerah, panen raya.",
            atmosfer: "Cerah berawan. Angin sepoi-sepoi. Udara nyaman.",
            hidrologi: "Sawah mengering. Sungai normal.",
            vegetasi: "Padi dipanen. Pohon berbunga lagi.",
            fauna: "Jangkrik, tonggeret, belalang sembah, lebah, kupu-kupu.",
            hujan_pagi: "Sangat jarang", hujan_siang: "Cerah", hujan_sore: "Gerimis sangat ringan", hujan_malam: "Cerah, serangga ramai."
        },
        kegiatan_utama: "Panen padi. Jemur gabah. Syukuran.",
        tanaman_cocok: "Panen padi, buah akhir musim hujan.",
        hewan_muncul: "Jangkrik, tonggeret, belalang sembah.",
        makna_simbolis: "Sukacita, kemakmuran, syukur.",
        durasi_hari: 25,
    },
    "Kadasa": { // Mangsa X - Setelah Kasanga (Awal April - Awal Mei, sebelum Desta 26 Mei)
        nama_panjang: "Kadasa (Srawana / Wesaka)",
        candrasengkala: "Manuk Ngendhog Ing Pucuking Kayu (Burung bertelur di puncak pohon)",
        gambaran_candrasengkala: "Alam dalam fase tenang setelah panen, burung-burung membuat sarang dan bertelur di tempat tinggi, menandakan keamanan dan regenerasi.",
        watak_mangsa: "Masa istirahat petani. Hewan bunting/mengerami. Burung merawat anaknya. Udara mulai panas.",
        pengaruh_alam: {
            deskripsi_umum: "Pancaroba ke kemarau (mareng). Alam tenang.",
            atmosfer: "Udara lebih panas & kering. Angin tak menentu. Hujan jarang.",
            hidrologi: "Tanah bekas panen mengering. Sungai menurun.",
            vegetasi: "Jerami lapuk/dibakar. Buah muda terbentuk.",
            fauna: "Hewan merawat anak. Aktivitas serangga malam berkurang.",
            hujan_pagi: "Jarang, embun tebal", hujan_siang: "Cerah, panas", hujan_sore: "Sangat jarang", hujan_malam: "Cerah, gerah."
        },
        kegiatan_utama: "Simpan hasil panen. Istirahat. Rencana musim tanam. Perbaiki alat.",
        tanaman_cocok: "Sisa panen. Persiapan lahan kering.",
        hewan_muncul: "Anak burung belajar terbang.",
        makna_simbolis: "Istirahat, refleksi, perencanaan, regenerasi.",
        durasi_hari: 24,
    }
};