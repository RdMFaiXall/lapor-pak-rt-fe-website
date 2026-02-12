// --- Tipe Data Sesuai Excel "Kesehatan" (New Schema) ---

export type HealthReport = {
    id: string
    nama_warga: string // Kepala Keluarga / Pasien
    nik: string // NIK Warga
    pelapor: string
    rt: string

    // [Excel Row 43] Masalah Utama
    isu_kesehatan:
    | 'Wabah DBD'
    | 'Stunting / Gizi Buruk'
    | 'Ibu Hamil Berisiko'
    | 'Warga Belum BPJS'

    // LOGIC A: Jika "Wabah DBD"
    kondisi_dbd?: 'Rawat Jalan (Di Rumah)' | 'Rawat Inap (RS/Puskesmas)' | 'Meninggal Dunia'
    lingkungan_dbd?: string[] // Checkbox: Genangan air, Tetangga sakit, Butuh fogging

    // LOGIC B: Jika "Stunting / Gizi Buruk"
    berat_badan?: number // kg
    tinggi_badan?: number // cm
    umur_bulan?: number // bulan
    status_pmt?: boolean // Sudah dapat MT?

    // LOGIC C: Jika "Ibu Hamil Berisiko"
    usia_kandungan?: 'Trimester 1 (1-3 Bulan)' | 'Trimester 2 (4-6 Bulan)' | 'Trimester 3 (7-9 Bulan)'
    faktor_risiko?: string[] // Checkbox: Usia muda/tua, Hipertensi, KEK, Jarak dekat

    // LOGIC D: Jika "Warga Belum BPJS"
    alasan_bpjs?: 'Tidak Mampu Bayar Iuran' | 'Tidak Tahu Cara Daftar' | 'KTP/KK Bermasalah' | 'BPJS Mati (Tunggakan)'

    // Universal Fields
    intervensi_rt?: string[] // Checkbox: Lapor Bidan, Bantu Adminduk, PMT, Kerja Bakti
    status_kesehatan: 'Stabil' | 'Dalam Pemantauan' | 'Kritis' // Radio
    tanggal_laporan: string
    foto_dokumentasi?: string[]
}

// --- Dummy Data (New Schema) ---
export const mockData: HealthReport[] = [
    // 1. DBD
    {
        id: '1',
        nama_warga: 'Budi Santoso',
        nik: '3201123456780001',
        pelapor: 'Pak RT',
        rt: '01',
        isu_kesehatan: 'Wabah DBD',
        kondisi_dbd: 'Rawat Inap (RS/Puskesmas)',
        lingkungan_dbd: ['Ada genangan air/jentik', 'Butuh Fogging segera'],
        intervensi_rt: ['Lapor Bidan Desa / Puskesmas', 'Kerja Bakti (PSN/3M)'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-02-10',
        foto_dokumentasi: [
            'https://images.unsplash.com/photo-1542884748-2b87b3664b40?w=800&auto=format&fit=crop&q=60'
        ]
    },
    // 2. Stunting
    {
        id: '2',
        nama_warga: 'Anak dari Ibu Siti',
        nik: '3201123456780002',
        pelapor: 'Bu RT',
        rt: '02',
        isu_kesehatan: 'Stunting / Gizi Buruk',
        berat_badan: 9.5,
        tinggi_badan: 82,
        umur_bulan: 36,
        status_pmt: false,
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-02-12',
    },
    // 3. Ibu Hamil
    {
        id: '3',
        nama_warga: 'Ibu Ratna',
        nik: '3201123456780003',
        pelapor: 'Kader Posyandu',
        rt: '03',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        usia_kandungan: 'Trimester 3 (7-9 Bulan)',
        faktor_risiko: ['Darah Tinggi (Hipertensi)', 'Usia Terlalu Muda (<20) / Tua (>35)'],
        intervensi_rt: ['Lapor Bidan Desa / Puskesmas'],
        status_kesehatan: 'Kritis',
        tanggal_laporan: '2024-02-15',
    },
    // 4. BPJS
    {
        id: '4',
        nama_warga: 'Pak Junaedi',
        nik: '3201123456780004',
        pelapor: 'Pak RT',
        rt: '04',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'Tidak Mampu Bayar Iuran',
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-20',
    },
    // 5. DBD
    {
        id: '5',
        nama_warga: 'Doni',
        nik: '3201123456780005',
        pelapor: 'Warga',
        rt: '01',
        isu_kesehatan: 'Wabah DBD',
        kondisi_dbd: 'Rawat Jalan (Di Rumah)',
        lingkungan_dbd: ['Ada tetangga lain yang sakit sama'],
        intervensi_rt: ['Kerja Bakti (PSN/3M)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-22',
    },
    // 6. Stunting
    {
        id: '6',
        nama_warga: 'Anak dari Pak Eko',
        nik: '3201123456780006',
        pelapor: 'Kader Posyandu',
        rt: '05',
        isu_kesehatan: 'Stunting / Gizi Buruk',
        berat_badan: 8.0,
        tinggi_badan: 78,
        umur_bulan: 30,
        status_pmt: true,
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)', 'Lapor Bidan Desa / Puskesmas'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-25',
    },
    // 7. Ibu Hamil
    {
        id: '7',
        nama_warga: 'Ibu Wati',
        nik: '3201123456780007',
        pelapor: 'Bu RT',
        rt: '02',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        usia_kandungan: 'Trimester 1 (1-3 Bulan)',
        faktor_risiko: ['Kurang Energi (Kurus/Lemas)'],
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-26',
    },
    // 8. BPJS
    {
        id: '8',
        nama_warga: 'Mbah Karto',
        nik: '3201123456780008',
        pelapor: 'Pak RT',
        rt: '03',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'KTP/KK Bermasalah',
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-02-27',
    },
    // 9. DBD
    {
        id: '9',
        nama_warga: 'Susi',
        nik: '3201123456780009',
        pelapor: 'Warga',
        rt: '04',
        isu_kesehatan: 'Wabah DBD',
        kondisi_dbd: 'Rawat Inap (RS/Puskesmas)',
        lingkungan_dbd: ['Ada genangan air/jentik'],
        intervensi_rt: ['Lapor Bidan Desa / Puskesmas'],
        status_kesehatan: 'Kritis',
        tanggal_laporan: '2024-02-28',
    },
    // 10. BPJS
    {
        id: '10',
        nama_warga: 'Pak RT Sendiri',
        nik: '3201123456780010',
        pelapor: 'Warga',
        rt: '01',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'BPJS Mati (Tunggakan)',
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-29',
    }
]
