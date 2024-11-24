// Ambil elemen navbar
const navbar = document.querySelector(".navbar");

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", function () {
  // Cek apakah halaman sudah di-scroll lebih dari 50px
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Menambahkan kelas 'scrolled' saat scroll
    navbar.classList.add("navbar-small"); // Menambahkan kelas 'navbar-small'
  } else {
    navbar.classList.remove("scrolled"); // Menghapus kelas 'scrolled' saat scroll ke atas
    navbar.classList.remove("navbar-small"); // Menghapus kelas 'navbar-small'
  }
});

document.addEventListener("DOMContentLoaded", () => {
  var btn_beli_tiket = document.querySelector(".btn-beli-tiket");

  btn_beli_tiket
    ? btn_beli_tiket.addEventListener("click", () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Anda harus login terlebih dahulu!",
          footer: '<a href="login.html">Login</a>',
        });
      })
    : null;
});
