document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const volumeControl = document.getElementById('volumeControl');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const videoList = document.querySelector('.video-list ul');

    // Inisialisasi progress bar (set max ke durasi video setelah metadata dimuat)
    video.addEventListener('loadedmetadata', () => {
        progressBar.max = video.duration;
    });

    // 1. Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
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
                    video.play(); // Memutar video baru secara otomatis
                    playPauseBtn.textContent = 'Pause';
                }
            }
        });
    }
});
