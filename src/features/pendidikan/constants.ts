// --- Tipe Data Sesuai CSV "Pendidikan" ---
// Mengacu pada CSV Isu Pendidikan
export type EducationReport = {
    id: string
    nama_warga: string
    pelapor: string
    rt: string // RT asal pelapor
    // [CSV Source 28] Subjek: isu_pendidikan
    isu_pendidikan: 'Anak Tidak Sekolah' | 'Putus Sekolah' | 'Remaja Menganggur' | 'Mapping Potensi'

    // [CSV Source 29-35] Detail (Gabungan logic dinamis)
    jenjang_terakhir: string
    nama_sekolah: string // Nama sekolah terakhir/saat ini
    alasan_putus?: string[] // Jika Putus Sekolah / ATS
    durasi_menganggur?: string // Jika Menganggur
    minat_bakat?: string[] // Jika Mapping Potensi
    status_aktif?: boolean // Jika Mapping Potensi (Aktif Karang Taruna)
    catatan_khusus: string // Solusi text area
    detail_info: string // Summary string for table view

    // [CSV Source 36] Solusi: rekomendasi_rt
    rekomendasi_rt: string[]
    tanggal_laporan: string
}

// --- Dummy Data ---
export const mockData: EducationReport[] = [
    {
        id: '1',
        nama_warga: 'Ahmad Dani',
        pelapor: 'Pak RT',
        rt: '01',
        isu_pendidikan: 'Putus Sekolah',
        jenjang_terakhir: 'SMP',
        nama_sekolah: 'SMP N 1 Desa',
        alasan_putus: ['Kendala Biaya', 'Harus Bekerja'],
        catatan_khusus: 'Sangat ingin lanjut sekolah jika ada biaya.',
        detail_info: 'SMP (Putus dikls 2) - Kendala Biaya. Sangat Mau Sekolah Lagi.',
        rekomendasi_rt: ['Usulkan Beasiswa / KIP', 'Ajak Pengurus Karang Taruna'],
        tanggal_laporan: '2024-02-12',
    },
    {
        id: '2',
        nama_warga: 'Rina Wati',
        pelapor: 'Bu RT',
        rt: '02',
        isu_pendidikan: 'Remaja Menganggur',
        jenjang_terakhir: 'SMK',
        nama_sekolah: 'SMK Tata Busana',
        durasi_menganggur: '1 Tahun',
        catatan_khusus: 'Punya skill menjahit tapi alat terbatas.',
        detail_info: 'Lulus 1 Tahun lalu. Skill: Menjahit/Craft.',
        rekomendasi_rt: ['Bantuan Modal Usaha Pemula', 'Ikutkan Pelatihan Kerja (BLK)'],
        tanggal_laporan: '2024-02-10',
    },
    {
        id: '3',
        nama_warga: 'Doni Saputra',
        pelapor: 'Pak RT',
        rt: '03',
        isu_pendidikan: 'Mapping Potensi',
        jenjang_terakhir: 'SMA',
        nama_sekolah: 'SMA N 1 Kota',
        minat_bakat: ['Olahraga (Voli)', 'Organisasi'],
        status_aktif: true,
        catatan_khusus: 'Bisa jadi penggerak pemuda dusun.',
        detail_info: 'Hobi: Olahraga (Voli). Aktif Karang Taruna: Ya.',
        rekomendasi_rt: ['Ajak Pengurus Karang Taruna'],
        tanggal_laporan: '2024-02-08',
    },
    {
        id: '4',
        nama_warga: 'Siti Nurhaliza',
        pelapor: 'Pak RT',
        rt: '04',
        isu_pendidikan: 'Anak Tidak Sekolah',
        jenjang_terakhir: 'SD',
        nama_sekolah: '-',
        alasan_putus: ['Disabilitas', 'Jarak Sekolah Jauh'],
        catatan_khusus: 'Perlu sekolah inklusi terdekat.',
        detail_info: 'Usia 10 Thn Belum Pernah SD. Alasan: Disabilitas/Sakit.',
        rekomendasi_rt: ['Usulkan Beasiswa / KIP', 'Ikutkan Kejar Paket A'],
        tanggal_laporan: '2024-02-05',
    },
    {
        id: '5',
        nama_warga: 'Budi (Remaja)',
        pelapor: 'Bu RT',
        rt: '05',
        isu_pendidikan: 'Remaja Menganggur',
        jenjang_terakhir: 'SMK',
        nama_sekolah: 'SMK TKJ',
        durasi_menganggur: '6 Bulan',
        catatan_khusus: 'Butuh info loker teknisi.',
        detail_info: 'Lulus SMK TKJ. Belum kerja 6 bulan.',
        rekomendasi_rt: ['Info Lowongan Kerja', 'Ikutkan Pelatihan Kerja (BLK)'],
        tanggal_laporan: '2024-02-15',
    },
    {
        id: '6',
        nama_warga: 'Dewi Sartika',
        pelapor: 'Bu RT',
        rt: '01',
        isu_pendidikan: 'Putus Sekolah',
        jenjang_terakhir: 'SMA',
        nama_sekolah: 'SMA Swasta',
        alasan_putus: ['Menikah/Hamil'],
        catatan_khusus: 'Perlu pendampingan khusus.',
        detail_info: 'SMA droupout kelas 1. Hamil diluar nikah.',
        rekomendasi_rt: ['Pendampingan Psikologis', 'Kejar Paket C'],
        tanggal_laporan: '2024-02-16',
    },
    {
        id: '7',
        nama_warga: 'Eko Prasetyo',
        pelapor: 'Pak RT',
        rt: '02',
        isu_pendidikan: 'Mapping Potensi',
        jenjang_terakhir: 'Sarjana',
        nama_sekolah: 'Universitas Terbuka',
        minat_bakat: ['Kesenian/Musik'],
        status_aktif: false,
        catatan_khusus: 'Ingin buat band desa.',
        detail_info: 'Jago Gitar. Ingin buat band karang taruna.',
        rekomendasi_rt: ['Ajak Pengurus Karang Taruna', 'Fasilitasi Alat Musik Desa'],
        tanggal_laporan: '2024-02-17',
    },
    {
        id: '8',
        nama_warga: 'Fajar',
        pelapor: 'Pak RT',
        rt: '03',
        isu_pendidikan: 'Anak Tidak Sekolah',
        jenjang_terakhir: '-',
        nama_sekolah: '-',
        alasan_putus: ['Yatim Piatu', 'Ekonomi'],
        catatan_khusus: 'Tinggal bersama nenek yang sudah tua.',
        detail_info: 'Yatim Piatu, tinggal sama nenek. Ekonomi Sulit.',
        rekomendasi_rt: ['Usulkan Beasiswa / KIP', 'Bantuan Perlengkapan Sekolah'],
        tanggal_laporan: '2024-02-18',
    },
    {
        id: '9',
        nama_warga: 'Gita Gutawa',
        pelapor: 'Bu RT',
        rt: '04',
        isu_pendidikan: 'Mapping Potensi',
        jenjang_terakhir: 'SMP',
        nama_sekolah: 'SMP N 2',
        minat_bakat: ['Kesenian/Musik'],
        status_aktif: true,
        catatan_khusus: 'Suara bagus, potensi lomba.',
        detail_info: 'Suara Bagus. Juara menyanyi tingkat kecamatan.',
        rekomendasi_rt: ['Ajak Pengurus Karang Taruna', 'Info Lomba'],
        tanggal_laporan: '2024-02-19',
    },
    {
        id: '10',
        nama_warga: 'Hendra',
        pelapor: 'Pak RT',
        rt: '05',
        isu_pendidikan: 'Remaja Menganggur',
        jenjang_terakhir: 'SD',
        nama_sekolah: 'SD Inpres',
        durasi_menganggur: '3 Tahun',
        catatan_khusus: 'Mau kerja apa saja asal halal.',
        detail_info: 'Putus SD. Butuh kerja serabutan.',
        rekomendasi_rt: ['Padat Karya Tunai Desa'],
        tanggal_laporan: '2024-02-20',
    }
]
