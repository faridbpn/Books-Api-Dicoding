Cara Kerja:
Tambah Buku: Form untuk menambah buku baru dengan detail seperti nama, penulis, penerbit, tahun, dan jumlah halaman. Ketika submit, data dikirim ke endpoint /books menggunakan metode POST.
Lihat Semua Buku: Tombol untuk menampilkan semua buku yang tersimpan di server. Data ditampilkan dalam elemen <ul>.
Perbarui Buku: Form untuk memperbarui buku berdasarkan ID. Data baru dikirim ke endpoint /books/{bookId} menggunakan metode PUT.
Hapus Buku: Form untuk menghapus buku berdasarkan ID. Permintaan dikirim ke endpoint /books/{bookId} menggunakan metode DELETE.