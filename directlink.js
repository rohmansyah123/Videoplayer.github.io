<!DOCTYPE html>
<html>
<head>
    <title>Pengalihan Setelah Klik</title>
</head>
<body>

    <h1>Halaman Utama Anda</h1>
    <p>Klik tombol di bawah untuk melihat penawaran spesial kami!</p>
    <button id="redirectButton">Lihat Penawaran Spesial</button>

    <script>
        // Array berisi 20 URL direct link Anda
        const directLinks = [
            "https://link1.com",
            "https://link2.com",
            "https://link3.com",
            "https://link4.com",
            "https://link5.com",
            "https://link6.com",
            "https://link7.com",
            "https://link8.com",
            "https://link9.com",
            "https://link10.com",
            "https://link11.com",
            "https://link12.com",
            "https://link13.com",
            "https://link14.com",
            "https://link15.com",
            "https://link16.com",
            "https://link17.com",
            "https://link18.com",
            "https://link19.com",
            "https://link20.com"
        ]; // Ganti dengan 20 URL direct link Anda yang sebenarnya!

        // Dapatkan tombol dari halaman HTML
        const redirectButton = document.getElementById('redirectButton');

        // Tambahkan 'event listener' untuk mendeteksi klik pada tombol
        redirectButton.addEventListener('click', function() {
            // Pilih link secara acak dari array
            const randomIndex = Math.floor(Math.random() * directLinks.length);
            const selectedLink = directLinks[randomIndex];

            // Tentukan apakah akan membuka di tab yang sama atau tab baru
            // Pilihan 1: Membuka di tab baru (lebih disarankan untuk menjaga pengguna di halaman Anda)
            window.open(selectedLink, '_blank');
            console.log(`Membuka link acak di tab baru: ${selectedLink}`);

            // Pilihan 2: Mengalihkan di tab yang sama (akan meninggalkan halaman Anda)
            // window.location.href = selectedLink;
            // console.log(`Mengalihkan di tab yang sama ke: ${selectedLink}`);
        });
    </script>

</body>
</html>
