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
    {
        "id": "1",
        "nama_warga": "Duane Padberg",
        "nik": "3201126598050001",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-03"
    },
    {
        "id": "2",
        "nama_warga": "Jerry Cummings",
        "nik": "3201126622250001",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-19"
    },
    {
        "id": "3",
        "nama_warga": "Elijah Daugherty",
        "nik": "3201125563050001",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-06"
    },
    {
        "id": "4",
        "nama_warga": "Douglas Homenick I",
        "nik": "3201124989410001",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-26"
    },
    {
        "id": "5",
        "nama_warga": "Arnold Jacobi",
        "nik": "3201127185480001",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-11"
    },
    {
        "id": "6",
        "nama_warga": "Greg Schowalter",
        "nik": "3201125612720001",
        "pelapor": "Kader Posyandu",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-14"
    },
    {
        "id": "7",
        "nama_warga": "Sean Abernathy",
        "nik": "3201124890650001",
        "pelapor": "Warga",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-06"
    },
    {
        "id": "8",
        "nama_warga": "Anita Rice",
        "nik": "3201122763010001",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-14"
    },
    {
        "id": "9",
        "nama_warga": "Elaine Waelchi",
        "nik": "3201123329410001",
        "pelapor": "Kader Posyandu",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-21"
    },
    {
        "id": "10",
        "nama_warga": "Minnie Buckridge",
        "nik": "3201121692280001",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-21"
    },
    {
        "id": "11",
        "nama_warga": "Dave Runolfsson",
        "nik": "3201126492170001",
        "pelapor": "Warga",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-24"
    },
    {
        "id": "12",
        "nama_warga": "Alison Parker DDS",
        "nik": "3201129349160001",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-23"
    },
    {
        "id": "13",
        "nama_warga": "Sue Herzog",
        "nik": "3201122085920001",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-16"
    },
    {
        "id": "14",
        "nama_warga": "Jeremy Bernhard",
        "nik": "3201125855070001",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-19"
    },
    {
        "id": "15",
        "nama_warga": "Edmund Swift",
        "nik": "3201129706800001",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-19"
    },
    {
        "id": "16",
        "nama_warga": "Sylvia Frami",
        "nik": "3201123917580001",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-19"
    },
    {
        "id": "17",
        "nama_warga": "Winston Howell",
        "nik": "3201128168390001",
        "pelapor": "Warga",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-17"
    },
    {
        "id": "18",
        "nama_warga": "Gayle Reynolds",
        "nik": "3201127206940001",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-25"
    },
    {
        "id": "19",
        "nama_warga": "Shelley Hoeger",
        "nik": "3201128158610001",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-10"
    },
    {
        "id": "20",
        "nama_warga": "Claudia Swift",
        "nik": "3201128748220001",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-26"
    },
    {
        "id": "21",
        "nama_warga": "Naomi Mertz I",
        "nik": "3201124597990001",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-16"
    },
    {
        "id": "22",
        "nama_warga": "Karen Kessler",
        "nik": "3201127139990001",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-01"
    },
    {
        "id": "23",
        "nama_warga": "Kristine Frami",
        "nik": "3201123486140001",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-13"
    },
    {
        "id": "24",
        "nama_warga": "Janis Bartoletti",
        "nik": "3201121873850001",
        "pelapor": "Warga",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-20"
    },
    {
        "id": "25",
        "nama_warga": "Miranda Lang",
        "nik": "3201122836650001",
        "pelapor": "Warga",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-29"
    },
    {
        "id": "26",
        "nama_warga": "Ms. Elsie Satterfield",
        "nik": "3201126436040001",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-22"
    },
    {
        "id": "27",
        "nama_warga": "Dr. Myra Hoppe",
        "nik": "3201125401370001",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-06"
    },
    {
        "id": "28",
        "nama_warga": "Maryann Moore",
        "nik": "3201121095810001",
        "pelapor": "Warga",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-01"
    },
    {
        "id": "29",
        "nama_warga": "Theresa Rutherford PhD",
        "nik": "3201121852130001",
        "pelapor": "Bu RT",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-01"
    },
    {
        "id": "30",
        "nama_warga": "Ruby Dibbert",
        "nik": "3201129207540001",
        "pelapor": "Warga",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-13"
    },
    {
        "id": "31",
        "nama_warga": "Dean Gutmann",
        "nik": "3201125136840001",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-18"
    },
    {
        "id": "32",
        "nama_warga": "Mr. Mario Toy PhD",
        "nik": "3201122330050001",
        "pelapor": "Bu RT",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-24"
    },
    {
        "id": "33",
        "nama_warga": "Rodney Erdman",
        "nik": "3201128021220001",
        "pelapor": "Warga",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-02"
    },
    {
        "id": "34",
        "nama_warga": "Sam Haley",
        "nik": "3201127363510001",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-14"
    },
    {
        "id": "35",
        "nama_warga": "Leslie Harris",
        "nik": "3201123538540001",
        "pelapor": "Warga",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-25"
    },
    {
        "id": "36",
        "nama_warga": "Devin Schiller",
        "nik": "3201123680860001",
        "pelapor": "Bu RT",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-30"
    },
    {
        "id": "37",
        "nama_warga": "Jaime Bahringer",
        "nik": "3201129493170001",
        "pelapor": "Warga",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-11"
    },
    {
        "id": "38",
        "nama_warga": "Ms. Sheri Feest",
        "nik": "3201124812470001",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-21"
    },
    {
        "id": "39",
        "nama_warga": "Spencer Corkery-Lesch MD",
        "nik": "3201127288220001",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-05"
    },
    {
        "id": "40",
        "nama_warga": "Maurice Dibbert",
        "nik": "3201123371480001",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-02"
    },
    {
        "id": "41",
        "nama_warga": "Francisco Romaguera",
        "nik": "3201126571480001",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-13"
    },
    {
        "id": "42",
        "nama_warga": "Rudy Vandervort",
        "nik": "3201127473580001",
        "pelapor": "Warga",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-18"
    },
    {
        "id": "43",
        "nama_warga": "Jody Huels",
        "nik": "3201121393510001",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-23"
    },
    {
        "id": "44",
        "nama_warga": "Maxine Dicki",
        "nik": "3201126860430001",
        "pelapor": "Warga",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-16"
    },
    {
        "id": "45",
        "nama_warga": "Randall Kris",
        "nik": "3201125434870001",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-02"
    },
    {
        "id": "46",
        "nama_warga": "Marco Crooks",
        "nik": "3201126177350001",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-30"
    },
    {
        "id": "47",
        "nama_warga": "Trevor Shanahan",
        "nik": "3201128812310001",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-12"
    },
    {
        "id": "48",
        "nama_warga": "Mr. Theodore Abshire",
        "nik": "3201126491430001",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-05"
    },
    {
        "id": "49",
        "nama_warga": "Merle Hudson",
        "nik": "3201126869930001",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-07"
    },
    {
        "id": "50",
        "nama_warga": "Cecil Langosh",
        "nik": "3201121457720001",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-08"
    },
    {
        "id": "51",
        "nama_warga": "Kelly Goldner",
        "nik": "3201121387010001",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-14"
    },
    {
        "id": "52",
        "nama_warga": "Jan Larson",
        "nik": "3201125272910001",
        "pelapor": "Kader Posyandu",
        "rt": "09",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-06"
    },
    {
        "id": "53",
        "nama_warga": "Rochelle Robel DDS",
        "nik": "3201128248420001",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-25"
    },
    {
        "id": "54",
        "nama_warga": "Erin Lindgren",
        "nik": "3201121645910001",
        "pelapor": "Warga",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-18"
    },
    {
        "id": "55",
        "nama_warga": "Valerie Conroy",
        "nik": "3201125852280001",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-07"
    },
    {
        "id": "56",
        "nama_warga": "Tonya Gibson",
        "nik": "3201121688680001",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-24"
    },
    {
        "id": "57",
        "nama_warga": "Javier Zemlak II",
        "nik": "3201126401720001",
        "pelapor": "Warga",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-12"
    },
    {
        "id": "58",
        "nama_warga": "Ebony Predovic",
        "nik": "3201127506140001",
        "pelapor": "Warga",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-15"
    },
    {
        "id": "59",
        "nama_warga": "Lydia Larkin",
        "nik": "3201121096560001",
        "pelapor": "Pak RT",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-25"
    },
    {
        "id": "60",
        "nama_warga": "Bryan Rohan",
        "nik": "3201127266900001",
        "pelapor": "Bu RT",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-03"
    },
    {
        "id": "61",
        "nama_warga": "Everett Robel",
        "nik": "3201127868990001",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-24"
    },
    {
        "id": "62",
        "nama_warga": "Dr. Earl Predovic",
        "nik": "3201124111630001",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-14"
    },
    {
        "id": "63",
        "nama_warga": "Dr. Rufus Schmitt",
        "nik": "3201124988140001",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-05"
    },
    {
        "id": "64",
        "nama_warga": "Santos Hagenes",
        "nik": "3201122690700001",
        "pelapor": "Warga",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-13"
    },
    {
        "id": "65",
        "nama_warga": "James Simonis IV",
        "nik": "3201125473120001",
        "pelapor": "Warga",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-13"
    },
    {
        "id": "66",
        "nama_warga": "Shannon Howe",
        "nik": "3201128798050001",
        "pelapor": "Pak RT",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-05"
    },
    {
        "id": "67",
        "nama_warga": "Fernando Flatley",
        "nik": "3201122750710001",
        "pelapor": "Warga",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-04"
    },
    {
        "id": "68",
        "nama_warga": "Jim Nikolaus",
        "nik": "3201125664290001",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-26"
    },
    {
        "id": "69",
        "nama_warga": "Dorothy Shields",
        "nik": "3201128168310001",
        "pelapor": "Warga",
        "rt": "08",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-24"
    },
    {
        "id": "70",
        "nama_warga": "Marc Glover DDS",
        "nik": "3201126338030001",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-15"
    },
    {
        "id": "71",
        "nama_warga": "Terry Gottlieb II",
        "nik": "3201125339350001",
        "pelapor": "Kader Posyandu",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-07"
    },
    {
        "id": "72",
        "nama_warga": "Santiago Adams",
        "nik": "3201125072320001",
        "pelapor": "Kader Posyandu",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-17"
    },
    {
        "id": "73",
        "nama_warga": "Camille Zboncak",
        "nik": "3201125172880001",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-05"
    },
    {
        "id": "74",
        "nama_warga": "Nina Fisher",
        "nik": "3201122550530001",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-17"
    },
    {
        "id": "75",
        "nama_warga": "Patsy Bergstrom",
        "nik": "3201127828360001",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-18"
    },
    {
        "id": "76",
        "nama_warga": "Chad Simonis",
        "nik": "3201126621640001",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-03"
    },
    {
        "id": "77",
        "nama_warga": "Rosie Turcotte",
        "nik": "3201122347920001",
        "pelapor": "Warga",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-02"
    },
    {
        "id": "78",
        "nama_warga": "Ruth Runte",
        "nik": "3201129056620001",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-10"
    },
    {
        "id": "79",
        "nama_warga": "Tracy Stark",
        "nik": "3201127426790001",
        "pelapor": "Warga",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-15"
    },
    {
        "id": "80",
        "nama_warga": "Jeff West",
        "nik": "3201129047070001",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Positif DBD",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-05"
    },
    {
        "id": "81",
        "nama_warga": "Jenny Hane",
        "nik": "3201128456870001",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-28"
    },
    {
        "id": "82",
        "nama_warga": "Mr. Laurence Collier",
        "nik": "3201123677520001",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-28"
    },
    {
        "id": "83",
        "nama_warga": "Delores Nicolas",
        "nik": "3201128445200001",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-12"
    },
    {
        "id": "84",
        "nama_warga": "Pete Fadel Sr.",
        "nik": "3201125438510001",
        "pelapor": "Warga",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-19"
    },
    {
        "id": "85",
        "nama_warga": "Melinda Daniel",
        "nik": "3201129249400001",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Ada genangan air/jentik",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-21"
    },
    {
        "id": "86",
        "nama_warga": "Ms. Hilda Wiegand",
        "nik": "3201127255180001",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Terindikasi DBD",
        "lokasi_perawatan": "Di rumah",
        "lingkungan_dbd": [
            "Butuh Fogging segera"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-08"
    },
    {
        "id": "87",
        "nama_warga": "Ms. Darlene White",
        "nik": "3201122540320001",
        "pelapor": "Kader Posyandu",
        "rt": "05",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Kerja Bakti (PSN/3M)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-08"
    },
    {
        "id": "88",
        "nama_warga": "Clyde Von",
        "nik": "3201128071580001",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Meninggal",
        "lokasi_perawatan": "Puskesmas",
        "lingkungan_dbd": [
            "Butuh Fogging segera",
            "Ada genangan air/jentik"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-08"
    },
    {
        "id": "89",
        "nama_warga": "Salvatore Reichert",
        "nik": "3201126988470001",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-20"
    },
    {
        "id": "90",
        "nama_warga": "Garrett Fritsch",
        "nik": "3201124067120001",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Wabah DBD",
        "perkembangan_kasus": "Sembuh",
        "lokasi_perawatan": "Rumah Sakit",
        "lingkungan_dbd": [
            "Tetangga ada yang sakit sama"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Kerja Bakti (PSN/3M)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-09"
    },
    {
        "id": "91",
        "nama_warga": "Anak dari Ronnie Bernhard",
        "nik": "3201128063610002",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.798854135077473,
        "tinggi_badan": 89,
        "umur_bulan": 26,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-23"
    },
    {
        "id": "92",
        "nama_warga": "Anak dari Brett Schimmel",
        "nik": "3201126526350002",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.552319197783337,
        "tinggi_badan": 68,
        "umur_bulan": 28,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-29"
    },
    {
        "id": "93",
        "nama_warga": "Anak dari Mike Nitzsche",
        "nik": "3201128818760002",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 7.068107244313507,
        "tinggi_badan": 70,
        "umur_bulan": 22,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-06"
    },
    {
        "id": "94",
        "nama_warga": "Anak dari Elisa Wiza",
        "nik": "3201122858800002",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 7.629705262566643,
        "tinggi_badan": 89,
        "umur_bulan": 52,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-26"
    },
    {
        "id": "95",
        "nama_warga": "Anak dari Leland Gislason-Carroll",
        "nik": "3201121129040002",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.454597988767517,
        "tinggi_badan": 96,
        "umur_bulan": 7,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-22"
    },
    {
        "id": "96",
        "nama_warga": "Anak dari Clifford Dach",
        "nik": "3201123731650002",
        "pelapor": "Kader Posyandu",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.137990706781393,
        "tinggi_badan": 68,
        "umur_bulan": 40,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus",
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-02"
    },
    {
        "id": "97",
        "nama_warga": "Anak dari Melinda Kessler IV",
        "nik": "3201127440920002",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 5.517080235016602,
        "tinggi_badan": 85,
        "umur_bulan": 17,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-30"
    },
    {
        "id": "98",
        "nama_warga": "Anak dari Celia Jones",
        "nik": "3201121316500002",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.71541279346788,
        "tinggi_badan": 94,
        "umur_bulan": 18,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Tubuh Anak Terlihat Pendek",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-05"
    },
    {
        "id": "99",
        "nama_warga": "Anak dari Mercedes Hyatt",
        "nik": "3201125141230002",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.170347346639529,
        "tinggi_badan": 74,
        "umur_bulan": 17,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-16"
    },
    {
        "id": "100",
        "nama_warga": "Anak dari Dr. Gail Ondricka",
        "nik": "3201126789160002",
        "pelapor": "Kader Posyandu",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 5.192103723005173,
        "tinggi_badan": 83,
        "umur_bulan": 49,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-12"
    },
    {
        "id": "101",
        "nama_warga": "Anak dari Mr. Ernest Weber",
        "nik": "3201129499920002",
        "pelapor": "Pak RT",
        "rt": "07",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 5.119358619678666,
        "tinggi_badan": 69,
        "umur_bulan": 10,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-10"
    },
    {
        "id": "102",
        "nama_warga": "Anak dari Nancy Nitzsche",
        "nik": "3201122864950002",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.251937230972898,
        "tinggi_badan": 89,
        "umur_bulan": 51,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-21"
    },
    {
        "id": "103",
        "nama_warga": "Anak dari Christopher Lesch",
        "nik": "3201122334270002",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.965366870107191,
        "tinggi_badan": 63,
        "umur_bulan": 13,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-19"
    },
    {
        "id": "104",
        "nama_warga": "Anak dari Ernesto Terry",
        "nik": "3201123874400002",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.433355383865253,
        "tinggi_badan": 63,
        "umur_bulan": 39,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-05"
    },
    {
        "id": "105",
        "nama_warga": "Anak dari Luis Wintheiser IV",
        "nik": "3201129095320002",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.040982294934695,
        "tinggi_badan": 67,
        "umur_bulan": 39,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-10-28"
    },
    {
        "id": "106",
        "nama_warga": "Anak dari Dr. Jimmie Cruickshank",
        "nik": "3201123311670002",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.911759506905714,
        "tinggi_badan": 82,
        "umur_bulan": 8,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-05"
    },
    {
        "id": "107",
        "nama_warga": "Anak dari Claudia Schamberger",
        "nik": "3201129576620002",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.056371205627912,
        "tinggi_badan": 86,
        "umur_bulan": 51,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-26"
    },
    {
        "id": "108",
        "nama_warga": "Anak dari Eddie Waters",
        "nik": "3201123691270002",
        "pelapor": "Kader Posyandu",
        "rt": "05",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.602844407368947,
        "tinggi_badan": 70,
        "umur_bulan": 31,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-15"
    },
    {
        "id": "109",
        "nama_warga": "Anak dari Amber Olson",
        "nik": "3201124248900002",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.80296286262905,
        "tinggi_badan": 93,
        "umur_bulan": 34,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-03"
    },
    {
        "id": "110",
        "nama_warga": "Anak dari Mr. Christopher Ritchie",
        "nik": "3201126743120002",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.8266901680872785,
        "tinggi_badan": 63,
        "umur_bulan": 26,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-19"
    },
    {
        "id": "111",
        "nama_warga": "Anak dari Pauline Baumbach",
        "nik": "3201123060750002",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.931493100481577,
        "tinggi_badan": 63,
        "umur_bulan": 47,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-18"
    },
    {
        "id": "112",
        "nama_warga": "Anak dari Sidney Beer",
        "nik": "3201126470310002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.021120113590348,
        "tinggi_badan": 84,
        "umur_bulan": 52,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-20"
    },
    {
        "id": "113",
        "nama_warga": "Anak dari Pete Stehr",
        "nik": "3201122854240002",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.658199618912022,
        "tinggi_badan": 82,
        "umur_bulan": 43,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-05"
    },
    {
        "id": "114",
        "nama_warga": "Anak dari Heather Considine",
        "nik": "3201126953220002",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 5.107212248702794,
        "tinggi_badan": 64,
        "umur_bulan": 9,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-27"
    },
    {
        "id": "115",
        "nama_warga": "Anak dari Mr. Dallas Green",
        "nik": "3201126527670002",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.258893469772296,
        "tinggi_badan": 82,
        "umur_bulan": 48,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-01"
    },
    {
        "id": "116",
        "nama_warga": "Anak dari Dawn Mosciski-Huels",
        "nik": "3201123828940002",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 5.374698636224188,
        "tinggi_badan": 63,
        "umur_bulan": 23,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-14"
    },
    {
        "id": "117",
        "nama_warga": "Anak dari Joel Stiedemann",
        "nik": "3201121118640002",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.916678073345965,
        "tinggi_badan": 89,
        "umur_bulan": 47,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-27"
    },
    {
        "id": "118",
        "nama_warga": "Anak dari Jodi Schuster-Wehner",
        "nik": "3201124876780002",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.207592929879493,
        "tinggi_badan": 99,
        "umur_bulan": 50,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Tubuh Anak Terlihat Pendek",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-26"
    },
    {
        "id": "119",
        "nama_warga": "Anak dari Sophie McCullough",
        "nik": "3201128997590002",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.863790336838726,
        "tinggi_badan": 90,
        "umur_bulan": 50,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-14"
    },
    {
        "id": "120",
        "nama_warga": "Anak dari Anne Ernser-Abbott",
        "nik": "3201128427860002",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.495699088083738,
        "tinggi_badan": 74,
        "umur_bulan": 23,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-07"
    },
    {
        "id": "121",
        "nama_warga": "Anak dari Gilbert Harris",
        "nik": "3201123082310002",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.126973366543602,
        "tinggi_badan": 85,
        "umur_bulan": 51,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-15"
    },
    {
        "id": "122",
        "nama_warga": "Anak dari Domingo Witting",
        "nik": "3201123732710002",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.394997202479228,
        "tinggi_badan": 69,
        "umur_bulan": 48,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-19"
    },
    {
        "id": "123",
        "nama_warga": "Anak dari Rosa Pouros",
        "nik": "3201126182340002",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.338718315966268,
        "tinggi_badan": 62,
        "umur_bulan": 28,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-09"
    },
    {
        "id": "124",
        "nama_warga": "Anak dari Kristen Kunze",
        "nik": "3201129158890002",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.173524963855863,
        "tinggi_badan": 71,
        "umur_bulan": 39,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-19"
    },
    {
        "id": "125",
        "nama_warga": "Anak dari Katherine Murphy",
        "nik": "3201123250050002",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.690923370686512,
        "tinggi_badan": 92,
        "umur_bulan": 54,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-13"
    },
    {
        "id": "126",
        "nama_warga": "Anak dari Josephine Armstrong",
        "nik": "3201122466210002",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 9.456870081957007,
        "tinggi_badan": 73,
        "umur_bulan": 37,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-10-25"
    },
    {
        "id": "127",
        "nama_warga": "Anak dari Francis Lockman",
        "nik": "3201125843540002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.583721580184582,
        "tinggi_badan": 90,
        "umur_bulan": 48,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-22"
    },
    {
        "id": "128",
        "nama_warga": "Anak dari Eileen Cruickshank",
        "nik": "3201123654180002",
        "pelapor": "Bu RT",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.789025733616853,
        "tinggi_badan": 67,
        "umur_bulan": 27,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-16"
    },
    {
        "id": "129",
        "nama_warga": "Anak dari Miss Della Kling",
        "nik": "3201127592290002",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.520766293631242,
        "tinggi_badan": 72,
        "umur_bulan": 39,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-27"
    },
    {
        "id": "130",
        "nama_warga": "Anak dari Randolph Littel",
        "nik": "3201129174460002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 5.899488643357137,
        "tinggi_badan": 92,
        "umur_bulan": 41,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-06"
    },
    {
        "id": "131",
        "nama_warga": "Anak dari Rosemarie Streich",
        "nik": "3201126001570002",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.106418816957328,
        "tinggi_badan": 71,
        "umur_bulan": 30,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-04"
    },
    {
        "id": "132",
        "nama_warga": "Anak dari Ms. Eileen Altenwerth",
        "nik": "3201121164060002",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.940584463716002,
        "tinggi_badan": 87,
        "umur_bulan": 37,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-13"
    },
    {
        "id": "133",
        "nama_warga": "Anak dari Katrina Berge",
        "nik": "3201129775210002",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.563037110947175,
        "tinggi_badan": 83,
        "umur_bulan": 30,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-02"
    },
    {
        "id": "134",
        "nama_warga": "Anak dari Miranda Walter",
        "nik": "3201127463990002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.758952453799992,
        "tinggi_badan": 93,
        "umur_bulan": 12,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-27"
    },
    {
        "id": "135",
        "nama_warga": "Anak dari Horace Kuphal",
        "nik": "3201123329690002",
        "pelapor": "Kader Posyandu",
        "rt": "09",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.372756779619299,
        "tinggi_badan": 90,
        "umur_bulan": 43,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-09"
    },
    {
        "id": "136",
        "nama_warga": "Anak dari Geoffrey Schiller",
        "nik": "3201123787950002",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.657887240101571,
        "tinggi_badan": 92,
        "umur_bulan": 44,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-17"
    },
    {
        "id": "137",
        "nama_warga": "Anak dari Bridget Lueilwitz",
        "nik": "3201129115520002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.634391442665406,
        "tinggi_badan": 73,
        "umur_bulan": 35,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-02"
    },
    {
        "id": "138",
        "nama_warga": "Anak dari Jo Kassulke",
        "nik": "3201128736800002",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.855537577404572,
        "tinggi_badan": 90,
        "umur_bulan": 18,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-29"
    },
    {
        "id": "139",
        "nama_warga": "Anak dari Yolanda Mayer III",
        "nik": "3201122930410002",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.929427981192955,
        "tinggi_badan": 87,
        "umur_bulan": 16,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-13"
    },
    {
        "id": "140",
        "nama_warga": "Anak dari Sarah Mitchell",
        "nik": "3201126330330002",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 9.831290077184198,
        "tinggi_badan": 62,
        "umur_bulan": 14,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-14"
    },
    {
        "id": "141",
        "nama_warga": "Anak dari Enrique Ziemann",
        "nik": "3201125741990002",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.103500209791301,
        "tinggi_badan": 99,
        "umur_bulan": 26,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-02"
    },
    {
        "id": "142",
        "nama_warga": "Anak dari Dr. Franklin Bailey",
        "nik": "3201125807060002",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 9.48350716950603,
        "tinggi_badan": 80,
        "umur_bulan": 42,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-29"
    },
    {
        "id": "143",
        "nama_warga": "Anak dari Ernestine Simonis",
        "nik": "3201127467500002",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.66388351504226,
        "tinggi_badan": 88,
        "umur_bulan": 24,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-26"
    },
    {
        "id": "144",
        "nama_warga": "Anak dari Don Osinski",
        "nik": "3201123454330002",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.69897807131016,
        "tinggi_badan": 77,
        "umur_bulan": 40,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus",
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-21"
    },
    {
        "id": "145",
        "nama_warga": "Anak dari Vera Thompson",
        "nik": "3201125574560002",
        "pelapor": "Bu RT",
        "rt": "07",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.539515385714299,
        "tinggi_badan": 87,
        "umur_bulan": 41,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-20"
    },
    {
        "id": "146",
        "nama_warga": "Anak dari Fannie Gleichner",
        "nik": "3201125836580002",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.580455231628324,
        "tinggi_badan": 76,
        "umur_bulan": 44,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-28"
    },
    {
        "id": "147",
        "nama_warga": "Anak dari Lola Satterfield",
        "nik": "3201125960640002",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.558295602084078,
        "tinggi_badan": 63,
        "umur_bulan": 44,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-21"
    },
    {
        "id": "148",
        "nama_warga": "Anak dari Irvin Bogisich",
        "nik": "3201127255140002",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.985871170678877,
        "tinggi_badan": 60,
        "umur_bulan": 49,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-10-21"
    },
    {
        "id": "149",
        "nama_warga": "Anak dari Lyle Kiehn-Dooley",
        "nik": "3201129316490002",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.097708582415349,
        "tinggi_badan": 89,
        "umur_bulan": 50,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-12"
    },
    {
        "id": "150",
        "nama_warga": "Anak dari Mario Lueilwitz",
        "nik": "3201122709810002",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.316547341931638,
        "tinggi_badan": 76,
        "umur_bulan": 50,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-08"
    },
    {
        "id": "151",
        "nama_warga": "Anak dari Johnathan Langworth",
        "nik": "3201129079320002",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 7.5859038138534896,
        "tinggi_badan": 85,
        "umur_bulan": 30,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu",
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-10"
    },
    {
        "id": "152",
        "nama_warga": "Anak dari Alvin Marks",
        "nik": "3201121439010002",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.984903460754564,
        "tinggi_badan": 62,
        "umur_bulan": 7,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-12"
    },
    {
        "id": "153",
        "nama_warga": "Anak dari Tina Wyman",
        "nik": "3201128700680002",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.033022363959283,
        "tinggi_badan": 91,
        "umur_bulan": 28,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-11"
    },
    {
        "id": "154",
        "nama_warga": "Anak dari Jon Von",
        "nik": "3201128862370002",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 13.98187872739918,
        "tinggi_badan": 74,
        "umur_bulan": 51,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-26"
    },
    {
        "id": "155",
        "nama_warga": "Anak dari Muriel Brekke",
        "nik": "3201123651770002",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.735111927926138,
        "tinggi_badan": 92,
        "umur_bulan": 39,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-04"
    },
    {
        "id": "156",
        "nama_warga": "Anak dari Ella Bergstrom",
        "nik": "3201121237570002",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.553464343856433,
        "tinggi_badan": 84,
        "umur_bulan": 34,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-01"
    },
    {
        "id": "157",
        "nama_warga": "Anak dari Hannah Friesen",
        "nik": "3201127810290002",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.00309796292678,
        "tinggi_badan": 62,
        "umur_bulan": 46,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-03"
    },
    {
        "id": "158",
        "nama_warga": "Anak dari Clay Hilpert",
        "nik": "3201127594080002",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 6.370271961691036,
        "tinggi_badan": 71,
        "umur_bulan": 27,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-20"
    },
    {
        "id": "159",
        "nama_warga": "Anak dari Katherine Windler",
        "nik": "3201121033030002",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.090192603177375,
        "tinggi_badan": 73,
        "umur_bulan": 41,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Belum/Jarang ke Posyandu",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-04"
    },
    {
        "id": "160",
        "nama_warga": "Anak dari Marianne McClure",
        "nik": "3201127054470002",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 7.018458284810924,
        "tinggi_badan": 96,
        "umur_bulan": 16,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-09"
    },
    {
        "id": "161",
        "nama_warga": "Anak dari Marvin Brown",
        "nik": "3201126055600002",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.012202171576632,
        "tinggi_badan": 76,
        "umur_bulan": 10,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus",
            "Tubuh Anak Terlihat Pendek"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-05"
    },
    {
        "id": "162",
        "nama_warga": "Anak dari Roy Rau I",
        "nik": "3201123092690002",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.945824246037025,
        "tinggi_badan": 72,
        "umur_bulan": 35,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Tubuh Anak Terlihat Pendek",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-24"
    },
    {
        "id": "163",
        "nama_warga": "Anak dari Naomi Bartell",
        "nik": "3201126537110002",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.08599876526796,
        "tinggi_badan": 95,
        "umur_bulan": 38,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)",
            "Belum/Jarang ke Posyandu",
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-11"
    },
    {
        "id": "164",
        "nama_warga": "Anak dari Andrew Runte PhD",
        "nik": "3201126266940002",
        "pelapor": "Bu RT",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 11.49613953941584,
        "tinggi_badan": 64,
        "umur_bulan": 21,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Belum/Jarang ke Posyandu",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-25"
    },
    {
        "id": "165",
        "nama_warga": "Anak dari Cathy Muller",
        "nik": "3201125482080002",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 14.408753554106388,
        "tinggi_badan": 95,
        "umur_bulan": 25,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus",
            "Belum/Jarang ke Posyandu",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-09"
    },
    {
        "id": "166",
        "nama_warga": "Anak dari Dan Kling",
        "nik": "3201126963260002",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.169551705240776,
        "tinggi_badan": 70,
        "umur_bulan": 11,
        "status_pmt": true,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-15"
    },
    {
        "id": "167",
        "nama_warga": "Anak dari Carlton Veum",
        "nik": "3201125838610002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 12.03040944912029,
        "tinggi_badan": 69,
        "umur_bulan": 16,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Tubuh Anak Terlihat Pendek",
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas",
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-29"
    },
    {
        "id": "168",
        "nama_warga": "Anak dari Marco Ward DVM",
        "nik": "3201123831560002",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.495703511520228,
        "tinggi_badan": 77,
        "umur_bulan": 50,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Sering Sakit (Batuk/Diare Berulang)"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)",
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-20"
    },
    {
        "id": "169",
        "nama_warga": "Anak dari Orlando Rutherford",
        "nik": "3201121526230002",
        "pelapor": "Pak RT",
        "rt": "07",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 8.610669071456448,
        "tinggi_badan": 90,
        "umur_bulan": 8,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Anak Terlihat Sangat Kurus"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-18"
    },
    {
        "id": "170",
        "nama_warga": "Anak dari Sonia Huel",
        "nik": "3201127386680002",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Stunting / Gizi Buruk",
        "berat_badan": 10.485741714429826,
        "tinggi_badan": 86,
        "umur_bulan": 53,
        "status_pmt": false,
        "indikasi_pertumbuhan": [
            "Belum/Jarang ke Posyandu"
        ],
        "intervensi_rt": [
            "Ajukan Bantuan Makanan (PMT)"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-19"
    },
    {
        "id": "171",
        "nama_warga": "Angelina Hilpert",
        "nik": "3201127011760003",
        "pelapor": "Bu RT",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-10"
    },
    {
        "id": "172",
        "nama_warga": "Marian Jast IV",
        "nik": "3201123331200003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-15"
    },
    {
        "id": "173",
        "nama_warga": "Blanca Bechtelar",
        "nik": "3201127950410003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-29"
    },
    {
        "id": "174",
        "nama_warga": "Marjorie Powlowski-Mante",
        "nik": "3201129799880003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-31"
    },
    {
        "id": "175",
        "nama_warga": "Mandy Crist",
        "nik": "3201129204460003",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-14"
    },
    {
        "id": "176",
        "nama_warga": "Sherry Rodriguez",
        "nik": "3201129072230003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-20"
    },
    {
        "id": "177",
        "nama_warga": "Miss Robin Cartwright V",
        "nik": "3201125638480003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-09-20"
    },
    {
        "id": "178",
        "nama_warga": "Deborah O'Keefe",
        "nik": "3201126347070003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-10-07"
    },
    {
        "id": "179",
        "nama_warga": "Diana Berge",
        "nik": "3201125878490003",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-15"
    },
    {
        "id": "180",
        "nama_warga": "Mindy Breitenberg",
        "nik": "3201128707640003",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-23"
    },
    {
        "id": "181",
        "nama_warga": "Gertrude Will PhD",
        "nik": "3201128706060003",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-26"
    },
    {
        "id": "182",
        "nama_warga": "Lydia Buckridge",
        "nik": "3201126935760003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-21"
    },
    {
        "id": "183",
        "nama_warga": "Mrs. Hope Goldner-Medhurst DVM",
        "nik": "3201123689840003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-12"
    },
    {
        "id": "184",
        "nama_warga": "Donna Bruen",
        "nik": "3201121218420003",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-19"
    },
    {
        "id": "185",
        "nama_warga": "Mrs. Emma Bauch",
        "nik": "3201127868410003",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-14"
    },
    {
        "id": "186",
        "nama_warga": "Lucy Treutel",
        "nik": "3201127744130003",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-22"
    },
    {
        "id": "187",
        "nama_warga": "Linda Abernathy",
        "nik": "3201123357710003",
        "pelapor": "Bidan",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-23"
    },
    {
        "id": "188",
        "nama_warga": "Juanita Feest",
        "nik": "3201123323180003",
        "pelapor": "Bidan",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-16"
    },
    {
        "id": "189",
        "nama_warga": "Mrs. Toni Goyette",
        "nik": "3201121552600003",
        "pelapor": "Kader Posyandu",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-03-13"
    },
    {
        "id": "190",
        "nama_warga": "Annie Bayer",
        "nik": "3201128106830003",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-25"
    },
    {
        "id": "191",
        "nama_warga": "Becky Graham",
        "nik": "3201123485300003",
        "pelapor": "Bidan",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-17"
    },
    {
        "id": "192",
        "nama_warga": "Teresa Hayes",
        "nik": "3201129669420003",
        "pelapor": "Bidan",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-16"
    },
    {
        "id": "193",
        "nama_warga": "Ms. Susan Goldner",
        "nik": "3201123281970003",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-26"
    },
    {
        "id": "194",
        "nama_warga": "Cecelia Kemmer",
        "nik": "3201128335610003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-09-24"
    },
    {
        "id": "195",
        "nama_warga": "Joanne Nienow",
        "nik": "3201127969970003",
        "pelapor": "Kader Posyandu",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-25"
    },
    {
        "id": "196",
        "nama_warga": "Jacqueline Prosacco",
        "nik": "3201125612320003",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-27"
    },
    {
        "id": "197",
        "nama_warga": "Miss Denise Rice",
        "nik": "3201123126300003",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-19"
    },
    {
        "id": "198",
        "nama_warga": "Elisa Halvorson",
        "nik": "3201129252070003",
        "pelapor": "Bidan",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-22"
    },
    {
        "id": "199",
        "nama_warga": "Miss Vivian Bins",
        "nik": "3201124622320003",
        "pelapor": "Bidan",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-17"
    },
    {
        "id": "200",
        "nama_warga": "Becky Fahey",
        "nik": "3201128327710003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-04"
    },
    {
        "id": "201",
        "nama_warga": "Yvonne Franey",
        "nik": "3201127155900003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-10"
    },
    {
        "id": "202",
        "nama_warga": "Ruby Gislason",
        "nik": "3201126541930003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-29"
    },
    {
        "id": "203",
        "nama_warga": "Barbara McCullough",
        "nik": "3201129521160003",
        "pelapor": "Bidan",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-09"
    },
    {
        "id": "204",
        "nama_warga": "Theresa Harris",
        "nik": "3201123278340003",
        "pelapor": "Bu RT",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-03-09"
    },
    {
        "id": "205",
        "nama_warga": "Kendra Stehr",
        "nik": "3201129099190003",
        "pelapor": "Bidan",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-05"
    },
    {
        "id": "206",
        "nama_warga": "Ramona Lindgren",
        "nik": "3201128239020003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-11"
    },
    {
        "id": "207",
        "nama_warga": "Heather Jacobi",
        "nik": "3201121785250003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-01"
    },
    {
        "id": "208",
        "nama_warga": "Connie Greenfelder",
        "nik": "3201129061800003",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-24"
    },
    {
        "id": "209",
        "nama_warga": "Connie Goldner I",
        "nik": "3201124213420003",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-18"
    },
    {
        "id": "210",
        "nama_warga": "Lydia Lueilwitz Jr.",
        "nik": "3201129433660003",
        "pelapor": "Bidan",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-13"
    },
    {
        "id": "211",
        "nama_warga": "Margie Beatty",
        "nik": "3201127601720003",
        "pelapor": "Bu RT",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-10"
    },
    {
        "id": "212",
        "nama_warga": "Isabel Cruickshank PhD",
        "nik": "3201126527800003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-09-16"
    },
    {
        "id": "213",
        "nama_warga": "Kayla Larkin",
        "nik": "3201123686370003",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-03-03"
    },
    {
        "id": "214",
        "nama_warga": "Lynda Pfannerstill",
        "nik": "3201124597550003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-06"
    },
    {
        "id": "215",
        "nama_warga": "Esther Ondricka",
        "nik": "3201128335520003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-22"
    },
    {
        "id": "216",
        "nama_warga": "Wanda Orn",
        "nik": "3201125738710003",
        "pelapor": "Bu RT",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-20"
    },
    {
        "id": "217",
        "nama_warga": "Miss Celia Haley",
        "nik": "3201129664540003",
        "pelapor": "Kader Posyandu",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-20"
    },
    {
        "id": "218",
        "nama_warga": "Renee Funk",
        "nik": "3201129321180003",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-03"
    },
    {
        "id": "219",
        "nama_warga": "Erma Kuhlman",
        "nik": "3201124167120003",
        "pelapor": "Bidan",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-19"
    },
    {
        "id": "220",
        "nama_warga": "Elsie Langworth",
        "nik": "3201123890890003",
        "pelapor": "Bidan",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-21"
    },
    {
        "id": "221",
        "nama_warga": "Bessie Feeney DDS",
        "nik": "3201121031970003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-13"
    },
    {
        "id": "222",
        "nama_warga": "Miss Erica Jerde",
        "nik": "3201128980190003",
        "pelapor": "Bidan",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-22"
    },
    {
        "id": "223",
        "nama_warga": "Doris Bartoletti",
        "nik": "3201122639530003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-10"
    },
    {
        "id": "224",
        "nama_warga": "Faith Pouros",
        "nik": "3201124925830003",
        "pelapor": "Kader Posyandu",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-12"
    },
    {
        "id": "225",
        "nama_warga": "Vanessa Boehm",
        "nik": "3201122196520003",
        "pelapor": "Bu RT",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-19"
    },
    {
        "id": "226",
        "nama_warga": "Juana O'Kon",
        "nik": "3201122043800003",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-04"
    },
    {
        "id": "227",
        "nama_warga": "Blanche Schmitt",
        "nik": "3201124448040003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-09-27"
    },
    {
        "id": "228",
        "nama_warga": "Beatrice Grimes",
        "nik": "3201123982680003",
        "pelapor": "Kader Posyandu",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-18"
    },
    {
        "id": "229",
        "nama_warga": "Vickie Wolff",
        "nik": "3201126309530003",
        "pelapor": "Bidan",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-07"
    },
    {
        "id": "230",
        "nama_warga": "Antonia Schulist MD",
        "nik": "3201123794920003",
        "pelapor": "Bidan",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-01-31"
    },
    {
        "id": "231",
        "nama_warga": "Connie Abernathy",
        "nik": "3201128433110003",
        "pelapor": "Bidan",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-06"
    },
    {
        "id": "232",
        "nama_warga": "Wendy Smith",
        "nik": "3201129773720003",
        "pelapor": "Bidan",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-07"
    },
    {
        "id": "233",
        "nama_warga": "Clara Gerhold",
        "nik": "3201129496840003",
        "pelapor": "Kader Posyandu",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-21"
    },
    {
        "id": "234",
        "nama_warga": "Dr. Dorothy Gerhold",
        "nik": "3201126194440003",
        "pelapor": "Bidan",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-01"
    },
    {
        "id": "235",
        "nama_warga": "Bernadette Gusikowski",
        "nik": "3201122574600003",
        "pelapor": "Bidan",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-26"
    },
    {
        "id": "236",
        "nama_warga": "Fannie Willms",
        "nik": "3201128238740003",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-03"
    },
    {
        "id": "237",
        "nama_warga": "Marilyn Prosacco",
        "nik": "3201125756770003",
        "pelapor": "Bidan",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-27"
    },
    {
        "id": "238",
        "nama_warga": "Judith Bashirian DVM",
        "nik": "3201126978700003",
        "pelapor": "Bidan",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-14"
    },
    {
        "id": "239",
        "nama_warga": "Penny Champlin",
        "nik": "3201126413070003",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-19"
    },
    {
        "id": "240",
        "nama_warga": "Lindsey Dach",
        "nik": "3201125271650003",
        "pelapor": "Kader Posyandu",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-10-26"
    },
    {
        "id": "241",
        "nama_warga": "Kristina Zboncak",
        "nik": "3201126959500003",
        "pelapor": "Bu RT",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-05"
    },
    {
        "id": "242",
        "nama_warga": "Penny Vandervort",
        "nik": "3201124592290003",
        "pelapor": "Bidan",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-04"
    },
    {
        "id": "243",
        "nama_warga": "Eleanor Prosacco II",
        "nik": "3201126624440003",
        "pelapor": "Bu RT",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-28"
    },
    {
        "id": "244",
        "nama_warga": "Deborah Tromp",
        "nik": "3201124427010003",
        "pelapor": "Bidan",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-09"
    },
    {
        "id": "245",
        "nama_warga": "Mrs. Jeannie Kling",
        "nik": "3201124067410003",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-06"
    },
    {
        "id": "246",
        "nama_warga": "Rochelle Purdy",
        "nik": "3201129175090003",
        "pelapor": "Kader Posyandu",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-06"
    },
    {
        "id": "247",
        "nama_warga": "Kristy Von",
        "nik": "3201126461270003",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-03-11"
    },
    {
        "id": "248",
        "nama_warga": "Veronica Kunde",
        "nik": "3201124148550003",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-02-19"
    },
    {
        "id": "249",
        "nama_warga": "Kristin Gerhold",
        "nik": "3201122352050003",
        "pelapor": "Kader Posyandu",
        "rt": "08",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-15"
    },
    {
        "id": "250",
        "nama_warga": "Allison Smith",
        "nik": "3201122061370003",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-05"
    },
    {
        "id": "251",
        "nama_warga": "Thelma Lehner",
        "nik": "3201129397160003",
        "pelapor": "Kader Posyandu",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-29"
    },
    {
        "id": "252",
        "nama_warga": "Kelly Veum",
        "nik": "3201129030790003",
        "pelapor": "Bu RT",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-09"
    },
    {
        "id": "253",
        "nama_warga": "Sharon Skiles",
        "nik": "3201121317850003",
        "pelapor": "Bu RT",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-12"
    },
    {
        "id": "254",
        "nama_warga": "Betsy Kris",
        "nik": "3201128972760003",
        "pelapor": "Bidan",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-06"
    },
    {
        "id": "255",
        "nama_warga": "Elisa Bednar",
        "nik": "3201124232080003",
        "pelapor": "Kader Posyandu",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Tua (>35)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-24"
    },
    {
        "id": "256",
        "nama_warga": "Kay Gusikowski",
        "nik": "3201125101190003",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-22"
    },
    {
        "id": "257",
        "nama_warga": "Ms. Lois Quigley",
        "nik": "3201126863390003",
        "pelapor": "Bu RT",
        "rt": "07",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2026-03-11"
    },
    {
        "id": "258",
        "nama_warga": "Lynne Monahan",
        "nik": "3201125463820003",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Kurang Energi (Kurus/Lemas)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-11-13"
    },
    {
        "id": "259",
        "nama_warga": "Faye Wisozk",
        "nik": "3201123328480003",
        "pelapor": "Kader Posyandu",
        "rt": "06",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-12-26"
    },
    {
        "id": "260",
        "nama_warga": "Mrs. Christina Oberbrunner",
        "nik": "3201121443550003",
        "pelapor": "Bidan",
        "rt": "01",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-16"
    },
    {
        "id": "261",
        "nama_warga": "Lucy Schinner",
        "nik": "3201125136100003",
        "pelapor": "Bu RT",
        "rt": "09",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 2 (4-6 Bulan)",
        "faktor_risiko": [
            "Jarak Kehamilan Terlalu Dekat (<2th)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-25"
    },
    {
        "id": "262",
        "nama_warga": "Susie Armstrong I",
        "nik": "3201126259190003",
        "pelapor": "Bu RT",
        "rt": "05",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 1 (1-3 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-06"
    },
    {
        "id": "263",
        "nama_warga": "Leona Trantow",
        "nik": "3201129338210003",
        "pelapor": "Bidan",
        "rt": "04",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Lain-lain"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Kritis",
        "tanggal_laporan": "2025-10-10"
    },
    {
        "id": "264",
        "nama_warga": "Mrs. Ramona Stamm",
        "nik": "3201125792000003",
        "pelapor": "Kader Posyandu",
        "rt": "02",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Usia Terlalu Muda (<20)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-31"
    },
    {
        "id": "265",
        "nama_warga": "Ruth Vandervort",
        "nik": "3201129954220003",
        "pelapor": "Bidan",
        "rt": "03",
        "isu_kesehatan": "Ibu Hamil Berisiko",
        "usia_kandungan": "Trimester 3 (7-9 Bulan)",
        "faktor_risiko": [
            "Darah Tinggi (Hipertensi)"
        ],
        "intervensi_rt": [
            "Lapor Bidan Desa / Puskesmas"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-20"
    },
    {
        "id": "266",
        "nama_warga": "Elijah Kub PhD",
        "nik": "3201129923640004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-15"
    },
    {
        "id": "267",
        "nama_warga": "Tonya Herzog",
        "nik": "3201124665490004",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-22"
    },
    {
        "id": "268",
        "nama_warga": "Emmett Vandervort",
        "nik": "3201122356620004",
        "pelapor": "Warga Sendiri",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-29"
    },
    {
        "id": "269",
        "nama_warga": "Deanna Nader",
        "nik": "3201124969280004",
        "pelapor": "Warga Sendiri",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-05"
    },
    {
        "id": "270",
        "nama_warga": "Kelley Goodwin",
        "nik": "3201121383060004",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-22"
    },
    {
        "id": "271",
        "nama_warga": "Dr. Pablo Stoltenberg",
        "nik": "3201122468990004",
        "pelapor": "Warga Sendiri",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-07"
    },
    {
        "id": "272",
        "nama_warga": "Delia Turner",
        "nik": "3201128147230004",
        "pelapor": "Warga Sendiri",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-11"
    },
    {
        "id": "273",
        "nama_warga": "Ivan Botsford",
        "nik": "3201123489240004",
        "pelapor": "Warga Sendiri",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-03"
    },
    {
        "id": "274",
        "nama_warga": "Sheila Becker",
        "nik": "3201124196710004",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-17"
    },
    {
        "id": "275",
        "nama_warga": "Theodore Mosciski",
        "nik": "3201122473780004",
        "pelapor": "Warga Sendiri",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-25"
    },
    {
        "id": "276",
        "nama_warga": "Nick Lynch",
        "nik": "3201125262890004",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-21"
    },
    {
        "id": "277",
        "nama_warga": "Arnold Hoppe",
        "nik": "3201128182200004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-05"
    },
    {
        "id": "278",
        "nama_warga": "Rhonda O'Connell",
        "nik": "3201129166900004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-24"
    },
    {
        "id": "279",
        "nama_warga": "Elvira Walker DDS",
        "nik": "3201127175750004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-26"
    },
    {
        "id": "280",
        "nama_warga": "Lucille Ernser",
        "nik": "3201129945650004",
        "pelapor": "Warga Sendiri",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-10"
    },
    {
        "id": "281",
        "nama_warga": "Julius Gleason",
        "nik": "3201121960680004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-21"
    },
    {
        "id": "282",
        "nama_warga": "Alicia Connelly",
        "nik": "3201126843940004",
        "pelapor": "Warga Sendiri",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-06"
    },
    {
        "id": "283",
        "nama_warga": "Randall Daniel",
        "nik": "3201124428990004",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-26"
    },
    {
        "id": "284",
        "nama_warga": "Jenna Farrell",
        "nik": "3201129370420004",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-17"
    },
    {
        "id": "285",
        "nama_warga": "Lynette Labadie",
        "nik": "3201123744560004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-23"
    },
    {
        "id": "286",
        "nama_warga": "Don Parisian",
        "nik": "3201121556930004",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-10"
    },
    {
        "id": "287",
        "nama_warga": "Veronica Gutkowski",
        "nik": "3201124313680004",
        "pelapor": "Warga Sendiri",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-23"
    },
    {
        "id": "288",
        "nama_warga": "Kenny Greenfelder",
        "nik": "3201123939940004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-11"
    },
    {
        "id": "289",
        "nama_warga": "Carol McCullough-Halvorson",
        "nik": "3201127847830004",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-08"
    },
    {
        "id": "290",
        "nama_warga": "Alan Nicolas",
        "nik": "3201128044610004",
        "pelapor": "Warga Sendiri",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-13"
    },
    {
        "id": "291",
        "nama_warga": "Dominick Hills",
        "nik": "3201127639440004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-12"
    },
    {
        "id": "292",
        "nama_warga": "Jodi Kessler",
        "nik": "3201125359210004",
        "pelapor": "Warga Sendiri",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-25"
    },
    {
        "id": "293",
        "nama_warga": "Julian Satterfield",
        "nik": "3201125808450004",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-06"
    },
    {
        "id": "294",
        "nama_warga": "Desiree Schowalter-Krajcik",
        "nik": "3201125754170004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-13"
    },
    {
        "id": "295",
        "nama_warga": "Domingo Bruen",
        "nik": "3201128311060004",
        "pelapor": "Warga Sendiri",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-21"
    },
    {
        "id": "296",
        "nama_warga": "Violet Kovacek",
        "nik": "3201123387460004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-04"
    },
    {
        "id": "297",
        "nama_warga": "Sherry Schuppe I",
        "nik": "3201121109270004",
        "pelapor": "Warga Sendiri",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-06"
    },
    {
        "id": "298",
        "nama_warga": "Van Boyle PhD",
        "nik": "3201124754700004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-16"
    },
    {
        "id": "299",
        "nama_warga": "William Kub",
        "nik": "3201125228610004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-29"
    },
    {
        "id": "300",
        "nama_warga": "Rosemarie O'Kon",
        "nik": "3201122060690004",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-26"
    },
    {
        "id": "301",
        "nama_warga": "Henrietta Stark",
        "nik": "3201125430190004",
        "pelapor": "Warga Sendiri",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-16"
    },
    {
        "id": "302",
        "nama_warga": "Dr. Edith Ritchie",
        "nik": "3201127708280004",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-22"
    },
    {
        "id": "303",
        "nama_warga": "Gordon Runte I",
        "nik": "3201121842090004",
        "pelapor": "Warga Sendiri",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-03"
    },
    {
        "id": "304",
        "nama_warga": "Toby Corwin",
        "nik": "3201129868340004",
        "pelapor": "Warga Sendiri",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-31"
    },
    {
        "id": "305",
        "nama_warga": "Mark Hansen",
        "nik": "3201124104430004",
        "pelapor": "Warga Sendiri",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-13"
    },
    {
        "id": "306",
        "nama_warga": "Natasha Sporer Sr.",
        "nik": "3201123120490004",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-27"
    },
    {
        "id": "307",
        "nama_warga": "Perry Bergstrom",
        "nik": "3201125561790004",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-03"
    },
    {
        "id": "308",
        "nama_warga": "Frank Wiza",
        "nik": "3201129648140004",
        "pelapor": "Warga Sendiri",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-10"
    },
    {
        "id": "309",
        "nama_warga": "Miss Ebony Graham MD",
        "nik": "3201125187350004",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-17"
    },
    {
        "id": "310",
        "nama_warga": "Ervin Gislason",
        "nik": "3201125839350004",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-28"
    },
    {
        "id": "311",
        "nama_warga": "Bradford Shields",
        "nik": "3201126370110004",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-02-05"
    },
    {
        "id": "312",
        "nama_warga": "Delbert Keeling",
        "nik": "3201125432440004",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-13"
    },
    {
        "id": "313",
        "nama_warga": "Mrs. Brenda Kling",
        "nik": "3201123252520004",
        "pelapor": "Warga Sendiri",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-27"
    },
    {
        "id": "314",
        "nama_warga": "Dr. Gilberto Morar",
        "nik": "3201122389130004",
        "pelapor": "Warga Sendiri",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-02"
    },
    {
        "id": "315",
        "nama_warga": "Amelia Crooks III",
        "nik": "3201121058640004",
        "pelapor": "Warga Sendiri",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-12"
    },
    {
        "id": "316",
        "nama_warga": "Francis Schmeler",
        "nik": "3201122480120004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-28"
    },
    {
        "id": "317",
        "nama_warga": "Kelley Langosh",
        "nik": "3201129795650004",
        "pelapor": "Warga Sendiri",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-28"
    },
    {
        "id": "318",
        "nama_warga": "Darrell Jerde",
        "nik": "3201122808050004",
        "pelapor": "Warga Sendiri",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-18"
    },
    {
        "id": "319",
        "nama_warga": "Lynn Senger",
        "nik": "3201128757380004",
        "pelapor": "Warga Sendiri",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-31"
    },
    {
        "id": "320",
        "nama_warga": "Myrtle Breitenberg",
        "nik": "3201128054900004",
        "pelapor": "Pak RT",
        "rt": "09",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-18"
    },
    {
        "id": "321",
        "nama_warga": "Ms. Lindsey Labadie",
        "nik": "3201123010360004",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-11"
    },
    {
        "id": "322",
        "nama_warga": "Javier Goodwin",
        "nik": "3201124845300004",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-09"
    },
    {
        "id": "323",
        "nama_warga": "Paul Quigley",
        "nik": "3201125632290004",
        "pelapor": "Pak RT",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-31"
    },
    {
        "id": "324",
        "nama_warga": "Dale O'Conner",
        "nik": "3201124527980004",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-10"
    },
    {
        "id": "325",
        "nama_warga": "Ross Weissnat I",
        "nik": "3201124617370004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-02-24"
    },
    {
        "id": "326",
        "nama_warga": "Kevin Predovic",
        "nik": "3201128565350004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-03-09"
    },
    {
        "id": "327",
        "nama_warga": "Jay Koss",
        "nik": "3201129028490004",
        "pelapor": "Warga Sendiri",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-30"
    },
    {
        "id": "328",
        "nama_warga": "Mrs. Betsy Kunde-Daugherty",
        "nik": "3201125565760004",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-12-25"
    },
    {
        "id": "329",
        "nama_warga": "Dr. Morris Bauch",
        "nik": "3201128756300004",
        "pelapor": "Warga Sendiri",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-11"
    },
    {
        "id": "330",
        "nama_warga": "Matt Mosciski",
        "nik": "3201129074960004",
        "pelapor": "Warga Sendiri",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-04"
    },
    {
        "id": "331",
        "nama_warga": "Lionel Bergstrom",
        "nik": "3201125446450004",
        "pelapor": "Warga Sendiri",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-11-13"
    },
    {
        "id": "332",
        "nama_warga": "Colin Mraz",
        "nik": "3201123027520004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-11"
    },
    {
        "id": "333",
        "nama_warga": "Miss Pauline Prosacco",
        "nik": "3201124793580004",
        "pelapor": "Pak RT",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-01-14"
    },
    {
        "id": "334",
        "nama_warga": "Mr. Jonathon Crist",
        "nik": "3201121475360004",
        "pelapor": "Warga Sendiri",
        "rt": "01",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-08"
    },
    {
        "id": "335",
        "nama_warga": "Derek McLaughlin-Kuhic",
        "nik": "3201125134100004",
        "pelapor": "Warga Sendiri",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-14"
    },
    {
        "id": "336",
        "nama_warga": "Omar Maggio",
        "nik": "3201122961240004",
        "pelapor": "Warga Sendiri",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-09-12"
    },
    {
        "id": "337",
        "nama_warga": "Nichole Hauck",
        "nik": "3201127312410004",
        "pelapor": "Warga Sendiri",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2026-03-03"
    },
    {
        "id": "338",
        "nama_warga": "Alma Mills-Hansen",
        "nik": "3201125727610004",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-28"
    },
    {
        "id": "339",
        "nama_warga": "Phil Abbott",
        "nik": "3201129475160004",
        "pelapor": "Pak RT",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-09"
    },
    {
        "id": "340",
        "nama_warga": "Terrence Grant-Cremin",
        "nik": "3201122377220004",
        "pelapor": "Pak RT",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-24"
    },
    {
        "id": "341",
        "nama_warga": "Mr. Eduardo Kub I",
        "nik": "3201122767380004",
        "pelapor": "Pak RT",
        "rt": "08",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-08"
    },
    {
        "id": "342",
        "nama_warga": "Lillian Wolf",
        "nik": "3201125474240004",
        "pelapor": "Pak RT",
        "rt": "04",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-09-21"
    },
    {
        "id": "343",
        "nama_warga": "Melanie Kuvalis",
        "nik": "3201122233980004",
        "pelapor": "Warga Sendiri",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-16"
    },
    {
        "id": "344",
        "nama_warga": "Dr. Kurt Bergnaum",
        "nik": "3201128357930004",
        "pelapor": "Warga Sendiri",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-22"
    },
    {
        "id": "345",
        "nama_warga": "Irma Nienow Jr.",
        "nik": "3201127310620004",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-10"
    },
    {
        "id": "346",
        "nama_warga": "Mr. David Erdman",
        "nik": "3201125410240004",
        "pelapor": "Pak RT",
        "rt": "05",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "KTP/KK Bermasalah",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-12-06"
    },
    {
        "id": "347",
        "nama_warga": "Gayle Beier",
        "nik": "3201122260220004",
        "pelapor": "Pak RT",
        "rt": "07",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Mampu Bayar Iuran",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2026-01-27"
    },
    {
        "id": "348",
        "nama_warga": "Brent McKenzie",
        "nik": "3201126245560004",
        "pelapor": "Warga Sendiri",
        "rt": "02",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "BPJS Mati (Tunggakan)",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Dalam Pemantauan",
        "tanggal_laporan": "2025-10-23"
    },
    {
        "id": "349",
        "nama_warga": "Eunice Larkin",
        "nik": "3201121629380004",
        "pelapor": "Pak RT",
        "rt": "06",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-10-07"
    },
    {
        "id": "350",
        "nama_warga": "Clay Stoltenberg",
        "nik": "3201128062420004",
        "pelapor": "Warga Sendiri",
        "rt": "03",
        "isu_kesehatan": "Warga Belum BPJS",
        "alasan_bpjs": "Tidak Tahu Cara Daftar",
        "intervensi_rt": [
            "Bantu Pengurusan Adminduk/BPJS"
        ],
        "status_kesehatan": "Stabil",
        "tanggal_laporan": "2025-11-02"
    }
]
