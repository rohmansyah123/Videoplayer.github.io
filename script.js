document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const volumeControl = document.getElementById('volumeControl');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const videoList = document.querySelector('.video-list ul');

    // --- Tambahkan URL Iklan Anda di sini ---
    const AD_URL = 'https://www.google.com'; // Ganti dengan direct link iklan Anda
    // --- Akhir URL Iklan ---

    let adShown = false; // Flag untuk melacak apakah iklan sudah ditampilkan

    // Inisialisasi progress bar (set max ke durasi video setelah metadata dimuat)
    video.addEventListener('loadedmetadata', () => {
        progressBar.max = video.duration;
    });

    // 1. Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
        if (!adShown) {
            // Jika iklan belum ditampilkan, buka iklan dan kemudian putar video
            window.open(AD_URL, '_blank'); // Buka link iklan di tab baru
            adShown = true; // Set flag menjadi true
            video.play(); // Putar video setelah iklan dibuka
            playPauseBtn.textContent = 'Pause';
        } else {
            // Jika iklan sudah ditampilkan, lanjutkan fungsi play/pause normal
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = 'Pause';
            } else {
                video.pause();
                playPauseBtn.textContent = 'Play';
            }
        }
    });

    // Update play/pause button text when video state changes (e.g., ended, manually paused)
    video.addEventListener('play', () => {
        playPauseBtn.textContent = 'Pause';
    });

    video.addEventListener('pause', () => {
        playPauseBtn.textContent = 'Play';
    });

    video.addEventListener('ended', () => {
        playPauseBtn.textContent = 'Play';
        progressBar.value = 0; // Reset progress bar
        adShown = false; // Reset flag iklan agar iklan bisa muncul lagi di pemutaran berikutnya
    });

    // 2. Progress Bar
    video.addEventListener('timeupdate', () => {
        progressBar.value = video.currentTime;
    });

    progressBar.addEventListener('input', () => {
        video.currentTime = progressBar.value;
    });

    // 3. Volume Control
    volumeControl.addEventListener('input', () => {
        video.volume = volumeControl.value;
    });

    // 4. Fullscreen
    fullscreenBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    });

    // 5. Video List (play selected video)
    if (videoList) {
        videoList.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault(); // Mencegah link dari memuat halaman baru
                const newVideoSrc = event.target.dataset.src;
                if (newVideoSrc) {
                    video.src = newVideoSrc;
                    video.load(); // Memuat video baru
                    
                    // Reset flag iklan saat video baru dimuat
                    adShown = false; 
                    
                    // Otomatis putar video baru setelah iklan (jika belum ditampilkan)
                    // Atau langsung putar jika iklan sudah ditampilkan (misalnya, video kedua dalam sesi yang sama)
                    if (!adShown) {
                        window.open(AD_URL, '_blank'); // Buka link iklan di tab baru
                        adShown = true; // Set flag menjadi true
                    }
                    video.play();
                    playPauseBtn.textContent = 'Pause';
                }
            }
        });
    }
});
