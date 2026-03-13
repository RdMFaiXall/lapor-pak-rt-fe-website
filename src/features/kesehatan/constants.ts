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
    perkembangan_kasus?: 'Terindikasi DBD' | 'Positif DBD' | 'Sembuh' | 'Meninggal'
    lokasi_perawatan?: 'Di rumah' | 'Puskesmas' | 'Rumah Sakit'
    lingkungan_dbd?: string[] // Checkbox: Genangan air, Tetangga sakit, Butuh fogging

    // LOGIC B: Jika "Stunting / Gizi Buruk"
    berat_badan?: number // kg
    tinggi_badan?: number // cm
    umur_bulan?: number // bulan
    status_pmt?: boolean // Sudah dapat MT?
    indikasi_pertumbuhan?: string[] // Checkbox: Tubuh Anak Terlihat Pendek, Anak Terlihat Sangat Kurus, Sering Sakit (Batuk/Diare Berulang), Belum/Jarang ke Posyandu

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
        perkembangan_kasus: 'Positif DBD',
        lokasi_perawatan: 'Rumah Sakit',
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
        indikasi_pertumbuhan: ['Tubuh Anak Terlihat Pendek', 'Sering Sakit (Batuk/Diare Berulang)'],
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
        perkembangan_kasus: 'Terindikasi DBD',
        lokasi_perawatan: 'Di rumah',
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
        indikasi_pertumbuhan: ['Anak Terlihat Sangat Kurus', 'Belum/Jarang ke Posyandu'],
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
        perkembangan_kasus: 'Sembuh',
        lokasi_perawatan: 'Puskesmas',
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
    },
    {
        id: '11',
        nama_warga: 'Rina Wijaya',
        nik: '3201123456780011',
        pelapor: 'Bu RT',
        rt: '02',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Positif DBD',
        lokasi_perawatan: 'Rumah Sakit',
        lingkungan_dbd: ['Ada genangan air/jentik'],
        intervensi_rt: ['Lapor Bidan Desa / Puskesmas'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-03-01',
    },
    // 12. DBD
    {
        id: '12',
        nama_warga: 'Suryo',
        nik: '3201123456780012',
        pelapor: 'Warga',
        rt: '05',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Sembuh',
        lokasi_perawatan: 'Di rumah',
        intervensi_rt: ['Kerja Bakti (PSN/3M)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-02',
    },
    // 13. Stunting
    {
        id: '13',
        nama_warga: 'Anak dari Ibu Ani',
        nik: '3201123456780013',
        pelapor: 'Bu RT',
        rt: '03',
        isu_kesehatan: 'Stunting / Gizi Buruk',
        berat_badan: 7.2,
        tinggi_badan: 70,
        umur_bulan: 24,
        status_pmt: false,
        indikasi_pertumbuhan: ['Tubuh Anak Terlihat Pendek'],
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-03',
    },
    // 14. Ibu Hamil
    {
        id: '14',
        nama_warga: 'Ibu Maya',
        nik: '3201123456780014',
        pelapor: 'Kader Posyandu',
        rt: '01',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        usia_kandungan: 'Trimester 2 (4-6 Bulan)',
        faktor_risiko: ['Jarak Kehamilan Terlalu Dekat (<2th)'],
        intervensi_rt: ['Lapor Bidan Desa / Puskesmas'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-04',
    },
    // 15. BPJS
    {
        id: '15',
        nama_warga: 'Pak Bambang',
        nik: '3201123456780015',
        pelapor: 'Pak RT',
        rt: '04',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'Tidak Tahu Cara Daftar',
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-05',
    },
    // 16. DBD
    {
        id: '16',
        nama_warga: 'Lani',
        nik: '3201123456780016',
        pelapor: 'Warga',
        rt: '03',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Terindikasi DBD',
        lokasi_perawatan: 'Puskesmas',
        intervensi_rt: ['Lapor Bidan Desa / Puskesmas'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-03-06',
    },
    // 17. DBD
    {
        id: '17',
        nama_warga: 'Hendra',
        nik: '3201123456780017',
        pelapor: 'Pak RT',
        rt: '01',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Sembuh',
        lokasi_perawatan: 'Rumah Sakit',
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-07',
    },
    // 18. Stunting
    {
        id: '18',
        nama_warga: 'Anak dari Ibu Sari',
        nik: '3201123456780018',
        pelapor: 'Kader Posyandu',
        rt: '02',
        isu_kesehatan: 'Stunting / Gizi Buruk',
        berat_badan: 8.5,
        tinggi_badan: 75,
        umur_bulan: 28,
        status_pmt: true,
        indikasi_pertumbuhan: ['Anak Terlihat Sangat Kurus', 'Belum/Jarang ke Posyandu'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-03-08',
    },
    // 19. Ibu Hamil
    {
        id: '19',
        nama_warga: 'Ibu Linda',
        nik: '3201123456780019',
        pelapor: 'Bu RT',
        rt: '05',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        usia_kandungan: 'Trimester 3 (7-9 Bulan)',
        faktor_risiko: ['Darah Tinggi (Hipertensi)'],
        status_kesehatan: 'Kritis',
        tanggal_laporan: '2024-03-09',
    },
    // 20. BPJS
    {
        id: '20',
        nama_warga: 'Pak Slamet',
        nik: '3201123456780020',
        pelapor: 'Pak RT',
        rt: '03',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'KTP/KK Bermasalah',
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-10',
    },
    // 21. DBD
    {
        id: '21',
        nama_warga: 'Joko',
        nik: '3201123456780021',
        pelapor: 'Warga',
        rt: '02',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Positif DBD',
        lokasi_perawatan: 'Puskesmas',
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-03-11',
    },
    // 22. DBD
    {
        id: '22',
        nama_warga: 'Siska',
        nik: '3201123456780022',
        pelapor: 'Bu RT',
        rt: '04',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Sembuh',
        lokasi_perawatan: 'Di rumah',
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-12',
    },
    // 23. Stunting
    {
        id: '23',
        nama_warga: 'Anak dari Ibu Dewi',
        nik: '3201123456780023',
        pelapor: 'Kader Posyandu',
        rt: '01',
        isu_kesehatan: 'Stunting / Gizi Buruk',
        berat_badan: 6.8,
        tinggi_badan: 68,
        umur_bulan: 18,
        status_pmt: false,
        indikasi_pertumbuhan: ['Tubuh Anak Terlihat Pendek', 'Sering Sakit (Batuk/Diare Berulang)'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-03-13',
    },
    // 24. Ibu Hamil
    {
        id: '24',
        nama_warga: 'Ibu Nur',
        nik: '3201123456780024',
        pelapor: 'Pak RT',
        rt: '03',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        usia_kandungan: 'Trimester 2 (4-6 Bulan)',
        faktor_risiko: ['Kurang Energi (Kurus/Lemas)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-14',
    },
    // 25. BPJS
    {
        id: '25',
        nama_warga: 'Ibu Titin',
        nik: '3201123456780025',
        pelapor: 'Bu RT',
        rt: '02',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'BPJS Mati (Tunggakan)',
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-15',
    },
    // 26. DBD
    {
        id: '26',
        nama_warga: 'Aris',
        nik: '3201123456780026',
        pelapor: 'Warga',
        rt: '05',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Terindikasi DBD',
        lokasi_perawatan: 'Di rumah',
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-16',
    },
    // 27. DBD
    {
        id: '27',
        nama_warga: 'Mira',
        nik: '3201123456780027',
        pelapor: 'Bu RT',
        rt: '01',
        isu_kesehatan: 'Wabah DBD',
        perkembangan_kasus: 'Positif DBD',
        lokasi_perawatan: 'Rumah Sakit',
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-03-17',
    },
    // 28. Stunting
    {
        id: '28',
        nama_warga: 'Anak dari Ibu Yuli',
        nik: '3201123456780028',
        pelapor: 'Kader Posyandu',
        rt: '04',
        isu_kesehatan: 'Stunting / Gizi Buruk',
        berat_badan: 10.2,
        tinggi_badan: 85,
        umur_bulan: 42,
        status_pmt: true,
        indikasi_pertumbuhan: ['Belum/Jarang ke Posyandu'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-18',
    },
    // 29. Ibu Hamil
    {
        id: '29',
        nama_warga: 'Ibu Vera',
        nik: '3201123456780029',
        pelapor: 'Bu RT',
        rt: '03',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        usia_kandungan: 'Trimester 1 (1-3 Bulan)',
        faktor_risiko: ['Usia Terlalu Muda (<20) / Tua (>35)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-19',
    },
    // 30. BPJS
    {
        id: '30',
        nama_warga: 'Pak Kurnia',
        nik: '3201123456780030',
        pelapor: 'Pak RT',
        rt: '01',
        isu_kesehatan: 'Warga Belum BPJS',
        alasan_bpjs: 'Tidak Mampu Bayar Iuran',
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-03-20',
    }
]
