
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jendela Popup Kustom Berulang</title>
    <style>
        /* --- CSS untuk Popup --- */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }

        /* Gaya untuk overlay (latar belakang gelap) */
        .popup-overlay {
            display: none; /* Sembunyikan secara default */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7); /* Latar belakang gelap transparan */
            z-index: 999; /* Pastikan di atas elemen lain */
            justify-content: center;
            align-items: center;
        }

        /* Gaya untuk kotak popup itu sendiri */
        .popup-content {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 400px;
            width: 90%; /* Responsif */
            position: relative;
            animation: fadeIn 0.3s ease-out; /* Animasi muncul */
        }

        /* Gaya untuk tombol tutup */
        .close-button {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            font-weight: bold;
            color: #aaa;
            cursor: pointer;
            transition: color 0.2s ease;
        }

        .close-button:hover {
            color: #333;
        }

        h2 {
            color: #333;
            margin-top: 0;
            margin-bottom: 15px;
        }

        p {
            color: #555;
            line-height: 1.6;
        }

        .call-to-action {
            display: inline-block;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
            transition: background-color 0.2s ease;
        }

        .call-to-action:hover {
            background-color: #0056b3;
        }

        /* Animasi muncul */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <h1>Selamat Datang di Halaman Kami!</h1>
    <p>Ini adalah konten utama halaman Anda. Popup akan muncul setiap 15 detik.</p>

    <div id="customPopup" class="popup-overlay">
        <div class="popup-content">
            <span class="close-button" onclick="closePopup()">&times;</span>
            <h2>Penawaran Spesial!</h2>
            <p>Dapatkan diskon 20% untuk semua produk kami hari ini saja!</p>
            <a href="#" class="call-to-action">Lihat Penawaran Sekarang</a>
        </div>
    </div>

    <script>
        const popup = document.getElementById('customPopup');
        let popupTimer; // Variabel untuk menyimpan timer popup

        // Fungsi untuk menampilkan popup
        function showPopup() {
            // Kita gunakan 'flex' agar bisa menggunakan 'justify-content' dan 'align-items' untuk menengahkan
            popup.style.display = 'flex';
        }

        // Fungsi untuk menyembunyikan popup
        function closePopup() {
            popup.style.display = 'none';
            // Setel ulang timer agar popup muncul lagi 15 detik setelah ditutup
            startPopupTimer();
        }

        // Fungsi untuk memulai timer popup
        function startPopupTimer() {
            // Hapus timer sebelumnya jika ada
            if (popupTimer) {
                clearTimeout(popupTimer);
            }
            // Mulai timer baru
            popupTimer = setTimeout(showPopup, 15000); // Muncul setelah 15 detik
        }

        // Mulai timer pertama kali saat halaman dimuat
        startPopupTimer();

        // Opsional: Jika Anda ingin popup muncul lagi setelah ditutup,
        // pastikan closePopup() memanggil startPopupTimer() lagi.
        // Dalam kode ini, sudah kita masukkan.
    </script>

