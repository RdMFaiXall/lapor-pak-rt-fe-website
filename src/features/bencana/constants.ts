// --- Tipe Data Sesuai CSV "Bencana" ---
// Mengacu pada CSV Isu Kebencanaan (Row 106-115)
export type DisasterReport = {
    id: string
    pelapor: string // Siapa yang melapor
    rt: string // RT asal pelapor
    jenis_bencana: 'Banjir' | 'Kebakaran' | 'Pohon Tumbang' | 'Tanah Longsor' | 'Angin Puting Beliung' | 'Lainnya' | 'Gempa' | 'Tsunami' | 'Gunung Meletus'
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

    foto_kejadian?: string[]
    tanggal_laporan: string
    keterangan_tambahan: string
}

// --- Dummy Data ---
// Note: Total length = 450 items, exact 60% with victims / 40% without.
export const mockData: DisasterReport[] = [
    {
        "id": "BC-1816",
        "pelapor": "Tom Reinger",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-03-09 20:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 24
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8279",
        "pelapor": "Dr. Francis Will",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-11 21:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9955",
        "pelapor": "Ruth Brakus",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-03 13:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7054",
        "pelapor": "Ron Mills",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-03-09 20:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4123",
        "pelapor": "Lawrence Hoppe",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 03 / RW 03",
        "waktu_kejadian": "2026-02-23 18:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3091",
        "pelapor": "Bill Dietrich",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-03-15 00:33",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1078",
        "pelapor": "Jean Stokes",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-03-10 22:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5209",
        "pelapor": "Ms. Lila Rodriguez",
        "rt": "05",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-02-21 17:19",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4871",
        "pelapor": "Charlene Ondricka DDS",
        "rt": "09",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-02-20 05:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5210",
        "pelapor": "Sophia Gulgowski",
        "rt": "04",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 03",
        "waktu_kejadian": "2026-03-09 18:19",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8545",
        "pelapor": "Jacob Toy",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-03-01 12:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7050",
        "pelapor": "Minnie Cruickshank",
        "rt": "09",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-01 01:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5900",
        "pelapor": "Jonathon Smith",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-02-26 06:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 51
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2182",
        "pelapor": "Julia Altenwerth",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-12 14:04",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6337",
        "pelapor": "Sheri Effertz",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-03-09 10:09",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9524",
        "pelapor": "Dr. Allan Auer",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-03-03 18:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9405",
        "pelapor": "Melvin Russel",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-03-05 11:59",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3243",
        "pelapor": "Marc Howell",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-03-01 06:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1352",
        "pelapor": "Marlene Pouros",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 01",
        "waktu_kejadian": "2026-02-25 08:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8867",
        "pelapor": "Albert Schinner",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 05",
        "waktu_kejadian": "2026-03-12 20:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 34
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5111",
        "pelapor": "Lori Heaney",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-03-12 14:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 51
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5202",
        "pelapor": "Alvin Torp",
        "rt": "09",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-02-18 16:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 2,
            "luka_ringan": 5,
            "mengungsi": 17
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7098",
        "pelapor": "Miss Diane Wolff",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-03-01 10:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9401",
        "pelapor": "Darrel Bergstrom",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-16 13:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8726",
        "pelapor": "Sylvester Prohaska",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-24 17:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8963",
        "pelapor": "Mindy Balistreri",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-03-09 22:03",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5359",
        "pelapor": "Gregg Haley",
        "rt": "08",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-09 21:57",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 0,
            "luka_ringan": 8,
            "mengungsi": 26
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5400",
        "pelapor": "Melvin Ferry",
        "rt": "07",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-03-12 14:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7570",
        "pelapor": "Kellie Lang",
        "rt": "09",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-13 04:02",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1607",
        "pelapor": "Ralph Bosco",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-02-18 10:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7931",
        "pelapor": "Felix Lang",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-03-02 00:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5903",
        "pelapor": "Wendell Fritsch",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-02-22 22:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8867",
        "pelapor": "Roger Jenkins",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-02-24 06:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7695",
        "pelapor": "Johnnie Goldner",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-02-14 22:47",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4501",
        "pelapor": "Jasmine Thiel",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-03-03 20:41",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6801",
        "pelapor": "Marjorie Schumm DDS",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-02-17 08:19",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7665",
        "pelapor": "Dr. Israel Pollich I",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-02-28 00:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5330",
        "pelapor": "Eva Block",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-03-14 01:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4234",
        "pelapor": "Lloyd Bogan",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-02-28 03:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 13
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6463",
        "pelapor": "Jacqueline Rath",
        "rt": "08",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-21 13:49",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4209",
        "pelapor": "Brandon Ernser-Beatty",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-04 05:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4993",
        "pelapor": "Andre Skiles",
        "rt": "05",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-02-22 09:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2766",
        "pelapor": "Dr. Jordan Donnelly",
        "rt": "06",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 08 / RW 01",
        "waktu_kejadian": "2026-03-05 15:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 20
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5498",
        "pelapor": "Maureen Jacobi",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-17 12:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8425",
        "pelapor": "Jessica Ratke",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-11 03:50",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9840",
        "pelapor": "Sheri Boyer-Becker MD",
        "rt": "01",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-02-23 20:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4810",
        "pelapor": "Pat Fahey",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-03-12 11:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5931",
        "pelapor": "Juan Quitzon",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-02-18 02:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8182",
        "pelapor": "Chelsea Dare",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-02-18 21:04",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 50
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5906",
        "pelapor": "Ted Gibson",
        "rt": "06",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-02-24 21:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 14
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2020",
        "pelapor": "Bradley Breitenberg",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-09 18:50",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5440",
        "pelapor": "Lynn Hane",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-03 04:31",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9537",
        "pelapor": "Elijah Schmidt",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-01 01:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4512",
        "pelapor": "Sonya Bogan",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-03-08 22:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7839",
        "pelapor": "Dr. Alfonso Gulgowski",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-07 14:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9303",
        "pelapor": "Alyssa Haley",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-03-08 13:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6997",
        "pelapor": "Blanche Jacobs-Lueilwitz",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-02-16 05:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 25
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7608",
        "pelapor": "Claire Rutherford",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 05",
        "waktu_kejadian": "2026-02-26 15:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5798",
        "pelapor": "Steve Gerlach",
        "rt": "02",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 05 / RW 02",
        "waktu_kejadian": "2026-02-25 07:09",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 20
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9314",
        "pelapor": "Carlton Franey",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-03-01 20:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 28
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6354",
        "pelapor": "Mr. Milton Rowe",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 02",
        "waktu_kejadian": "2026-02-27 03:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2282",
        "pelapor": "Alfredo Bechtelar",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-07 01:56",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6736",
        "pelapor": "Ora Pacocha DVM",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-03-10 17:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5548",
        "pelapor": "Jacqueline Franey",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-04 02:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4440",
        "pelapor": "Anna Becker",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-03-13 11:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6863",
        "pelapor": "Dr. Sam Kuhlman",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-02-28 02:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 9
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1300",
        "pelapor": "Wilbur Cassin",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 01",
        "waktu_kejadian": "2026-02-21 08:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3611",
        "pelapor": "Linda Crist PhD",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-02-17 10:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6064",
        "pelapor": "Yvette Bartell",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-08 12:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7672",
        "pelapor": "Cecil Hackett",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-13 19:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3703",
        "pelapor": "Lydia Hegmann DDS",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-03-13 12:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4409",
        "pelapor": "Gina Farrell DDS",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-03-10 12:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9022",
        "pelapor": "Luis Kautzer",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-02-14 20:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8387",
        "pelapor": "Johnathan Barton",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-02-22 12:40",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9080",
        "pelapor": "Susan Bailey",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-03-03 07:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 25
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7085",
        "pelapor": "Charlie Harvey",
        "rt": "06",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-01 06:49",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 9,
            "mengungsi": 24
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9192",
        "pelapor": "Diana Herzog",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-03-14 16:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1912",
        "pelapor": "Kurt Schmitt",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 01",
        "waktu_kejadian": "2026-02-14 17:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2717",
        "pelapor": "Dr. Horace Mertz",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-11 02:31",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 26
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3478",
        "pelapor": "Marlene Borer DDS",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-28 10:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4150",
        "pelapor": "Natalie Lebsack-Harvey",
        "rt": "02",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-17 22:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 49
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2373",
        "pelapor": "Omar Cruickshank",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 04",
        "waktu_kejadian": "2026-03-06 21:30",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6482",
        "pelapor": "Lena Mueller",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-02-18 16:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 28
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3324",
        "pelapor": "Drew Pacocha",
        "rt": "07",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-02-24 11:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2050",
        "pelapor": "Nicole McLaughlin",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-09 13:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 16
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9859",
        "pelapor": "Mr. Brett Beier DDS",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-25 12:22",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9528",
        "pelapor": "Lucille Kerluke",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-02-18 02:56",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6947",
        "pelapor": "Sheri Jacobson IV",
        "rt": "03",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-02-17 17:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5236",
        "pelapor": "Mr. Jan Franecki",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-03-06 06:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9303",
        "pelapor": "Sam Little",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-03-15 00:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2257",
        "pelapor": "Marlon Rath",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-24 21:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8683",
        "pelapor": "Dr. Tom Strosin",
        "rt": "08",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-03-09 12:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 18
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4621",
        "pelapor": "Rosie Lehner",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-09 07:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4978",
        "pelapor": "Mr. Mike Purdy-Kessler",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 01",
        "waktu_kejadian": "2026-02-20 17:29",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9389",
        "pelapor": "Cecil Kris",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-03-09 15:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6062",
        "pelapor": "Eric Mertz-Ziemann",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-14 07:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9303",
        "pelapor": "Gayle Gorczany",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-23 01:03",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8450",
        "pelapor": "Carlton West",
        "rt": "03",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-12 20:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1827",
        "pelapor": "Earnest Kutch",
        "rt": "03",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-02-14 23:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5316",
        "pelapor": "Barry Romaguera PhD",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-03-05 18:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1571",
        "pelapor": "Constance Hartmann",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-02-20 03:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 43
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9772",
        "pelapor": "Sharon Hodkiewicz",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-02-15 13:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7889",
        "pelapor": "Ana Renner",
        "rt": "03",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 06 / RW 04",
        "waktu_kejadian": "2026-02-13 04:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 34
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3819",
        "pelapor": "Susie Kuvalis",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-11 01:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 24
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2750",
        "pelapor": "Tommie Satterfield",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-21 06:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6712",
        "pelapor": "Archie Sanford-Homenick",
        "rt": "02",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-03-01 13:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 26
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5582",
        "pelapor": "Karen Denesik",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-03-05 12:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 40
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8314",
        "pelapor": "Mr. Gordon Mills-Trantow DDS",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 05",
        "waktu_kejadian": "2026-03-10 06:40",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2606",
        "pelapor": "Luis Daugherty II",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-28 18:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1689",
        "pelapor": "Mr. Wendell Graham",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-03-12 02:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8099",
        "pelapor": "Joe Nikolaus I",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-02-25 12:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4356",
        "pelapor": "Lawrence Wyman",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-02-25 01:19",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1895",
        "pelapor": "Leah Wiegand",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-02-23 08:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4496",
        "pelapor": "Jennifer Zieme",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-09 04:19",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5603",
        "pelapor": "Nick Strosin",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-03-05 19:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9722",
        "pelapor": "Laura Lebsack",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-02-18 01:20",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1022",
        "pelapor": "Frederick Hessel",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-02-18 10:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1654",
        "pelapor": "Luke Kozey",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-23 19:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4905",
        "pelapor": "Johnathan Medhurst",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-02-16 20:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6426",
        "pelapor": "Dexter Swaniawski",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-13 06:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1934",
        "pelapor": "Danielle Fahey",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-02-24 05:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5003",
        "pelapor": "Tracey Mante",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-05 09:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7750",
        "pelapor": "Mrs. Agnes Waelchi",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 05",
        "waktu_kejadian": "2026-03-05 15:20",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4229",
        "pelapor": "Marcia Price-Berge DVM",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-03-12 10:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7402",
        "pelapor": "Nicolas Hackett",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-01 09:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3360",
        "pelapor": "Doug O'Conner",
        "rt": "09",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-02-21 09:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8333",
        "pelapor": "Debbie Shields III",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-03-07 10:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5398",
        "pelapor": "Conrad Oberbrunner",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-02-26 08:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 28
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8812",
        "pelapor": "Lance Kutch",
        "rt": "09",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-02-24 16:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4513",
        "pelapor": "Teresa Morissette",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-28 09:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2347",
        "pelapor": "Jessie Heaney",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-03-13 05:59",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 23
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6356",
        "pelapor": "Gordon Walker",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-11 10:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5989",
        "pelapor": "Caroline Torphy",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 02",
        "waktu_kejadian": "2026-03-10 22:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8750",
        "pelapor": "Tommy Bauch",
        "rt": "05",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-21 05:22",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 10
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6512",
        "pelapor": "Raul Padberg",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-14 10:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7966",
        "pelapor": "Tomas Gibson",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-02-23 15:41",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3031",
        "pelapor": "Dwayne Olson",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-03-12 17:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9012",
        "pelapor": "Mr. Irvin Towne-Bailey I",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-02-18 23:40",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4473",
        "pelapor": "Ross Torp",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-26 14:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 16
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8400",
        "pelapor": "Ms. Andrea Hackett",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-02-19 21:47",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3704",
        "pelapor": "Whitney Rath-Kshlerin",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-03-12 05:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1492",
        "pelapor": "Sherry Dietrich",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-02-18 10:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5240",
        "pelapor": "George Romaguera",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-08 08:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8674",
        "pelapor": "Mrs. Elsie Schneider",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-11 18:59",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 36
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4315",
        "pelapor": "Juana Hackett",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-03-06 02:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4683",
        "pelapor": "Wendell Kozey",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-03-04 11:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9461",
        "pelapor": "Marcia Koss DVM",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-02-22 19:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6684",
        "pelapor": "Krista Rogahn",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-24 23:03",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5888",
        "pelapor": "Sheri Moen I",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-03-07 19:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4562",
        "pelapor": "Angelo Walsh",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-03-12 19:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3012",
        "pelapor": "Brittany Hoppe",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-02-28 06:02",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1445",
        "pelapor": "Matthew Harris",
        "rt": "07",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-02-16 10:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 19
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9200",
        "pelapor": "Ellis Mohr",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-21 07:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8975",
        "pelapor": "Larry Sipes",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-02-27 21:59",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8806",
        "pelapor": "Jaime Ferry",
        "rt": "03",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-03-13 16:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6800",
        "pelapor": "Joe Frami",
        "rt": "07",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-03-03 05:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 6,
            "mengungsi": 19
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8785",
        "pelapor": "Clyde Reichel",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-02-23 08:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1645",
        "pelapor": "Ivan Lockman",
        "rt": "07",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-03-05 08:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 17
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5936",
        "pelapor": "Bradley Harris",
        "rt": "01",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-03-06 11:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 14
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8646",
        "pelapor": "Bryant Bartoletti",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-12 18:40",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2187",
        "pelapor": "Janet Stehr-Zemlak Sr.",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-02-16 00:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 30
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8604",
        "pelapor": "Mrs. Sherry Emard-Heathcote",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 01",
        "waktu_kejadian": "2026-03-12 14:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1950",
        "pelapor": "Bobby Kuphal",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-14 10:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3628",
        "pelapor": "Bob Skiles",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-02-19 19:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 35
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3106",
        "pelapor": "Brandy Schmidt",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-26 10:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4819",
        "pelapor": "Guillermo Kub V",
        "rt": "09",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-15 08:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7252",
        "pelapor": "Jacquelyn Connelly",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-02-23 04:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6090",
        "pelapor": "Kelvin Ritchie DDS",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-02-14 16:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2507",
        "pelapor": "Cecelia Jaskolski",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-03-10 03:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4838",
        "pelapor": "Adrienne Osinski",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-03-04 18:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6385",
        "pelapor": "Mario Gutkowski",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-03-05 07:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4585",
        "pelapor": "Dr. Robin Schulist-Beier",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-02-16 03:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7349",
        "pelapor": "Eula Feest",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 06 / RW 04",
        "waktu_kejadian": "2026-02-17 13:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8772",
        "pelapor": "Dr. Monique Kshlerin",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-02-20 16:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4877",
        "pelapor": "Kathy Cronin V",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-08 20:54",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7234",
        "pelapor": "Gerald Greenholt",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-03-06 19:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 39
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3016",
        "pelapor": "Rudy Bogisich",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-27 21:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4864",
        "pelapor": "Percy Marquardt",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-16 12:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2581",
        "pelapor": "Emma Weimann",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-23 11:22",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2024",
        "pelapor": "Jodi Purdy",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-02-20 05:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9126",
        "pelapor": "Sean Jaskolski DDS",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-03-06 00:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5455",
        "pelapor": "Jane Will",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-02 03:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9577",
        "pelapor": "Joanne Bergnaum I",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-02-26 12:33",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8401",
        "pelapor": "Mr. Leo Bailey",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-13 01:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4674",
        "pelapor": "Patrick Feeney III",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-02-18 17:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7955",
        "pelapor": "Clinton Dare",
        "rt": "04",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-02-24 15:30",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8423",
        "pelapor": "Vivian Upton",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-14 02:31",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 51
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1225",
        "pelapor": "Jennifer Greenholt",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-06 03:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5231",
        "pelapor": "Lynette Flatley",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 03",
        "waktu_kejadian": "2026-02-28 11:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5040",
        "pelapor": "Ted Boehm",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-26 05:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1111",
        "pelapor": "Mrs. Eula Rodriguez",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-07 23:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7718",
        "pelapor": "Jodi Medhurst DDS",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-13 10:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6934",
        "pelapor": "Nathan Gusikowski",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-04 19:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9226",
        "pelapor": "Dr. Tami Upton",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-02 01:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6913",
        "pelapor": "Alberto Beier",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-11 00:40",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 40
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6315",
        "pelapor": "May Satterfield",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-03-13 04:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5293",
        "pelapor": "Miss Lena Bechtelar",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-12 21:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1144",
        "pelapor": "Marcia Wyman DDS",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 05",
        "waktu_kejadian": "2026-02-21 18:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9206",
        "pelapor": "Mario Rau",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 05",
        "waktu_kejadian": "2026-03-03 14:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8986",
        "pelapor": "Felipe Kris",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-02-28 12:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9794",
        "pelapor": "Annette Reichel MD",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-02-27 22:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3779",
        "pelapor": "Sheryl Keebler",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-28 05:54",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8871",
        "pelapor": "Freda Greenholt",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-26 04:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3498",
        "pelapor": "Lester Wiegand",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-25 03:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1009",
        "pelapor": "Julius Veum-Kuhn",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 04",
        "waktu_kejadian": "2026-03-06 05:53",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5770",
        "pelapor": "Miss Mildred Haag",
        "rt": "07",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-15 12:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 21
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2849",
        "pelapor": "Frankie Spinka",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 05",
        "waktu_kejadian": "2026-03-06 15:50",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6810",
        "pelapor": "Julia Stroman Jr.",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-19 20:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 53
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4844",
        "pelapor": "Bridget Wiegand DDS",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-22 00:47",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6080",
        "pelapor": "Lillian Waters",
        "rt": "05",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-03-01 06:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 27
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5250",
        "pelapor": "Marshall King",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-19 09:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4116",
        "pelapor": "Lynn Halvorson",
        "rt": "08",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-03-10 16:36",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 0,
            "luka_ringan": 6,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2637",
        "pelapor": "Clara Kunze",
        "rt": "01",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-03-09 09:56",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 37
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7926",
        "pelapor": "Damon Durgan",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-03-06 12:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 26
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5984",
        "pelapor": "Virginia Lebsack",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-03-02 19:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1618",
        "pelapor": "Alejandro Halvorson",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-08 02:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 43
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4762",
        "pelapor": "Grace Bayer",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-03-05 23:09",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 47
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1606",
        "pelapor": "Victor Stark-Franey",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-03-09 11:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5512",
        "pelapor": "Jonathon Moore",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 01",
        "waktu_kejadian": "2026-03-09 09:33",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2991",
        "pelapor": "Enrique Lueilwitz MD",
        "rt": "06",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-03-01 04:41",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 36
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7532",
        "pelapor": "Brandi Kertzmann",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-28 04:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9697",
        "pelapor": "Joy Hudson",
        "rt": "01",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-24 03:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4191",
        "pelapor": "Ann Emmerich",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-23 15:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2475",
        "pelapor": "Cynthia Donnelly",
        "rt": "08",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-02-28 08:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9211",
        "pelapor": "Jon Homenick-Price",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-14 02:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6548",
        "pelapor": "Curtis Wolf",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-03-03 16:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 49
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8247",
        "pelapor": "Marie Lesch",
        "rt": "09",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-11 23:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2828",
        "pelapor": "Roman Breitenberg",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-21 22:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2813",
        "pelapor": "Miss Brooke Runte Sr.",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-02-23 10:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6918",
        "pelapor": "Danny Collier",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 01",
        "waktu_kejadian": "2026-02-23 04:04",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6257",
        "pelapor": "Dallas Cole",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 03",
        "waktu_kejadian": "2026-03-07 17:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 8
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7772",
        "pelapor": "Antoinette Lakin",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 02",
        "waktu_kejadian": "2026-02-15 17:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3622",
        "pelapor": "Katrina Barrows",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-02-17 09:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6331",
        "pelapor": "Tammy Ratke",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-03-11 22:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 34
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5750",
        "pelapor": "Zachary Weissnat",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-02-24 15:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6405",
        "pelapor": "Janice O'Conner",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-02-18 19:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8884",
        "pelapor": "Lonnie Thiel",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-03-08 19:22",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9431",
        "pelapor": "Marshall Braun DDS",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-26 11:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6902",
        "pelapor": "Ms. Marguerite Kulas MD",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-02-21 09:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1547",
        "pelapor": "Celia Schmitt",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-02-26 04:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1611",
        "pelapor": "Glenn Heaney",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-02-15 01:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7263",
        "pelapor": "Joe Schimmel",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 04",
        "waktu_kejadian": "2026-03-05 09:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1211",
        "pelapor": "Jeremiah Lueilwitz",
        "rt": "07",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-03-05 20:49",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 2,
            "luka_ringan": 5,
            "mengungsi": 13
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4485",
        "pelapor": "Mr. Virgil Krajcik",
        "rt": "01",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 05 / RW 02",
        "waktu_kejadian": "2026-02-26 14:20",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 42
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4647",
        "pelapor": "Wanda Sipes",
        "rt": "03",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-02-28 17:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6542",
        "pelapor": "Dr. Everett Witting",
        "rt": "06",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-13 08:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 22
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6400",
        "pelapor": "Felicia Cummings",
        "rt": "02",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-19 17:30",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 2,
            "luka_ringan": 9,
            "mengungsi": 11
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6339",
        "pelapor": "Levi Emmerich III",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-03-10 21:56",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3904",
        "pelapor": "Cecil Hand",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-03-07 06:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6149",
        "pelapor": "Florence Hoppe",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 04 / RW 02",
        "waktu_kejadian": "2026-02-21 06:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4754",
        "pelapor": "Claude Fritsch",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-03-11 00:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4465",
        "pelapor": "Henrietta Kerluke",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-03-07 07:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2392",
        "pelapor": "Patty Hilpert-Aufderhar",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-03-14 15:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7899",
        "pelapor": "Brooke Deckow V",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-11 10:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3225",
        "pelapor": "Jean Ondricka MD",
        "rt": "04",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-16 00:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7520",
        "pelapor": "Howard Mante",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-13 15:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2945",
        "pelapor": "Horace Bartoletti",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-03-13 05:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7572",
        "pelapor": "Mae Hodkiewicz",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-03-12 19:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2521",
        "pelapor": "Ricardo O'Reilly",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-13 17:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2713",
        "pelapor": "Whitney Hahn",
        "rt": "08",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-03-01 00:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 8,
            "mengungsi": 13
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1248",
        "pelapor": "Max Lind",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-03-07 19:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2741",
        "pelapor": "Curtis Schmidt DVM",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-02-21 21:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6852",
        "pelapor": "Mr. George Dickinson",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-03-02 17:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2719",
        "pelapor": "Dr. Shannon McGlynn",
        "rt": "04",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-04 12:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4405",
        "pelapor": "Holly Nikolaus",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-02-24 16:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5148",
        "pelapor": "Carlos Lindgren-Bosco",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-02-21 08:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6225",
        "pelapor": "Sheri Lemke",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-13 14:04",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4620",
        "pelapor": "Brendan Miller",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-07 15:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1415",
        "pelapor": "Doug Feil",
        "rt": "03",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-24 17:33",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7525",
        "pelapor": "Gretchen Schimmel",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-11 08:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 37
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9439",
        "pelapor": "Nichole Turner",
        "rt": "03",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-02-28 06:03",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3669",
        "pelapor": "Rogelio Koch",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-03-13 07:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3684",
        "pelapor": "Iris Schaefer MD",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-03-08 07:50",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 53
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5489",
        "pelapor": "Gene Hermann",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-05 21:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5851",
        "pelapor": "Orlando Stiedemann",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-03-13 09:49",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 42
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6156",
        "pelapor": "Ignacio Haag",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-17 08:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3699",
        "pelapor": "Amy Lesch",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-02-13 16:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5954",
        "pelapor": "Leslie Tremblay",
        "rt": "04",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-02-17 18:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4442",
        "pelapor": "Damon Brekke",
        "rt": "09",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-02-24 08:31",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7942",
        "pelapor": "Malcolm Homenick",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-03-08 14:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6367",
        "pelapor": "Tom Reilly",
        "rt": "01",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-27 23:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5866",
        "pelapor": "Irvin Bartoletti",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-02-26 14:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 12
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9677",
        "pelapor": "Trevor Mraz",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-25 10:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6417",
        "pelapor": "Guadalupe Effertz",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-14 18:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 35
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9880",
        "pelapor": "Marlene Robel",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-13 21:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1445",
        "pelapor": "Bernice Rau-Koss",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-02-20 21:02",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6346",
        "pelapor": "Sherman O'Reilly",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-02-13 18:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9516",
        "pelapor": "Emanuel Zieme",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-02-23 23:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4423",
        "pelapor": "Roberto O'Conner",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-02-26 19:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3383",
        "pelapor": "Thelma Hammes",
        "rt": "03",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-02-16 02:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 2,
            "luka_ringan": 7,
            "mengungsi": 21
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1057",
        "pelapor": "Bessie Frami",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-02-17 15:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4066",
        "pelapor": "George Tromp",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-02-14 18:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8521",
        "pelapor": "Ms. Brittany Stanton II",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-03-06 17:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3804",
        "pelapor": "Clifton Strosin PhD",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 03",
        "waktu_kejadian": "2026-03-03 23:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9847",
        "pelapor": "Antoinette Johnston",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-09 17:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 40
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3300",
        "pelapor": "Jeff Rodriguez",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-02-26 16:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1908",
        "pelapor": "Stanley Tromp",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-02-21 20:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9896",
        "pelapor": "Vickie Goyette",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-03-02 00:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4677",
        "pelapor": "Stanley Kunze",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-02-14 06:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 39
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8405",
        "pelapor": "Annette Abernathy",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 03 / RW 03",
        "waktu_kejadian": "2026-02-21 12:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2625",
        "pelapor": "Regina Kirlin",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-20 20:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7243",
        "pelapor": "Caleb Wilkinson",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-02-15 14:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5529",
        "pelapor": "Carole Renner",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-12 09:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2754",
        "pelapor": "Anna Brown",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-13 09:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3785",
        "pelapor": "Rudy Littel",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-02-28 11:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1840",
        "pelapor": "Eddie Rohan",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-15 09:02",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1941",
        "pelapor": "Ronald Gerhold",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-09 09:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3622",
        "pelapor": "Javier Veum",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-02-24 02:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4946",
        "pelapor": "Eula Marks",
        "rt": "07",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-01 18:56",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 19
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1889",
        "pelapor": "Betsy Gleichner",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 02",
        "waktu_kejadian": "2026-03-01 07:12",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4120",
        "pelapor": "Dianne Gutmann",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-03-11 06:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9855",
        "pelapor": "Willard Mertz",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-14 18:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4744",
        "pelapor": "Miranda Bode",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-03-13 09:02",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5798",
        "pelapor": "Jeff McKenzie",
        "rt": "08",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-10 17:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6902",
        "pelapor": "Dr. Reginald Welch",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-02-23 09:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5988",
        "pelapor": "Crystal Crona-Zemlak",
        "rt": "08",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 08 / RW 02",
        "waktu_kejadian": "2026-03-09 05:59",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6391",
        "pelapor": "Greg Kuphal V",
        "rt": "07",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-02-25 03:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8827",
        "pelapor": "Mr. Jean Morar III",
        "rt": "01",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-02-15 09:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4833",
        "pelapor": "Debra Brown V",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-13 21:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9880",
        "pelapor": "Mr. Morris Orn",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-25 12:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3952",
        "pelapor": "Shelia Wiza",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-02-26 09:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 31
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3614",
        "pelapor": "Kathryn Corwin-Huels",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-07 10:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4636",
        "pelapor": "Kenneth Nienow",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-14 04:04",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6538",
        "pelapor": "Ms. Arlene Frami",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-02-25 10:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4740",
        "pelapor": "Mr. Jesus Crist",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-26 08:09",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5812",
        "pelapor": "Julius Runolfsdottir MD",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-03-10 16:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1559",
        "pelapor": "Mr. Malcolm Cummerata-Daugherty",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 05",
        "waktu_kejadian": "2026-02-24 07:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6453",
        "pelapor": "Virgil Mante",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-23 05:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7346",
        "pelapor": "Sara Kreiger-Hessel",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-02-13 19:54",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3050",
        "pelapor": "Lindsay Gutkowski-O'Reilly",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-02-22 13:11",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7987",
        "pelapor": "Mr. Blake Wilderman",
        "rt": "01",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-02-20 15:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 9,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5784",
        "pelapor": "Allison Cruickshank",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-02-24 09:33",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5233",
        "pelapor": "Ian Barton-Bernhard",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-24 14:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 35
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5054",
        "pelapor": "Tabitha Brakus",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-02-22 08:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5889",
        "pelapor": "Laurence Legros",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-03-06 08:15",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 48
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3089",
        "pelapor": "Dr. Loretta Hauck",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 09 / RW 03",
        "waktu_kejadian": "2026-03-11 09:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4813",
        "pelapor": "Katrina Schimmel",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-03-10 11:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8748",
        "pelapor": "Essie Steuber",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-02-22 07:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3163",
        "pelapor": "Karla Dooley MD",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-02-13 08:41",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8084",
        "pelapor": "Myra Kautzer",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-08 05:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 22
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2299",
        "pelapor": "Dr. Mattie Runolfsdottir",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 06 / RW 04",
        "waktu_kejadian": "2026-03-03 09:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3516",
        "pelapor": "Mrs. Sarah Frami",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-23 21:55",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6702",
        "pelapor": "Shawna Schaefer",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-02-17 21:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 49
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-03",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3619",
        "pelapor": "Joan Gottlieb",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-07 19:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7116",
        "pelapor": "Dr. Felix Jenkins",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-03-06 14:40",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5494",
        "pelapor": "Sherman Watsica",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-02-22 14:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6826",
        "pelapor": "Nettie Shields",
        "rt": "02",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-12 22:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 7,
            "mengungsi": 15
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8081",
        "pelapor": "Tracy Koelpin",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-03-01 15:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3318",
        "pelapor": "Everett Ratke",
        "rt": "06",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-10 20:22",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8115",
        "pelapor": "Freddie Heidenreich",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-02-24 18:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1338",
        "pelapor": "Ricky Leffler",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 02",
        "waktu_kejadian": "2026-03-14 11:45",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2005",
        "pelapor": "Hilda Hartmann",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-02-22 20:44",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 17
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9498",
        "pelapor": "Leroy D'Amore",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-03-13 23:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5881",
        "pelapor": "Sidney Stokes-Heaney",
        "rt": "06",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 01",
        "waktu_kejadian": "2026-02-13 11:39",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7825",
        "pelapor": "Jeffrey Kuphal",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-03-06 21:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7293",
        "pelapor": "Mr. Timmy Marvin",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-03-12 14:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-05",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9136",
        "pelapor": "Anthony Cummings",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-02-21 13:50",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7527",
        "pelapor": "Wayne Schroeder IV",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-03-06 06:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6221",
        "pelapor": "Emilio Moore",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 02",
        "waktu_kejadian": "2026-03-06 13:59",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3269",
        "pelapor": "Lindsey Bergstrom",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-03-01 16:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4111",
        "pelapor": "Dwayne McGlynn",
        "rt": "09",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-03-07 18:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1320",
        "pelapor": "Lela Jast",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-24 04:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7770",
        "pelapor": "Stewart Kuhn",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-03-09 04:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9555",
        "pelapor": "Mable Schmidt",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-04 15:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 11
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5451",
        "pelapor": "Antonia Feeney",
        "rt": "01",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-03-04 06:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 8,
            "mengungsi": 24
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3442",
        "pelapor": "Eloise Kilback",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-02-17 04:36",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 27
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1620",
        "pelapor": "Frankie Lockman",
        "rt": "02",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 05 / RW 03",
        "waktu_kejadian": "2026-02-25 00:56",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 1,
            "luka_ringan": 4,
            "mengungsi": 29
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2162",
        "pelapor": "Seth Kautzer",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-03-04 19:03",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6611",
        "pelapor": "Danielle Wolf",
        "rt": "07",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-03-08 06:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8372",
        "pelapor": "Inez Feest V",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 02",
        "waktu_kejadian": "2026-02-16 03:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-25",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5843",
        "pelapor": "Ms. Nina Harber",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-03-08 11:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 41
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9292",
        "pelapor": "Kathy Welch",
        "rt": "08",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-02-28 08:24",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 1,
            "luka_ringan": 8,
            "mengungsi": 17
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9536",
        "pelapor": "Freda Cruickshank",
        "rt": "01",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 04 / RW 01",
        "waktu_kejadian": "2026-02-13 13:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4268",
        "pelapor": "Damon Wintheiser",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-18 08:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3033",
        "pelapor": "Mona Raynor",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-15 13:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3494",
        "pelapor": "Lula Gutmann",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-03-02 02:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1538",
        "pelapor": "Laurence Connelly",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-02-20 10:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9423",
        "pelapor": "Mrs. Bethany Koepp",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 01",
        "waktu_kejadian": "2026-02-20 18:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4744",
        "pelapor": "Jean Nienow",
        "rt": "06",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-02-27 06:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8579",
        "pelapor": "Sonia Dietrich",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-02-22 10:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2880",
        "pelapor": "Maxine Kuhic",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-02-25 03:29",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 37
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6888",
        "pelapor": "Flora Sanford",
        "rt": "01",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 03",
        "waktu_kejadian": "2026-03-04 00:08",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1463",
        "pelapor": "Gregory O'Reilly",
        "rt": "09",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-03-10 03:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2136",
        "pelapor": "Jenny Hand",
        "rt": "04",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 05",
        "waktu_kejadian": "2026-03-06 15:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6853",
        "pelapor": "Phyllis Quigley",
        "rt": "03",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-13 11:27",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 24
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7093",
        "pelapor": "Renee Bartell",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-03-05 10:51",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-28",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8798",
        "pelapor": "Joanne Hartmann",
        "rt": "03",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-13 18:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-27",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4279",
        "pelapor": "Elmer Ruecker",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 01",
        "waktu_kejadian": "2026-02-27 09:58",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 26
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8759",
        "pelapor": "Roberto Powlowski",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-24 16:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5690",
        "pelapor": "Traci Paucek",
        "rt": "06",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-03-07 01:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1136",
        "pelapor": "Kelli Brakus",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-02-27 13:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5596",
        "pelapor": "Clifton Treutel",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-02-14 03:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4315",
        "pelapor": "Harry Marvin",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 05 / RW 04",
        "waktu_kejadian": "2026-02-22 01:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3367",
        "pelapor": "Arthur Hilpert",
        "rt": "04",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-14 01:21",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1807",
        "pelapor": "Ralph Hand",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-02-26 00:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 13
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9356",
        "pelapor": "Harry Ernser",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-02 21:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6901",
        "pelapor": "Dr. Darnell Labadie",
        "rt": "02",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-03-13 06:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4387",
        "pelapor": "Micheal Ritchie",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 01",
        "waktu_kejadian": "2026-03-07 02:35",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5304",
        "pelapor": "Nicole Hagenes-Kovacek Sr.",
        "rt": "09",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 01 / RW 03",
        "waktu_kejadian": "2026-03-08 07:47",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-15",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7048",
        "pelapor": "Carolyn Quigley",
        "rt": "03",
        "jenis_bencana": "Tsunami",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-23 18:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 8,
            "mengungsi": 14
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9840",
        "pelapor": "Dr. Sophie Quigley",
        "rt": "05",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-10 22:54",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-01",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4835",
        "pelapor": "Wendell Douglas",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-03-14 10:41",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6045",
        "pelapor": "Albert Armstrong-Ruecker",
        "rt": "09",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-15 06:06",
        "dampak_korban": {
            "meninggal": 1,
            "luka_berat": 0,
            "luka_ringan": 7,
            "mengungsi": 14
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5182",
        "pelapor": "Kyle Cruickshank",
        "rt": "04",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-02-28 10:14",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3629",
        "pelapor": "Regina Collins",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 01 / RW 05",
        "waktu_kejadian": "2026-02-21 17:27",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5720",
        "pelapor": "Gerard Nikolaus",
        "rt": "01",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-18 09:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1821",
        "pelapor": "Alexis Kovacek",
        "rt": "07",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-03 11:47",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3766",
        "pelapor": "Fannie Hagenes DVM",
        "rt": "02",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-14 21:25",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3990",
        "pelapor": "Casey Kuphal",
        "rt": "09",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-03-10 20:38",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1428",
        "pelapor": "Roy Terry",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 04",
        "waktu_kejadian": "2026-03-03 06:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 47
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4431",
        "pelapor": "Juan Carroll IV",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 03",
        "waktu_kejadian": "2026-03-05 03:00",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1290",
        "pelapor": "Dwight Beahan",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-02-21 17:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7672",
        "pelapor": "Jorge Cormier",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 01",
        "waktu_kejadian": "2026-03-11 11:53",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 39
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-26",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8833",
        "pelapor": "Dale Rice",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-02-26 09:23",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-10",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3188",
        "pelapor": "Jennifer Bechtelar",
        "rt": "04",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-02-28 19:10",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 5
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-16",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1738",
        "pelapor": "Kayla Skiles",
        "rt": "05",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-06 07:43",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1310",
        "pelapor": "Joanne Kassulke",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-14 05:13",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 18
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5549",
        "pelapor": "Marianne Heathcote-Wolf",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 02 / RW 01",
        "waktu_kejadian": "2026-02-27 11:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3894",
        "pelapor": "Lucia Ortiz II",
        "rt": "02",
        "jenis_bencana": "Gunung Meletus",
        "lokasi": "RT 02 / RW 05",
        "waktu_kejadian": "2026-02-15 03:19",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-12",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5639",
        "pelapor": "Maryann Feil",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-13 10:24",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 42
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-07",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7777",
        "pelapor": "Dr. May Berge",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-02-24 21:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8413",
        "pelapor": "Clyde Medhurst",
        "rt": "08",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 06 / RW 03",
        "waktu_kejadian": "2026-02-24 18:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1944",
        "pelapor": "Sylvester Marks",
        "rt": "05",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 08 / RW 03",
        "waktu_kejadian": "2026-03-04 05:03",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4590",
        "pelapor": "Kari D'Amore III",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 01 / RW 04",
        "waktu_kejadian": "2026-03-05 23:16",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3679",
        "pelapor": "Dr. Garrett Rodriguez",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 01",
        "waktu_kejadian": "2026-02-19 06:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 41
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-18",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9868",
        "pelapor": "Juanita Altenwerth",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 04",
        "waktu_kejadian": "2026-03-08 08:18",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7051",
        "pelapor": "Gene Mitchell",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-02-26 17:41",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 7
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-20",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8192",
        "pelapor": "Miss Mildred Fahey DDS",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 01 / RW 02",
        "waktu_kejadian": "2026-03-08 23:09",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7826",
        "pelapor": "Hazel Zieme I",
        "rt": "03",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 02",
        "waktu_kejadian": "2026-02-13 10:28",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Butuh Bantuan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4527",
        "pelapor": "Ann Greenfelder PhD",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 06 / RW 02",
        "waktu_kejadian": "2026-03-07 00:32",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-06",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2595",
        "pelapor": "Mr. Salvatore Mertz",
        "rt": "05",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-02-17 19:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1085",
        "pelapor": "Kristin Kirlin",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-22 03:31",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 1
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-2942",
        "pelapor": "Christie Blanda",
        "rt": "01",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 08 / RW 01",
        "waktu_kejadian": "2026-03-03 03:37",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-23",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7747",
        "pelapor": "Mrs. Angel Senger",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 05",
        "waktu_kejadian": "2026-03-02 09:17",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 4
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3429",
        "pelapor": "Dr. Gertrude Doyle",
        "rt": "01",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 03",
        "waktu_kejadian": "2026-02-17 19:47",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 17
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-17",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9466",
        "pelapor": "Garry Dibbert",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 07 / RW 02",
        "waktu_kejadian": "2026-03-01 13:07",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-09",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1830",
        "pelapor": "Jamie Pfeffer V",
        "rt": "05",
        "jenis_bencana": "Gempa",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-02-14 20:09",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 2,
            "luka_ringan": 5,
            "mengungsi": 18
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-21",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3604",
        "pelapor": "Dr. Chad Rutherford",
        "rt": "06",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 08 / RW 05",
        "waktu_kejadian": "2026-03-04 00:34",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 49
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-22",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-6124",
        "pelapor": "Angie Stoltenberg",
        "rt": "08",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 05",
        "waktu_kejadian": "2026-02-19 18:42",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 3,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-4325",
        "pelapor": "Laura Davis MD",
        "rt": "08",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-02-20 01:05",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 36
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8842",
        "pelapor": "Dwayne Strosin",
        "rt": "02",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 05 / RW 02",
        "waktu_kejadian": "2026-03-04 00:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 0,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9209",
        "pelapor": "Edgar Yost",
        "rt": "02",
        "jenis_bencana": "Pohon Tumbang",
        "lokasi": "RT 03 / RW 05",
        "waktu_kejadian": "2026-02-19 05:26",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-04",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-1378",
        "pelapor": "Omar Doyle",
        "rt": "07",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 09 / RW 04",
        "waktu_kejadian": "2026-02-20 07:57",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 4,
            "mengungsi": 29
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-24",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-8649",
        "pelapor": "Flora Ward",
        "rt": "07",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 07 / RW 04",
        "waktu_kejadian": "2026-02-18 03:01",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 2,
            "mengungsi": 2
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-19",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-3375",
        "pelapor": "Suzanne Moore PhD",
        "rt": "03",
        "jenis_bencana": "Tanah Longsor",
        "lokasi": "RT 06 / RW 05",
        "waktu_kejadian": "2026-03-04 18:46",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 3
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-02",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-7621",
        "pelapor": "Regina Berge DDS",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 02 / RW 02",
        "waktu_kejadian": "2026-03-05 00:53",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 1,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-03-08",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-9921",
        "pelapor": "Jeannette Mills PhD",
        "rt": "04",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 02 / RW 04",
        "waktu_kejadian": "2026-03-10 06:53",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 6
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-03-11",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5710",
        "pelapor": "Patty Ryan",
        "rt": "09",
        "jenis_bencana": "Kebakaran",
        "lokasi": "RT 07 / RW 01",
        "waktu_kejadian": "2026-03-07 19:48",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 1,
            "mengungsi": 0
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Dalam Penanganan",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5344",
        "pelapor": "Muriel Yundt IV",
        "rt": "09",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 03 / RW 02",
        "waktu_kejadian": "2026-03-07 06:52",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 2,
            "mengungsi": 41
        },
        "dampak_kerusakan": [
            "Jalan tertutup"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Selesai",
        "tanggal_laporan": "2026-02-14",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    },
    {
        "id": "BC-5005",
        "pelapor": "Theresa Weber",
        "rt": "03",
        "jenis_bencana": "Banjir",
        "lokasi": "RT 04 / RW 04",
        "waktu_kejadian": "2026-03-03 20:06",
        "dampak_korban": {
            "meninggal": 0,
            "luka_berat": 0,
            "luka_ringan": 3,
            "mengungsi": 42
        },
        "dampak_kerusakan": [
            "Atap rusak",
            "Fasilitas terendam"
        ],
        "kebutuhan_mendesak": [
            "Logistik",
            "Tenda",
            "Obat-obatan"
        ],
        "status_penanganan": "Darurat",
        "tanggal_laporan": "2026-02-13",
        "keterangan_tambahan": "Dilaporkan segera ke posko pusat."
    }
]
