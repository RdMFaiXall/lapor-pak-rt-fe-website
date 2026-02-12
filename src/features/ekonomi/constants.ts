// --- Tipe Data Sesuai Excel "Ekonomi" (New Schema) ---

export type EconomyReport = {
    id: string
    nama_warga: string // Kepala Keluarga
    nik: string // NIK Warga
    pelapor: string // Bu RT / Pak RT
    rt: string // RT asal pelapor

    // [Excel Row 70] Kategori Utama
    kategori_isu_ekonomi:
    | 'Warga tidak punya pekerjaan'
    | 'UMKM tidak berkembang'
    | 'Warga berhutang'
    | 'Calon penerima bansos'

    // LOGIC A: Jika "Warga tidak punya pekerjaan"
    lama_menganggur?: '< 3 Bulan' | '3 - 6 Bulan' | '> 1 Tahun'
    skill_terakhir?: string[] // Input Text / Tags
    minat_pelatihan?: string[] // Checkbox

    // LOGIC B: Jika "UMKM tidak berkembang"
    nama_jenis_usaha?: string
    kendala_umkm?: string[] // Checkbox
    omzet_rata_rata?: '< 1 Juta' | '1 - 3 Juta' | '3 - 5 Juta' | '> 5 Juta'

    // LOGIC C: Jika "Warga berhutang"
    sumber_hutang?: 'Pinjol (Online)' | 'Rentenir / Bank Keliling' | 'Bank Resmi' | 'Tetangga/Perorangan'
    estimasi_total_hutang?: '< 2 Juta' | '2 - 10 Juta' | '> 10 Juta'
    butuh_mediasi?: boolean

    // LOGIC D: Jika "Calon penerima bansos"
    status_hunian?: 'Milik Sendiri' | 'Sewa/Kontrak' | 'Menumpang'
    jumlah_tanggungan?: number
    penghasilan_kk?: 'Tidak Ada' | '< 1.5 Juta' | '1.5 - 3 Juta' | '> 3 Juta'
    riwayat_bantuan?: string[] // Checkbox

    tanggal_laporan: string
}

// --- Dummy Data (New Schema) ---
export const mockData: EconomyReport[] = [
    // 1. Pengangguran
    {
        id: '1',
        nama_warga: 'Budi Santoso',
        nik: '3201123456780001',
        pelapor: 'Pak RT',
        rt: '01',
        kategori_isu_ekonomi: 'Warga tidak punya pekerjaan',
        lama_menganggur: '3 - 6 Bulan',
        skill_terakhir: ['Supir', 'Montir'],
        minat_pelatihan: ['Pertukangan/Teknik'],
        tanggal_laporan: '2024-02-01',
    },
    // 2. UMKM
    {
        id: '2',
        nama_warga: 'Siti Aminah',
        nik: '3201123456780002',
        pelapor: 'Bu RT',
        rt: '02',
        kategori_isu_ekonomi: 'UMKM tidak berkembang',
        nama_jenis_usaha: 'Warung Seblak Bu Siti',
        kendala_umkm: ['Modal Kurang', 'Sepi Pembeli (Pemasaran)'],
        omzet_rata_rata: '< 1 Juta',
        tanggal_laporan: '2024-02-05',
    },
    // 3. Hutang
    {
        id: '3',
        nama_warga: 'Joko Susilo',
        nik: '3201123456780003',
        pelapor: 'Pak RT',
        rt: '03',
        kategori_isu_ekonomi: 'Warga berhutang',
        sumber_hutang: 'Pinjol (Online)',
        estimasi_total_hutang: '2 - 10 Juta',
        butuh_mediasi: true,
        tanggal_laporan: '2024-02-10',
    },
    // 4. Bansos
    {
        id: '4',
        nama_warga: 'Mbah Surip',
        nik: '3201123456780004',
        pelapor: 'Bu RT',
        rt: '01',
        kategori_isu_ekonomi: 'Calon penerima bansos',
        status_hunian: 'Menumpang',
        jumlah_tanggungan: 1,
        penghasilan_kk: '< 1.5 Juta',
        riwayat_bantuan: ['Belum Pernah Ada'],
        tanggal_laporan: '2024-02-12',
    },
    // 5. Pengangguran
    {
        id: '5',
        nama_warga: 'Andi Pratama',
        nik: '3201123456780005',
        pelapor: 'Pak RT',
        rt: '04',
        kategori_isu_ekonomi: 'Warga tidak punya pekerjaan',
        lama_menganggur: '> 1 Tahun',
        skill_terakhir: ['Admin Gudang'],
        minat_pelatihan: ['Digital/Komputer'],
        tanggal_laporan: '2024-02-15',
    },
    // 6. UMKM
    {
        id: '6',
        nama_warga: 'Rina Nose',
        nik: '3201123456780006',
        pelapor: 'Bu RT',
        rt: '05',
        kategori_isu_ekonomi: 'UMKM tidak berkembang',
        nama_jenis_usaha: 'Katering Rumahan',
        kendala_umkm: ['Alat Rusak'],
        omzet_rata_rata: '1 - 3 Juta',
        tanggal_laporan: '2024-02-18',
    },
    // 7. Hutang
    {
        id: '7',
        nama_warga: 'Doni Salmanan',
        nik: '3201123456780007',
        pelapor: 'Pak RT',
        rt: '02',
        kategori_isu_ekonomi: 'Warga berhutang',
        sumber_hutang: 'Rentenir / Bank Keliling',
        estimasi_total_hutang: '> 10 Juta',
        butuh_mediasi: false,
        tanggal_laporan: '2024-02-20',
    },
    // 8. Bansos
    {
        id: '8',
        nama_warga: 'Bu Tejo',
        nik: '3201123456780008',
        pelapor: 'Bu RT',
        rt: '03',
        kategori_isu_ekonomi: 'Calon penerima bansos',
        status_hunian: 'Sewa/Kontrak',
        jumlah_tanggungan: 4,
        penghasilan_kk: '1.5 - 3 Juta',
        riwayat_bantuan: ['BLT'],
        tanggal_laporan: '2024-02-22',
    },
    // 9. Pengangguran
    {
        id: '9',
        nama_warga: 'Eko Patrio',
        nik: '3201123456780009',
        pelapor: 'Pak RT',
        rt: '06',
        kategori_isu_ekonomi: 'Warga tidak punya pekerjaan',
        lama_menganggur: '< 3 Bulan',
        skill_terakhir: ['Security'],
        minat_pelatihan: ['Pertukangan/Teknik'],
        tanggal_laporan: '2024-02-25',
    },
    // 10. UMKM
    {
        id: '10',
        nama_warga: 'Cinta Laura',
        nik: '3201123456780010',
        pelapor: 'Bu RT',
        rt: '01',
        kategori_isu_ekonomi: 'UMKM tidak berkembang',
        nama_jenis_usaha: 'Jasa Laundry',
        kendala_umkm: ['Izin Usaha'],
        omzet_rata_rata: '3 - 5 Juta',
        tanggal_laporan: '2024-02-26',
    }
]
