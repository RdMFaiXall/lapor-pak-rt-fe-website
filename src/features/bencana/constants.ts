// --- Tipe Data Sesuai CSV "Bencana" ---
// Mengacu pada CSV Isu Kebencanaan (Row 106-115)
export type DisasterReport = {
    id: string
    pelapor: string // Siapa yang melapor
    rt: string // RT asal pelapor
    jenis_bencana: 'Banjir' | 'Kebakaran' | 'Pohon Tumbang' | 'Tanah Longsor' | 'Angin Puting Beliung' | 'Lainnya'
    lokasi: string // Alamat / RT/RW
    waktu_kejadian: string

    // [CSV Source 107] Dampak Korban
    dampak_korban: {
        meninggal: number
        luka_berat: number
        luka_ringan: number
        mengungsi: number
    }

    // [CSV Source 108] Dampak Kerusakan
    dampak_kerusakan: string[] // Rumah Rusak, Fasilitas Umum, dll

    // [CSV Source 109] Kebutuhan Mendesak
    kebutuhan_mendesak: string[] // Makanan, Pakaian, Obat, Tenda

    // [CSV Source 110] Status Penanganan
    status_penanganan: 'Darurat' | 'Butuh Bantuan' | 'Dalam Penanganan' | 'Selesai'

    foto_kejadian?: string
    tanggal_laporan: string
    keterangan_tambahan: string
}

