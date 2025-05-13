// js/main_pranata_mangsa.js

document.getElementById('cekMangsaButton').addEventListener('click', function() {
    const tanggalMasehiInput = document.getElementById('tanggalMasehi').value;
    const hasilDiv = document.getElementById('hasil');
    const hasilJudulDiv = document.getElementById('hasilJudul');
    const infoMangsaDiv = document.getElementById('infoMangsa');
    const infoSakaDiv = document.getElementById('infoSaka');
    const errorDiv = document.getElementById('error');

    // Reset tampilan
    hasilDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    hasilJudulDiv.innerHTML = '';
    infoMangsaDiv.innerHTML = '';
    infoSakaDiv.innerHTML = '';

    if (!tanggalMasehiInput) {
        errorDiv.textContent = 'Harap pilih tanggal terlebih dahulu.';
        errorDiv.style.display = 'block';
        return;
    }

    const tanggalObjek = new Date(tanggalMasehiInput);
    if (isNaN(tanggalObjek.getTime())) {
        errorDiv.textContent = 'Format tanggal tidak valid.';
        errorDiv.style.display = 'block';
        return;
    }

    console.log("Tombol Cek Mangsa diklik, memanggil getPranataMangsa...");
    const dataMangsa = getPranataMangsa(tanggalObjek);
    console.log("Data Mangsa yang diterima:", dataMangsa ? JSON.parse(JSON.stringify(dataMangsa)) : null);

    if (dataMangsa && dataMangsa.nama && !dataMangsa.nama.includes("Tidak Terdefinisi")) {
        const tanggalMasehiFormatted = tanggalObjek.toLocaleDateString('id-ID', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });
        hasilJudulDiv.textContent = `Pranata Mangsa untuk ${tanggalMasehiFormatted}`;

        let nomorUrutMangsaRomawi = '';
        if (typeof URUTAN_NAMA_MANGSA !== 'undefined' && Array.isArray(URUTAN_NAMA_MANGSA)) {
            const indexMangsa = URUTAN_NAMA_MANGSA.indexOf(dataMangsa.nama);
            if (indexMangsa !== -1) {
                const romawi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
                nomorUrutMangsaRomawi = romawi[indexMangsa];
            } else {
                console.warn(`Nama mangsa "${dataMangsa.nama}" tidak ditemukan di URUTAN_NAMA_MANGSA untuk penomoran.`);
            }
        } else {
            console.warn("URUTAN_NAMA_MANGSA tidak terdefinisi atau bukan array.");
        }

        let pengaruhAlamHTML = 'Tidak ada data pengaruh alam.';
        if (dataMangsa.pengaruh_alam && typeof dataMangsa.pengaruh_alam === 'object') {
            const pa = dataMangsa.pengaruh_alam;
            pengaruhAlamHTML = `
                ${pa.deskripsi_umum ? `<p><em>${pa.deskripsi_umum}</em></p>` : ''}
                ${pa.atmosfer ? `<p><strong>&nbsp;&nbsp;Atmosfer:</strong> ${pa.atmosfer}</p>` : ''}
                ${pa.hidrologi ? `<p><strong>&nbsp;&nbsp;Hidrologi:</strong> ${pa.hidrologi}</p>` : ''}
                ${pa.vegetasi ? `<p><strong>&nbsp;&nbsp;Vegetasi:</strong> ${pa.vegetasi}</p>` : ''}
                ${pa.fauna ? `<p><strong>&nbsp;&nbsp;Fauna:</strong> ${pa.fauna}</p>` : ''}
                <p><strong>&nbsp;&nbsp;Status Hujan:</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pagi: ${pa.hujan_pagi || '-'}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Siang: ${pa.hujan_siang || '-'}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sore: ${pa.hujan_sore || '-'}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malam: ${pa.hujan_malam || '-'}</p>
            `;
        } else if (typeof dataMangsa.pengaruh_alam === 'string') {
            pengaruhAlamHTML = dataMangsa.pengaruh_alam;
        }

        let htmlInfoMangsa = `
            <h3>Mangsa ${nomorUrutMangsaRomawi ? nomorUrutMangsaRomawi + ' - ' : ''}${dataMangsa.nama} (${dataMangsa.nama_panjang || dataMangsa.nama})</h3>
            <p><strong>Durasi Perkiraan:</strong> ${dataMangsa.durasi_hari || 'N/A'} hari</p>
            <p><strong>Candrasengkala/Sasmita:</strong> ${dataMangsa.candrasengkala || 'Tidak ada data'}</p>
            ${dataMangsa.gambaran_candrasengkala ? `<p style="margin-left: 15px;"><em>↳ Gambaran: ${dataMangsa.gambaran_candrasengkala}</em></p>` : ''}
            <p><strong>Watak/Ciri Mangsa:</strong><br><span style="display: block; margin-left: 15px; white-space: pre-wrap;">${dataMangsa.watak_mangsa || 'Tidak ada data'}</span></p>
            <p><strong>Pengaruh Alam:</strong></p>
            <div style="margin-left: 15px;">${pengaruhAlamHTML}</div>
            <p><strong>Kegiatan Utama Masyarakat:</strong> ${dataMangsa.kegiatan_utama || 'Tidak ada data'}</p>
            <p><strong>Tanaman yang Cocok/Dominan:</strong> ${dataMangsa.tanaman_cocok || 'Tidak ada data'}</p>
            <p><strong>Hewan yang Sering Muncul:</strong> ${dataMangsa.hewan_muncul || 'Tidak ada data'}</p>
            <p><strong>Makna Simbolis/Filosofis:</strong> ${dataMangsa.makna_simbolis || 'Tidak ada data'}</p>
        `;
        infoMangsaDiv.innerHTML = htmlInfoMangsa;

        infoSakaDiv.innerHTML = `
            Tanggal Masehi: ${tanggalMasehiFormatted}<br>
            Perkiraan Tahun Saka (Samvat 78 M): <strong>${dataMangsa.tahunSaka || 'N/A'}</strong>
        `;

        hasilDiv.style.display = 'block';
        hasilDiv.scrollIntoView({ behavior: 'smooth' });

    } else {
        let pesanErrorPengguna = 'Tidak dapat menentukan Pranata Mangsa untuk tanggal yang dipilih. Mohon periksa kembali tanggal atau konfigurasi algoritma.';
        if (dataMangsa && dataMangsa.catatan) {
            pesanErrorPengguna = dataMangsa.catatan;
        }
        errorDiv.textContent = pesanErrorPengguna;
        errorDiv.style.display = 'block';
    }
});