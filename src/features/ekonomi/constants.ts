// --- Tipe Data Sesuai CSV "Ekonomi" ---
// Mengacu pada CSV Isu Ekonomi (Row 70-105)
export type EconomyReport = {
    id: string
    nama_warga: string // Kepala Keluarga
    pelapor: string // Bu RT / Pak RT
    rt: string // RT asal pelapor

    // [CSV Source 71] Status Pekerjaan
    status_pekerjaan: 'Bekerja' | 'Tidak Bekerja' | 'Usaha Mandiri' | 'Pensiunan'

    // [CSV Source 72] Jenis Pekerjaan (Detail)
    jenis_pekerjaan: string

    // [CSV Source 73] Penghasilan Bulanan (Range)
    penghasilan_bulanan: '< 1 Juta' | '1-3 Juta' | '3-5 Juta' | '> 5 Juta'

    // [CSV Source 74] Pengeluaran Bulanan (Range)
    pengeluaran_bulanan: '< 1 Juta' | '1-3 Juta' | '3-5 Juta' | '> 5 Juta'

    // [CSV Source 75] Status Tempat Tinggal
    status_tempat_tinggal: 'Milik Sendiri' | 'Sewa/ontrak' | 'Menumpang'

    // [CSV Source 76] Aset Kendaraan
    aset_kendaraan: string[] // Motor, Mobil, Sepeda, Tidak Punya

    // [CSV Source 77] Tabungan Emas/Bank
    tabungan_aset: 'Ada' | 'Tidak Ada'

    // [CSV Source 78] Bantuan Pemerintah (Bansos)
    status_bansos: 'Sudah Menerima' | 'Sedang Mengajukan' | 'Tidak Menerima' | 'Ditolak'

    detail_usaha?: { // Jika Usaha Mandiri
        nama_usaha: string
        jenis_usaha: string
        omzet_bulanan: string
    }

    tanggal_update: string
}

