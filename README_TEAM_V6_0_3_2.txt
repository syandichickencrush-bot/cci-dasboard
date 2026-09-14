CHICKEN CRUSH V6.0.3.2 — TEAM LIVE SYNC + MODERN LOADING

PERBAIKAN UTAMA
- Memperbaiki bug JavaScript yang menghentikan proses Auto Live pada build Team.
- Penyebab: elemen Setup Live sudah dihapus dari Team, tetapi script lama masih mencoba memasang event listener ke modal yang tidak ada.
- Auto Live sekarang berjalan saat aplikasi dibuka.
- Timeout koneksi diperpanjang untuk jaringan HP yang lebih lambat.
- Sinkronisasi otomatis dijalankan lagi saat aplikasi kembali aktif/focus.
- Service Worker tidak lagi ikut menangani request Apps Script.
- Service Worker dipaksa mengecek update terbaru.
- Loading screen diganti menjadi animasi modern.
- Tulisan "Menu tetap tersedia saat scroll" di sidebar desktop dihapus.
- Mobile width hotfix V6.0.3.1 tetap dipertahankan.

UPDATE GITHUB TEAM
Replace semua file di root repository Team dengan isi folder/paket V6.0.3.2, lalu Commit changes.
Tidak perlu mengganti Code.gs untuk update ini.