// --- Dummy Data ---
export const mockData: DisasterReport[] = [
    {
        id: '1',
        pelapor: 'Pak RT 01',
        rt: '01',
        jenis_bencana: 'Banjir',
        lokasi: 'RT 01 / RW 05 (Dekat Sungai)',
        waktu_kejadian: '2024-02-23 04:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 2,
            mengungsi: 15
        },
        dampak_kerusakan: ['5 Rumah Terendam', 'Jalan Desa Terputus'],
        kebutuhan_mendesak: ['Perahu Karet', 'Makanan Siap Saji'],
        status_penanganan: 'Darurat',
        tanggal_laporan: '2024-02-23',
        keterangan_tambahan: 'Air setinggi 1 meter. Warga butuh evakuasi.'
    },
    {
        id: '2',
        pelapor: 'Bu RT 02',
        rt: '02',
        jenis_bencana: 'Pohon Tumbang',
        lokasi: 'Jalan Utama Desa (Depan Balai)',
        waktu_kejadian: '2024-02-20 14:30',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 0,
            mengungsi: 0
        },
        dampak_kerusakan: ['Kabel Listrik Putus', 'Atap Pos Ronda Rusak'],
        kebutuhan_mendesak: ['Gergaji Mesin', 'Petugas PLN'],
        status_penanganan: 'Selesai',
        tanggal_laporan: '2024-02-20',
        keterangan_tambahan: 'Pohon beringin tua tumbang karena angin kencang.'
    },
    {
        id: '3',
        pelapor: 'Warga (Pak Tejo)',
        rt: '03',
        jenis_bencana: 'Kebakaran',
        lokasi: 'RT 03 (Rumah Bu Sumi)',
        waktu_kejadian: '2024-02-18 10:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 1,
            luka_ringan: 0,
            mengungsi: 5
        },
        dampak_kerusakan: ['1 Rumah Hangus', 'Dapur Tetangga Rusak Ringan'],
        kebutuhan_mendesak: ['Pemadam Kebakaran', 'Ambulans', 'Bantuan Logistik'],
        status_penanganan: 'Dalam Penanganan',
        tanggal_laporan: '2024-02-18',
        keterangan_tambahan: 'Diduga korsleting listrik.'
    },
    {
        id: '4',
        pelapor: 'Karang Taruna',
        rt: '04',
        jenis_bencana: 'Angin Puting Beliung',
        lokasi: 'RT 04 / RW 01',
        waktu_kejadian: '2024-02-15 16:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 3,
            mengungsi: 0
        },
        dampak_kerusakan: ['10 Rumah Atap Rusak', 'Pohon Tumbang'],
        kebutuhan_mendesak: ['Terpal', 'Material Bangunan'],
        status_penanganan: 'Butuh Bantuan',
        tanggal_laporan: '2024-02-15',
        keterangan_tambahan: 'Banyak genteng beterbangan.'
    },
    {
        id: '5',
        pelapor: 'Pak RT 05',
        rt: '05',
        jenis_bencana: 'Banjir',
        lokasi: 'RT 05 (Dekat Sawah)',
        waktu_kejadian: '2024-02-24 05:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 0,
            mengungsi: 5
        },
        dampak_kerusakan: ['Sawah Terendam'],
        kebutuhan_mendesak: ['Makanan'],
        status_penanganan: 'Selesai',
        tanggal_laporan: '2024-02-24',
        keterangan_tambahan: 'Air cepat surut.'
    },
    {
        id: '6',
        pelapor: 'Warga (Pak Amir)',
        rt: '02',
        jenis_bencana: 'Pohon Tumbang',
        lokasi: 'Jalan Desa RT 02',
        waktu_kejadian: '2024-02-21 14:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 1,
            mengungsi: 0
        },
        dampak_kerusakan: ['Menimpa pagar warga'],
        kebutuhan_mendesak: ['Gotong Royong'],
        status_penanganan: 'Selesai',
        tanggal_laporan: '2024-02-21',
        keterangan_tambahan: 'Sudah dibersihkan warga.'
    },
    {
        id: '7',
        pelapor: 'Ibu PKK',
        rt: '01',
        jenis_bencana: 'Lainnya',
        lokasi: 'Balai Warga',
        waktu_kejadian: '2024-02-25 09:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 0,
            mengungsi: 0
        },
        dampak_kerusakan: ['Plafon Jebol'],
        kebutuhan_mendesak: ['Tukang Bangunan'],
        status_penanganan: 'Butuh Bantuan',
        tanggal_laporan: '2024-02-25',
        keterangan_tambahan: 'Plafon balai warga jebol karena lapuk.'
    },
    {
        id: '8',
        pelapor: 'Hansip',
        rt: '03',
        jenis_bencana: 'Tanah Longsor',
        lokasi: 'Tebing Sungai RT 03',
        waktu_kejadian: '2024-02-22 23:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 0,
            mengungsi: 2
        },
        dampak_kerusakan: ['Jalan setapak amblas'],
        kebutuhan_mendesak: ['Karung Pasir', 'Batu'],
        status_penanganan: 'Darurat',
        tanggal_laporan: '2024-02-22',
        keterangan_tambahan: 'Rawan longsor susulan.'
    },
    {
        id: '9',
        pelapor: 'Pak RT 04',
        rt: '04',
        jenis_bencana: 'Angin Puting Beliung',
        lokasi: 'Lapangan Desa',
        waktu_kejadian: '2024-02-15 16:15',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 0,
            mengungsi: 0
        },
        dampak_kerusakan: ['Tenda acara roboh'],
        kebutuhan_mendesak: ['Tenaga pembersihan'],
        status_penanganan: 'Selesai',
        tanggal_laporan: '2024-02-15',
        keterangan_tambahan: 'Terjadi saat persiapan acara desa.'
    },
    {
        id: '10',
        pelapor: 'Karang Taruna',
        rt: '05',
        jenis_bencana: 'Kebakaran',
        lokasi: 'Lahan Kosong RT 05',
        waktu_kejadian: '2024-02-20 13:00',
        dampak_korban: {
            meninggal: 0,
            luka_berat: 0,
            luka_ringan: 0,
            mengungsi: 0
        },
        dampak_kerusakan: ['Ilalang terbakar'],
        kebutuhan_mendesak: ['Pemadam'],
        status_penanganan: 'Selesai',
        tanggal_laporan: '2024-02-20',
        keterangan_tambahan: 'Diduga puntung rokok.'
    }
]