// --- Dummy Data ---
export const mockData: EconomyReport[] = [
    {
        id: '1',
        nama_warga: 'Bambang Pamungkas',
        pelapor: 'Pak RT',
        rt: '01',
        status_pekerjaan: 'Bekerja',
        jenis_pekerjaan: 'Buruh Harian Lepas',
        penghasilan_bulanan: '< 1 Juta',
        pengeluaran_bulanan: '1-3 Juta',
        status_tempat_tinggal: 'Sewa/ontrak',
        aset_kendaraan: ['Motor'],
        tabungan_aset: 'Tidak Ada',
        status_bansos: 'Sudah Menerima',
        tanggal_update: '2024-02-01',
    },
    {
        id: '2',
        nama_warga: 'Susi Susanti',
        pelapor: 'Bu RT',
        rt: '02',
        status_pekerjaan: 'Usaha Mandiri',
        jenis_pekerjaan: 'Pedagang Kelontong',
        penghasilan_bulanan: '1-3 Juta',
        pengeluaran_bulanan: '1-3 Juta',
        status_tempat_tinggal: 'Milik Sendiri',
        aset_kendaraan: ['Motor', 'Mobil Pick Up'],
        tabungan_aset: 'Ada',
        status_bansos: 'Sedang Mengajukan',
        detail_usaha: {
            nama_usaha: 'Warung Bu Susi',
            jenis_usaha: 'Sembako',
            omzet_bulanan: '4 Juta'
        },
        tanggal_update: '2024-02-10',
    },
    {
        id: '3',
        nama_warga: 'Rudi Hartono',
        pelapor: 'Pak RT',
        rt: '03',
        status_pekerjaan: 'Bekerja',
        jenis_pekerjaan: 'Karyawan Swasta',
        penghasilan_bulanan: '3-5 Juta',
        pengeluaran_bulanan: '3-5 Juta',
        status_tempat_tinggal: 'Sewa/ontrak',
        aset_kendaraan: ['Motor'],
        tabungan_aset: 'Ada',
        status_bansos: 'Tidak Menerima',
        tanggal_update: '2024-02-11',
    },
    {
        id: '4',
        nama_warga: 'Taufik Hidayat',
        pelapor: 'Kader',
        rt: '04',
        status_pekerjaan: 'Tidak Bekerja',
        jenis_pekerjaan: '-',
        penghasilan_bulanan: '< 1 Juta',
        pengeluaran_bulanan: '< 1 Juta',
        status_tempat_tinggal: 'Menumpang',
        aset_kendaraan: ['Sepeda'],
        tabungan_aset: 'Tidak Ada',
        status_bansos: 'Sedang Mengajukan',
        tanggal_update: '2024-02-05',
    },
    {
        id: '5',
        nama_warga: 'Alan Budikusuma',
        pelapor: 'Pak RT',
        rt: '05',
        status_pekerjaan: 'Pensiunan',
        jenis_pekerjaan: 'Pensiunan PNS',
        penghasilan_bulanan: '3-5 Juta',
        pengeluaran_bulanan: '1-3 Juta',
        status_tempat_tinggal: 'Milik Sendiri',
        aset_kendaraan: ['Motor', 'Mobil'],
        tabungan_aset: 'Ada',
        status_bansos: 'Tidak Menerima',
        tanggal_update: '2024-02-12',
    },
    {
        id: '6',
        nama_warga: 'Budi Santoso',
        pelapor: 'Warga',
        rt: '01',
        status_pekerjaan: 'Bekerja',
        jenis_pekerjaan: 'Ojek Online',
        penghasilan_bulanan: '1-3 Juta',
        pengeluaran_bulanan: '1-3 Juta',
        status_tempat_tinggal: 'Sewa/ontrak',
        aset_kendaraan: ['Motor'],
        tabungan_aset: 'Tidak Ada',
        status_bansos: 'Sedang Mengajukan',
        tanggal_update: '2024-02-20',
    },
    {
        id: '7',
        nama_warga: 'Citra Kirana',
        pelapor: 'Bu RT',
        rt: '02',
        status_pekerjaan: 'Usaha Mandiri',
        jenis_pekerjaan: 'Katering',
        penghasilan_bulanan: '3-5 Juta',
        pengeluaran_bulanan: '3-5 Juta',
        status_tempat_tinggal: 'Milik Sendiri',
        aset_kendaraan: ['Motor', 'Mobil'],
        tabungan_aset: 'Ada',
        status_bansos: 'Tidak Menerima',
        detail_usaha: {
            nama_usaha: 'Dapur Citra',
            jenis_usaha: 'Kuliner',
            omzet_bulanan: '6 Juta'
        },
        tanggal_update: '2024-02-21',
    },
    {
        id: '8',
        nama_warga: 'Dedi Corbuzier',
        pelapor: 'Pak RT',
        rt: '03',
        status_pekerjaan: 'Bekerja',
        jenis_pekerjaan: 'Buruh Pabrik',
        penghasilan_bulanan: '3-5 Juta',
        pengeluaran_bulanan: '1-3 Juta',
        status_tempat_tinggal: 'Sewa/ontrak',
        aset_kendaraan: ['Motor'],
        tabungan_aset: 'Ada',
        status_bansos: 'Tidak Menerima',
        tanggal_update: '2024-02-22',
    },
    {
        id: '9',
        nama_warga: 'Euis Darliah',
        pelapor: 'Kader',
        rt: '04',
        status_pekerjaan: 'Tidak Bekerja',
        jenis_pekerjaan: '-',
        penghasilan_bulanan: '< 1 Juta',
        pengeluaran_bulanan: '< 1 Juta',
        status_tempat_tinggal: 'Menumpang',
        aset_kendaraan: ['Tidak Punya'],
        tabungan_aset: 'Tidak Ada',
        status_bansos: 'Sudah Menerima',
        tanggal_update: '2024-02-23',
    },
    {
        id: '10',
        nama_warga: 'Ferry Salim',
        pelapor: 'Pak RT',
        rt: '05',
        status_pekerjaan: 'Pensiunan',
        jenis_pekerjaan: 'Pensiunan Swasta',
        penghasilan_bulanan: '> 5 Juta',
        pengeluaran_bulanan: '3-5 Juta',
        status_tempat_tinggal: 'Milik Sendiri',
        aset_kendaraan: ['Mobil'],
        tabungan_aset: 'Ada',
        status_bansos: 'Tidak Menerima',
        tanggal_update: '2024-02-24',
    }
]
