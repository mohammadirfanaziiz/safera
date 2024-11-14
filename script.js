// Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', function() {
    // Cek apakah halaman sudah di-scroll lebih dari 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');  // Menambahkan kelas 'scrolled' saat scroll
        navbar.classList.add('navbar-small'); // Menambahkan kelas 'navbar-small'
    } else {
        navbar.classList.remove('scrolled');  // Menghapus kelas 'scrolled' saat scroll ke atas
        navbar.classList.remove('navbar-small'); // Menghapus kelas 'navbar-small'
    }
});