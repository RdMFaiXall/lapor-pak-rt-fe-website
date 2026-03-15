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
    umur?: number // tambahan untuk chart kategori usia

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
    {
        "id": "1",
        "nama_warga": "Budi Santoso",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 25
    },
    {
        "id": "2",
        "nama_warga": "Siti Aminah",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "3",
        "nama_warga": "Joko Susilo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "4",
        "nama_warga": "Mbah Surip",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "5",
        "nama_warga": "Andi Pratama",
        "nik": "3201123456780005",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Admin Gudang"
        ],
        "minat_pelatihan": [
            "Digital/Komputer"
        ],
        "tanggal_laporan": "2024-02-15",
        "umur": 35
    },
    {
        "id": "6",
        "nama_warga": "Rina Nose",
        "nik": "3201123456780006",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Katering Rumahan",
        "kendala_umkm": [
            "Alat Rusak"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-18"
    },
    {
        "id": "7",
        "nama_warga": "Doni Salmanan",
        "nik": "3201123456780007",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-20"
    },
    {
        "id": "8",
        "nama_warga": "Bu Tejo",
        "nik": "3201123456780008",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "BLT"
        ],
        "tanggal_laporan": "2024-02-22"
    },
    {
        "id": "9",
        "nama_warga": "Eko Patrio",
        "nik": "3201123456780009",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Security"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-25",
        "umur": 45
    },
    {
        "id": "10",
        "nama_warga": "Cinta Laura",
        "nik": "3201123456780010",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Jasa Laundry",
        "kendala_umkm": [
            "Izin Usaha"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-26"
    },
    {
        "id": "11",
        "nama_warga": "Bambang Saputra",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 59
    },
    {
        "id": "12",
        "nama_warga": "Lina Saputra",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 55
    },
    {
        "id": "13",
        "nama_warga": "Putri Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 45
    },
    {
        "id": "14",
        "nama_warga": "Cici Nugroho",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 37
    },
    {
        "id": "15",
        "nama_warga": "Putri Wibowo",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 32
    },
    {
        "id": "16",
        "nama_warga": "Wawan Siregar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 24
    },
    {
        "id": "17",
        "nama_warga": "Rudi Wibowo",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 39
    },
    {
        "id": "18",
        "nama_warga": "Toni Nugroho",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 42
    },
    {
        "id": "19",
        "nama_warga": "Vina Pratama",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 22
    },
    {
        "id": "20",
        "nama_warga": "Jajang Sitompul",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 43
    },
    {
        "id": "21",
        "nama_warga": "Yanti Sitompul",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 63
    },
    {
        "id": "22",
        "nama_warga": "Wawan Gultom",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 19
    },
    {
        "id": "23",
        "nama_warga": "Cici Gultom",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 72
    },
    {
        "id": "24",
        "nama_warga": "Sari Sitompul",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 18
    },
    {
        "id": "25",
        "nama_warga": "Lina Wibowo",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 44
    },
    {
        "id": "26",
        "nama_warga": "Oman Sianipar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 65
    },
    {
        "id": "27",
        "nama_warga": "Iwan Saputra",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 37
    },
    {
        "id": "28",
        "nama_warga": "Umar Siregar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 70
    },
    {
        "id": "29",
        "nama_warga": "Toni Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 64
    },
    {
        "id": "30",
        "nama_warga": "Putri Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 49
    },
    {
        "id": "31",
        "nama_warga": "Neni Setiawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 65
    },
    {
        "id": "32",
        "nama_warga": "Jajang Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 30
    },
    {
        "id": "33",
        "nama_warga": "Lina Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 48
    },
    {
        "id": "34",
        "nama_warga": "Xaverius Wijaya",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 18
    },
    {
        "id": "35",
        "nama_warga": "Dedi Saputra",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 59
    },
    {
        "id": "36",
        "nama_warga": "Rudi Sianipar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 43
    },
    {
        "id": "37",
        "nama_warga": "Yanti Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 58
    },
    {
        "id": "38",
        "nama_warga": "Dedi Pratama",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 49
    },
    {
        "id": "39",
        "nama_warga": "Fajar Siregar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 53
    },
    {
        "id": "40",
        "nama_warga": "Cici Siregar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 52
    },
    {
        "id": "41",
        "nama_warga": "Toni Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 30
    },
    {
        "id": "42",
        "nama_warga": "Fajar Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 56
    },
    {
        "id": "43",
        "nama_warga": "Euis Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 37
    },
    {
        "id": "44",
        "nama_warga": "Putri Hidayat",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 66
    },
    {
        "id": "45",
        "nama_warga": "Cici Gultom",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 27
    },
    {
        "id": "46",
        "nama_warga": "Sari Sitompul",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 31
    },
    {
        "id": "47",
        "nama_warga": "Vina Pratama",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 32
    },
    {
        "id": "48",
        "nama_warga": "Vina Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 38
    },
    {
        "id": "49",
        "nama_warga": "Cici Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 66
    },
    {
        "id": "50",
        "nama_warga": "Oman Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 64
    },
    {
        "id": "51",
        "nama_warga": "Gita Pratama",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 17
    },
    {
        "id": "52",
        "nama_warga": "Sari Kurniawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 56
    },
    {
        "id": "53",
        "nama_warga": "Yanti Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 47
    },
    {
        "id": "54",
        "nama_warga": "Rudi Kurniawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 43
    },
    {
        "id": "55",
        "nama_warga": "Oman Sianipar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 71
    },
    {
        "id": "56",
        "nama_warga": "Zaki Setiawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 31
    },
    {
        "id": "57",
        "nama_warga": "Lina Lubis",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 40
    },
    {
        "id": "58",
        "nama_warga": "Oman Wibowo",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 22
    },
    {
        "id": "59",
        "nama_warga": "Wawan Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 44
    },
    {
        "id": "60",
        "nama_warga": "Yanti Wibowo",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 15
    },
    {
        "id": "61",
        "nama_warga": "Dedi Hidayat",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 37
    },
    {
        "id": "62",
        "nama_warga": "Vina Gultom",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 38
    },
    {
        "id": "63",
        "nama_warga": "Sari Santoso",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 45
    },
    {
        "id": "64",
        "nama_warga": "Wawan Wibowo",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 15
    },
    {
        "id": "65",
        "nama_warga": "Bambang Sitompul",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 17
    },
    {
        "id": "66",
        "nama_warga": "Kiki Kurniawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 70
    },
    {
        "id": "67",
        "nama_warga": "Euis Hidayat",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 54
    },
    {
        "id": "68",
        "nama_warga": "Xaverius Setiawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 40
    },
    {
        "id": "69",
        "nama_warga": "Dedi Siregar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 21
    },
    {
        "id": "70",
        "nama_warga": "Euis Santoso",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 51
    },
    {
        "id": "71",
        "nama_warga": "Qori Nugroho",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 48
    },
    {
        "id": "72",
        "nama_warga": "Iwan Sitompul",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 58
    },
    {
        "id": "73",
        "nama_warga": "Cici Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 19
    },
    {
        "id": "74",
        "nama_warga": "Xaverius Setiawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 59
    },
    {
        "id": "75",
        "nama_warga": "Wawan Nugroho",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 64
    },
    {
        "id": "76",
        "nama_warga": "Cici Pratama",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 34
    },
    {
        "id": "77",
        "nama_warga": "Hadi Wijaya",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 59
    },
    {
        "id": "78",
        "nama_warga": "Dedi Wijaya",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 74
    },
    {
        "id": "79",
        "nama_warga": "Neni Wijaya",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 59
    },
    {
        "id": "80",
        "nama_warga": "Jajang Purba",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 60
    },
    {
        "id": "81",
        "nama_warga": "Kiki Santoso",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 48
    },
    {
        "id": "82",
        "nama_warga": "Kiki Setiawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 30
    },
    {
        "id": "83",
        "nama_warga": "Dedi Pratama",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 45
    },
    {
        "id": "84",
        "nama_warga": "Dedi Saputra",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 73
    },
    {
        "id": "85",
        "nama_warga": "Umar Siregar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 26
    },
    {
        "id": "86",
        "nama_warga": "Kiki Sianipar",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 65
    },
    {
        "id": "87",
        "nama_warga": "Agus Gultom",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 15
    },
    {
        "id": "88",
        "nama_warga": "Dedi Setiawan",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "3 - 6 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 34
    },
    {
        "id": "89",
        "nama_warga": "Maman Gultom",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "< 3 Bulan",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 36
    },
    {
        "id": "90",
        "nama_warga": "Umar Nugroho",
        "nik": "3201123456780001",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga tidak punya pekerjaan",
        "lama_menganggur": "> 1 Tahun",
        "skill_terakhir": [
            "Supir",
            "Montir"
        ],
        "minat_pelatihan": [
            "Pertukangan/Teknik"
        ],
        "tanggal_laporan": "2024-02-01",
        "umur": 59
    },
    {
        "id": "91",
        "nama_warga": "Wawan Wijaya",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "92",
        "nama_warga": "Jajang Wibowo",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "93",
        "nama_warga": "Wawan Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "94",
        "nama_warga": "Wawan Sitompul",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "95",
        "nama_warga": "Sari Hidayat",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "96",
        "nama_warga": "Putri Gultom",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "97",
        "nama_warga": "Qori Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "98",
        "nama_warga": "Agus Wijaya",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "99",
        "nama_warga": "Yanti Kurniawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "100",
        "nama_warga": "Gita Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "101",
        "nama_warga": "Gita Saputra",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "102",
        "nama_warga": "Iwan Santoso",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "103",
        "nama_warga": "Iwan Purba",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "104",
        "nama_warga": "Fajar Hidayat",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "105",
        "nama_warga": "Agus Gultom",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "106",
        "nama_warga": "Maman Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "107",
        "nama_warga": "Fajar Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "108",
        "nama_warga": "Agus Gultom",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "109",
        "nama_warga": "Toni Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "110",
        "nama_warga": "Dedi Pratama",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "111",
        "nama_warga": "Euis Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "112",
        "nama_warga": "Sari Hidayat",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "113",
        "nama_warga": "Hadi Saputra",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "114",
        "nama_warga": "Maman Purba",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "115",
        "nama_warga": "Euis Hidayat",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "116",
        "nama_warga": "Neni Kurniawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "117",
        "nama_warga": "Zaki Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "118",
        "nama_warga": "Jajang Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "119",
        "nama_warga": "Zaki Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "120",
        "nama_warga": "Agus Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "121",
        "nama_warga": "Neni Sitompul",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "122",
        "nama_warga": "Iwan Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "123",
        "nama_warga": "Iwan Hidayat",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "124",
        "nama_warga": "Jajang Setiawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "125",
        "nama_warga": "Kiki Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "126",
        "nama_warga": "Lina Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "127",
        "nama_warga": "Umar Setiawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "128",
        "nama_warga": "Lina Saputra",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "129",
        "nama_warga": "Iwan Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "130",
        "nama_warga": "Umar Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "131",
        "nama_warga": "Gita Wibowo",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "132",
        "nama_warga": "Putri Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "133",
        "nama_warga": "Maman Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "134",
        "nama_warga": "Sari Kurniawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "135",
        "nama_warga": "Rudi Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "136",
        "nama_warga": "Fajar Gultom",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "137",
        "nama_warga": "Xaverius Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "138",
        "nama_warga": "Umar Wijaya",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "139",
        "nama_warga": "Hadi Saputra",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "140",
        "nama_warga": "Dedi Purba",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "141",
        "nama_warga": "Iwan Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "142",
        "nama_warga": "Gita Nugroho",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "143",
        "nama_warga": "Zaki Wijaya",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "144",
        "nama_warga": "Agus Setiawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "145",
        "nama_warga": "Hadi Purba",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "146",
        "nama_warga": "Gita Siregar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "147",
        "nama_warga": "Iwan Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "148",
        "nama_warga": "Gita Kurniawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "149",
        "nama_warga": "Umar Sianipar",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "150",
        "nama_warga": "Qori Saputra",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "151",
        "nama_warga": "Toni Lubis",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "< 1 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "152",
        "nama_warga": "Cici Pratama",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "153",
        "nama_warga": "Dedi Hidayat",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "3 - 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "154",
        "nama_warga": "Sari Kurniawan",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "1 - 3 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "155",
        "nama_warga": "Toni Saputra",
        "nik": "3201123456780002",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "UMKM tidak berkembang",
        "nama_jenis_usaha": "Warung Seblak Bu Siti",
        "kendala_umkm": [
            "Modal Kurang",
            "Sepi Pembeli (Pemasaran)"
        ],
        "omzet_rata_rata": "> 5 Juta",
        "tanggal_laporan": "2024-02-05"
    },
    {
        "id": "156",
        "nama_warga": "Putri Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "157",
        "nama_warga": "Fajar Santoso",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "158",
        "nama_warga": "Wawan Lubis",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "159",
        "nama_warga": "Gita Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "160",
        "nama_warga": "Sari Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "161",
        "nama_warga": "Hadi Lubis",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "162",
        "nama_warga": "Dedi Pratama",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "163",
        "nama_warga": "Zaki Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "164",
        "nama_warga": "Iwan Sianipar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "165",
        "nama_warga": "Fajar Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "166",
        "nama_warga": "Vina Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "167",
        "nama_warga": "Zaki Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "168",
        "nama_warga": "Qori Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "169",
        "nama_warga": "Fajar Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "170",
        "nama_warga": "Bambang Kurniawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "171",
        "nama_warga": "Agus Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "172",
        "nama_warga": "Fajar Kurniawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "173",
        "nama_warga": "Oman Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "174",
        "nama_warga": "Toni Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "175",
        "nama_warga": "Euis Pratama",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "176",
        "nama_warga": "Yanti Sianipar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "177",
        "nama_warga": "Xaverius Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "178",
        "nama_warga": "Agus Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "179",
        "nama_warga": "Rudi Pratama",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "180",
        "nama_warga": "Lina Pratama",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "181",
        "nama_warga": "Toni Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "182",
        "nama_warga": "Putri Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "183",
        "nama_warga": "Gita Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "184",
        "nama_warga": "Jajang Lubis",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "185",
        "nama_warga": "Lina Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "186",
        "nama_warga": "Rudi Santoso",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "187",
        "nama_warga": "Cici Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "188",
        "nama_warga": "Kiki Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "189",
        "nama_warga": "Cici Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "190",
        "nama_warga": "Kiki Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "191",
        "nama_warga": "Gita Santoso",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "192",
        "nama_warga": "Umar Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "193",
        "nama_warga": "Lina Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "194",
        "nama_warga": "Zaki Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "195",
        "nama_warga": "Toni Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "196",
        "nama_warga": "Lina Kurniawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "197",
        "nama_warga": "Neni Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "198",
        "nama_warga": "Fajar Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "199",
        "nama_warga": "Bambang Santoso",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "200",
        "nama_warga": "Neni Lubis",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "201",
        "nama_warga": "Neni Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "202",
        "nama_warga": "Jajang Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "203",
        "nama_warga": "Rudi Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "204",
        "nama_warga": "Euis Kurniawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "205",
        "nama_warga": "Maman Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "206",
        "nama_warga": "Rudi Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "207",
        "nama_warga": "Dedi Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "208",
        "nama_warga": "Dedi Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "209",
        "nama_warga": "Gita Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "210",
        "nama_warga": "Agus Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "211",
        "nama_warga": "Vina Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "212",
        "nama_warga": "Rudi Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "213",
        "nama_warga": "Maman Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "214",
        "nama_warga": "Dedi Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "215",
        "nama_warga": "Maman Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "216",
        "nama_warga": "Jajang Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "217",
        "nama_warga": "Lina Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "218",
        "nama_warga": "Yanti Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "219",
        "nama_warga": "Agus Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "220",
        "nama_warga": "Iwan Kurniawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "221",
        "nama_warga": "Sari Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "222",
        "nama_warga": "Lina Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "223",
        "nama_warga": "Agus Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "224",
        "nama_warga": "Jajang Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "225",
        "nama_warga": "Agus Kurniawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "226",
        "nama_warga": "Bambang Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "227",
        "nama_warga": "Vina Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "228",
        "nama_warga": "Neni Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "229",
        "nama_warga": "Bambang Lubis",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "230",
        "nama_warga": "Oman Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "231",
        "nama_warga": "Fajar Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "232",
        "nama_warga": "Hadi Pratama",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "233",
        "nama_warga": "Umar Lubis",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "234",
        "nama_warga": "Umar Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "235",
        "nama_warga": "Qori Santoso",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "236",
        "nama_warga": "Maman Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "237",
        "nama_warga": "Euis Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "238",
        "nama_warga": "Sari Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "239",
        "nama_warga": "Putri Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "240",
        "nama_warga": "Euis Pratama",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "241",
        "nama_warga": "Oman Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "242",
        "nama_warga": "Wawan Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "243",
        "nama_warga": "Cici Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "244",
        "nama_warga": "Agus Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "245",
        "nama_warga": "Fajar Saputra",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "246",
        "nama_warga": "Yanti Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "247",
        "nama_warga": "Iwan Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "248",
        "nama_warga": "Dedi Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "249",
        "nama_warga": "Yanti Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "250",
        "nama_warga": "Dedi Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "251",
        "nama_warga": "Dedi Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "252",
        "nama_warga": "Putri Wijaya",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "253",
        "nama_warga": "Qori Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "254",
        "nama_warga": "Wawan Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "255",
        "nama_warga": "Neni Nugroho",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "256",
        "nama_warga": "Lina Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "257",
        "nama_warga": "Fajar Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Rentenir / Bank Keliling",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "258",
        "nama_warga": "Vina Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "259",
        "nama_warga": "Cici Wibowo",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "260",
        "nama_warga": "Vina Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "261",
        "nama_warga": "Cici Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "262",
        "nama_warga": "Xaverius Purba",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "263",
        "nama_warga": "Putri Hidayat",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "264",
        "nama_warga": "Maman Setiawan",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "265",
        "nama_warga": "Euis Gultom",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Bank Resmi",
        "estimasi_total_hutang": "> 10 Juta",
        "butuh_mediasi": true,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "266",
        "nama_warga": "Toni Siregar",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Tetangga/Perorangan",
        "estimasi_total_hutang": "< 2 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "267",
        "nama_warga": "Xaverius Sitompul",
        "nik": "3201123456780003",
        "pelapor": "Pak RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Warga berhutang",
        "sumber_hutang": "Pinjol (Online)",
        "estimasi_total_hutang": "2 - 10 Juta",
        "butuh_mediasi": false,
        "tanggal_laporan": "2024-02-10"
    },
    {
        "id": "268",
        "nama_warga": "Cici Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "269",
        "nama_warga": "Iwan Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "270",
        "nama_warga": "Gita Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "271",
        "nama_warga": "Rudi Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "272",
        "nama_warga": "Vina Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "273",
        "nama_warga": "Putri Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "274",
        "nama_warga": "Wawan Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "275",
        "nama_warga": "Xaverius Wibowo",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "276",
        "nama_warga": "Xaverius Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "277",
        "nama_warga": "Cici Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "278",
        "nama_warga": "Yanti Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "279",
        "nama_warga": "Maman Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "280",
        "nama_warga": "Vina Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "281",
        "nama_warga": "Qori Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "282",
        "nama_warga": "Gita Setiawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "283",
        "nama_warga": "Iwan Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "284",
        "nama_warga": "Hadi Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "285",
        "nama_warga": "Zaki Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "286",
        "nama_warga": "Oman Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "287",
        "nama_warga": "Putri Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "288",
        "nama_warga": "Bambang Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "289",
        "nama_warga": "Gita Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "290",
        "nama_warga": "Maman Setiawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "291",
        "nama_warga": "Yanti Hidayat",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "292",
        "nama_warga": "Putri Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "293",
        "nama_warga": "Dedi Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "294",
        "nama_warga": "Iwan Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "295",
        "nama_warga": "Putri Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "296",
        "nama_warga": "Neni Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "297",
        "nama_warga": "Xaverius Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "298",
        "nama_warga": "Kiki Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "299",
        "nama_warga": "Toni Hidayat",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "300",
        "nama_warga": "Gita Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "301",
        "nama_warga": "Kiki Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "302",
        "nama_warga": "Jajang Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "303",
        "nama_warga": "Kiki Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "304",
        "nama_warga": "Qori Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "305",
        "nama_warga": "Euis Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "306",
        "nama_warga": "Xaverius Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "307",
        "nama_warga": "Vina Setiawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "308",
        "nama_warga": "Bambang Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "309",
        "nama_warga": "Umar Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "310",
        "nama_warga": "Euis Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "311",
        "nama_warga": "Dedi Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "312",
        "nama_warga": "Kiki Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "313",
        "nama_warga": "Zaki Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "314",
        "nama_warga": "Umar Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "315",
        "nama_warga": "Neni Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "316",
        "nama_warga": "Iwan Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "317",
        "nama_warga": "Fajar Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "318",
        "nama_warga": "Dedi Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "319",
        "nama_warga": "Bambang Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "320",
        "nama_warga": "Gita Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "321",
        "nama_warga": "Lina Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "322",
        "nama_warga": "Agus Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "323",
        "nama_warga": "Kiki Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "324",
        "nama_warga": "Neni Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "325",
        "nama_warga": "Sari Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "326",
        "nama_warga": "Maman Setiawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "327",
        "nama_warga": "Vina Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "328",
        "nama_warga": "Lina Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "329",
        "nama_warga": "Gita Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "330",
        "nama_warga": "Cici Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "331",
        "nama_warga": "Cici Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "332",
        "nama_warga": "Maman Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "333",
        "nama_warga": "Oman Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "334",
        "nama_warga": "Qori Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "335",
        "nama_warga": "Oman Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "336",
        "nama_warga": "Toni Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "337",
        "nama_warga": "Agus Wibowo",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "338",
        "nama_warga": "Qori Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "339",
        "nama_warga": "Rudi Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "340",
        "nama_warga": "Vina Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "341",
        "nama_warga": "Kiki Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "342",
        "nama_warga": "Hadi Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "343",
        "nama_warga": "Wawan Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "344",
        "nama_warga": "Bambang Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "345",
        "nama_warga": "Hadi Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "346",
        "nama_warga": "Sari Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "347",
        "nama_warga": "Bambang Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "348",
        "nama_warga": "Agus Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "349",
        "nama_warga": "Neni Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "350",
        "nama_warga": "Bambang Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "351",
        "nama_warga": "Yanti Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "352",
        "nama_warga": "Putri Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "353",
        "nama_warga": "Vina Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "354",
        "nama_warga": "Xaverius Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "355",
        "nama_warga": "Putri Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "356",
        "nama_warga": "Putri Setiawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "357",
        "nama_warga": "Agus Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "358",
        "nama_warga": "Hadi Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "359",
        "nama_warga": "Toni Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "360",
        "nama_warga": "Euis Wibowo",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "361",
        "nama_warga": "Wawan Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "362",
        "nama_warga": "Rudi Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "363",
        "nama_warga": "Wawan Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "364",
        "nama_warga": "Maman Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "365",
        "nama_warga": "Bambang Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "366",
        "nama_warga": "Qori Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "367",
        "nama_warga": "Toni Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "368",
        "nama_warga": "Cici Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "369",
        "nama_warga": "Fajar Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "370",
        "nama_warga": "Iwan Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "371",
        "nama_warga": "Iwan Hidayat",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "372",
        "nama_warga": "Neni Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "373",
        "nama_warga": "Kiki Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "374",
        "nama_warga": "Oman Saputra",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "375",
        "nama_warga": "Iwan Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "376",
        "nama_warga": "Zaki Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "377",
        "nama_warga": "Maman Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "378",
        "nama_warga": "Lina Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "379",
        "nama_warga": "Bambang Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "380",
        "nama_warga": "Dedi Nugroho",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "381",
        "nama_warga": "Yanti Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "382",
        "nama_warga": "Hadi Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "383",
        "nama_warga": "Jajang Santoso",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "384",
        "nama_warga": "Rudi Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "385",
        "nama_warga": "Qori Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "386",
        "nama_warga": "Dedi Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "387",
        "nama_warga": "Xaverius Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "388",
        "nama_warga": "Vina Purba",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "389",
        "nama_warga": "Hadi Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "390",
        "nama_warga": "Putri Wibowo",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "391",
        "nama_warga": "Bambang Wijaya",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "392",
        "nama_warga": "Hadi Setiawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "393",
        "nama_warga": "Maman Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "394",
        "nama_warga": "Zaki Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "395",
        "nama_warga": "Zaki Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "04",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "396",
        "nama_warga": "Toni Kurniawan",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "397",
        "nama_warga": "Jajang Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "398",
        "nama_warga": "Jajang Hidayat",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 1,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "399",
        "nama_warga": "Bambang Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "400",
        "nama_warga": "Dedi Wibowo",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "03",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "401",
        "nama_warga": "Xaverius Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "02",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "402",
        "nama_warga": "Qori Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "403",
        "nama_warga": "Oman Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 4,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "404",
        "nama_warga": "Toni Siregar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "405",
        "nama_warga": "Toni Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "406",
        "nama_warga": "Fajar Sianipar",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "06",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "407",
        "nama_warga": "Dedi Wibowo",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "408",
        "nama_warga": "Hadi Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 6,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "409",
        "nama_warga": "Toni Pratama",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "< 1.5 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "410",
        "nama_warga": "Yanti Sitompul",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "01",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Sewa/Kontrak",
        "jumlah_tanggungan": 3,
        "penghasilan_kk": "1.5 - 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "411",
        "nama_warga": "Cici Gultom",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Milik Sendiri",
        "jumlah_tanggungan": 5,
        "penghasilan_kk": "> 3 Juta",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    },
    {
        "id": "412",
        "nama_warga": "Umar Lubis",
        "nik": "3201123456780004",
        "pelapor": "Bu RT",
        "rt": "05",
        "kategori_isu_ekonomi": "Calon penerima bansos",
        "status_hunian": "Menumpang",
        "jumlah_tanggungan": 2,
        "penghasilan_kk": "Tidak Ada",
        "riwayat_bantuan": [
            "Belum Pernah Ada"
        ],
        "tanggal_laporan": "2024-02-12"
    }
]
