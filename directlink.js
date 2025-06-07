function openRandomDirectLink() {
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
  ]; // Ganti dengan 20 URL direct link Anda

  const randomIndex = Math.floor(Math.random() * directLinks.length);
  const selectedLink = directLinks[randomIndex];

  window.open(selectedLink, '_blank');
  console.log(`Membuka tab baru dengan direct link: ${selectedLink}`);
}

// Membuka direct link pertama kali setelah 15 detik
console.log("Direct link pertama akan dibuka dalam 15 detik...");
setTimeout(() => {
  openRandomDirectLink();

  // Mengulang pembukaan direct link setiap 30 detik setelah pembukaan pertama
  console.log("Selanjutnya, direct link acak akan diulang setiap 30 detik.");
  setInterval(openRandomDirectLink, 30000);
}, 15000);
