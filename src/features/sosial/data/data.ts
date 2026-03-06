import { fakerID_ID as faker } from '@faker-js/faker'
import { Sosial } from './schema'
import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircle2,
    Circle,
    HelpCircle,
    Timer,
    XCircle,
} from 'lucide-react'

export const statuses = [
    {
        value: 'open',
        label: 'Baru',
        icon: HelpCircle,
    },
    {
        value: 'in-progress',
        label: 'Sedang Ditangani',
        icon: Timer,
    },
    {
        value: 'resolved',
        label: 'Selesai',
        icon: CheckCircle2,
    },
    {
        value: 'closed',
        label: 'Ditutup',
        icon: XCircle,
    },
]

export const priorities = [
    {
        label: 'Rendah',
        value: 'low',
        icon: ArrowDownIcon,
    },
    {
        label: 'Sedang',
        value: 'medium',
        icon: ArrowRightIcon,
    },
    {
        label: 'Tinggi',
        value: 'high',
        icon: ArrowUpIcon,
    },
    {
        label: 'Kritis',
        value: 'critical',
        icon: Circle,
    },
]

// Categories untuk dashboard
export const categories = [
    { id: 'warga-sakit', label: 'Warga Sakit', value: 'warga-sakit', color: '#ef4444', icon: '🏥' },
    { id: 'warga-meninggal', label: 'Warga Meninggal', value: 'warga-meninggal', color: '#6b7280', icon: '⚰️' },
    { id: 'warga-miskin', label: 'Warga Miskin Ekstrem', value: 'warga-miskin', color: '#f59e0b', icon: '💰' },
    { id: 'lansia-terlantar', label: 'Lansia Terlantar', value: 'lansia-terlantar', color: '#8b5cf6', icon: '👴' },
    { id: 'anak-tidak-sekolah', label: 'Anak Tidak Sekolah', value: 'anak-tidak-sekolah', color: '#3b82f6', icon: '🎓' },
];

const titles = [
    'Pendataan penerima bantuan sosial',
    'Warga sakit butuh bantuan transportasi ke RS',
    'Keluarga kurang mampu membutuhkan sembako',
    'Anak tidak sekolah perlu bantuan pendidikan',
    'Lampu penerangan jalan mati total',
    'Jalan berlubang membahayakan pengendara',
    'Fasilitas posyandu perlu perbaikan',
    'Warga lansia sebatang kara butuh perhatian',
]

const descriptions = [
    'Mohon update data terbaru untuk penyaluran BLT bulan ini.',
    'Kondisi warga sudah lemas dan tidak ada kendaraan untuk ke puskesmas.',
    'Stok beras habis dan kepala keluarga sedang sakit tidak bisa bekerja.',
    'Anak usia sekolah tidak bisa lanjut sekolah karena faktor ekonomi.',
    'Gelap total di malam hari, rawan kejahatan dan kecelakaan.',
    'Sudah banyak pengendara motor yang terjatuh akibat jalan rusak.',
    'Atap posyandu bocor, kegiatan imunisasi jadi terganggu.',
]

export const mockSosialData: Sosial[] = Array.from({ length: 20 }).map(() => ({
    id: `SO-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.helpers.arrayElement(titles),
    status: faker.helpers.arrayElement(statuses).value,
    priority: faker.helpers.arrayElement(priorities).value,
    category: faker.helpers.arrayElement(categories).value,
    location: `RT ${faker.number.int({ min: 1, max: 10 })} / RW ${faker.number.int({ min: 1, max: 5 })}`,
    lat: -6.200000 + (Math.random() * 0.01 - 0.005),
    lng: 106.816666 + (Math.random() * 0.01 - 0.005),
    description: faker.helpers.arrayElement(descriptions),
    reportedBy: faker.person.fullName(),
    date: faker.date.recent({ days: 30 }).toISOString(),
}))

// Data untuk Warga Sakit
export const wargaSakitData = [
    { id: 1, nama: 'Budi Santoso', jenisPenyakit: 'DBD', kategori: 'Menular', alamat: 'RT 001 RW 02', umur: 35, tanggalLaporan: '2026-01-15', lat: -6.2088, lng: 106.8456, keterangan: 'Dalam perawatan RS' },
    { id: 2, nama: 'Siti Aminah', jenisPenyakit: 'Diabetes', kategori: 'Tidak Menular', alamat: 'RT 001 RW 03', umur: 52, tanggalLaporan: '2026-01-18', lat: -6.2095, lng: 106.8465, keterangan: 'Kontrol rutin' },
    { id: 3, nama: 'Ahmad Fauzi', jenisPenyakit: 'TBC', kategori: 'Menular', alamat: 'RT 002 RW 01', umur: 45, tanggalLaporan: '2026-01-20', lat: -6.2100, lng: 106.8470, keterangan: 'Fase pengobatan' },
    { id: 4, nama: 'Dewi Lestari', jenisPenyakit: 'Darah Tinggi', kategori: 'Tidak Menular', alamat: 'RT 001 RW 02', umur: 58, tanggalLaporan: '2026-01-22', lat: -6.2085, lng: 106.8450, keterangan: 'Kontrol rutin' },
    { id: 5, nama: 'Rudi Hartono', jenisPenyakit: 'Asma', kategori: 'Tidak Menular', alamat: 'RT 003 RW 01', umur: 28, tanggalLaporan: '2026-01-25', lat: -6.2110, lng: 106.8480, keterangan: 'Kambuh sesekali' },
    { id: 6, nama: 'Sri Wahyuni', jenisPenyakit: 'Jantung', kategori: 'Tidak Menular', alamat: 'RT 002 RW 02', umur: 62, tanggalLaporan: '2026-01-28', lat: -6.2098, lng: 106.8468, keterangan: 'Perawatan intensif' },
    { id: 7, nama: 'Andi Wijaya', jenisPenyakit: 'Hepatitis', kategori: 'Menular', alamat: 'RT 001 RW 01', umur: 38, tanggalLaporan: '2026-02-01', lat: -6.2092, lng: 106.8458, keterangan: 'Dalam pengobatan' },
    { id: 8, nama: 'Nurul Hidayah', jenisPenyakit: 'Stroke', kategori: 'Tidak Menular', alamat: 'RT 003 RW 02', umur: 65, tanggalLaporan: '2026-02-03', lat: -6.2115, lng: 106.8485, keterangan: 'Pasca stroke ringan' },
    { id: 9, nama: 'Bambang Susilo', jenisPenyakit: 'Gagal Ginjal', kategori: 'Tidak Menular', alamat: 'RT 002 RW 03', umur: 55, tanggalLaporan: '2026-02-05', lat: -6.2105, lng: 106.8472, keterangan: 'Cuci darah rutin' },
    { id: 10, nama: 'Rina Marlina', jenisPenyakit: 'Tipes', kategori: 'Menular', alamat: 'RT 001 RW 03', umur: 32, tanggalLaporan: '2026-02-08', lat: -6.2090, lng: 106.8462, keterangan: 'Pemulihan' },
    { id: 11, nama: 'Budi Raharjo', jenisPenyakit: 'HIV/AIDS', kategori: 'Menular', alamat: 'RT 003 RW 03', umur: 40, tanggalLaporan: '2026-02-10', lat: -6.2108, lng: 106.8481, keterangan: 'Dalam pengobatan rutin' },
    { id: 12, nama: 'Siti Zulaikha', jenisPenyakit: 'Lainnya', kategori: 'Tidak Menular', alamat: 'RT 002 RW 01', umur: 29, tanggalLaporan: '2026-02-11', lat: -6.2082, lng: 106.8453, keterangan: 'Alergi berat' },
    { id: 13, nama: 'Agus Setiawan', jenisPenyakit: 'DBD', kategori: 'Menular', alamat: 'RT 004 RW 01', umur: 12, tanggalLaporan: '2026-02-12', lat: -6.2120, lng: 106.8490, keterangan: 'Gejala ringan' },
    { id: 14, nama: 'Eko Sulistyo', jenisPenyakit: 'Diabetes', kategori: 'Tidak Menular', alamat: 'RT 001 RW 02', umur: 48, tanggalLaporan: '2026-02-14', lat: -6.2089, lng: 106.8457, keterangan: 'Kontrol gula darah' },
    { id: 15, nama: 'Mulyadi', jenisPenyakit: 'TBC', kategori: 'Menular', alamat: 'RT 005 RW 02', umur: 50, tanggalLaporan: '2026-02-15', lat: -6.2130, lng: 106.8500, keterangan: 'Isolasi mandiri' },
    { id: 16, nama: 'Ratna Sari', jenisPenyakit: 'Darah Tinggi', kategori: 'Tidak Menular', alamat: 'RT 002 RW 03', umur: 55, tanggalLaporan: '2026-02-16', lat: -6.2106, lng: 106.8475, keterangan: 'Rawat jalan' },
    { id: 17, nama: 'Suprianto', jenisPenyakit: 'Stroke', kategori: 'Tidak Menular', alamat: 'RT 003 RW 01', umur: 70, tanggalLaporan: '2026-02-18', lat: -6.2114, lng: 106.8484, keterangan: 'Fisioterapi rutin' },
    { id: 18, nama: 'Wahyu Hidayat', jenisPenyakit: 'Asma', kategori: 'Tidak Menular', alamat: 'RT 001 RW 01', umur: 18, tanggalLaporan: '2026-02-19', lat: -6.2093, lng: 106.8459, keterangan: 'Inhaler rutin' },
    { id: 19, nama: 'Yulianti', jenisPenyakit: 'Jantung', kategori: 'Tidak Menular', alamat: 'RT 004 RW 02', umur: 59, tanggalLaporan: '2026-02-21', lat: -6.2125, lng: 106.8495, keterangan: 'Pasca operasi' },
    { id: 20, nama: 'Zulkifli', jenisPenyakit: 'HIV/AIDS', kategori: 'Menular', alamat: 'RT 002 RW 01', umur: 34, tanggalLaporan: '2026-02-22', lat: -6.2104, lng: 106.8474, keterangan: 'Konsumsi ARV' },
    { id: 21, nama: 'Suryadi', jenisPenyakit: 'Gagal Ginjal', kategori: 'Tidak Menular', alamat: 'RT 003 RW 02', umur: 56, tanggalLaporan: '2026-02-23', lat: -6.2117, lng: 106.8487, keterangan: 'Hemodialisa' },
    { id: 22, nama: 'Lilis Suwarni', jenisPenyakit: 'Tipes', kategori: 'Menular', alamat: 'RT 001 RW 03', umur: 27, tanggalLaporan: '2026-02-24', lat: -6.2096, lng: 106.8466, keterangan: 'Istirahat total' },
    { id: 23, nama: 'Doni Tata', jenisPenyakit: 'DBD', kategori: 'Menular', alamat: 'RT 005 RW 01', umur: 21, tanggalLaporan: '2026-02-24', lat: -6.2135, lng: 106.8505, keterangan: 'Observasi' },
    { id: 24, nama: 'Endang Lestari', jenisPenyakit: 'Diabetes', kategori: 'Tidak Menular', alamat: 'RT 002 RW 02', umur: 64, tanggalLaporan: '2026-02-25', lat: -6.2101, lng: 106.8471, keterangan: 'Luka diabetes' },
    { id: 25, nama: 'Gito Rollies', jenisPenyakit: 'Kanker', kategori: 'Tidak Menular', alamat: 'RT 003 RW 03', umur: 53, tanggalLaporan: '2026-02-25', lat: -6.2109, lng: 106.8482, keterangan: 'Kemoterapi' },
    { id: 26, nama: 'Heri Susanto', jenisPenyakit: 'Lainnya', kategori: 'Tidak Menular', alamat: 'RT 001 RW 01', umur: 41, tanggalLaporan: '2026-02-25', lat: -6.2083, lng: 106.8453, keterangan: 'Asam lambung akut' },
];

// Data untuk Warga Meninggal
export const wargaMeninggalData = [
    { id: 1, nama: 'Sukarno Wijaya', penyebab: 'Sakit', umur: 75, tanggalMeninggal: '2025-11-10', alamat: 'RT 001 RW 02', lat: -6.2089, lng: 106.8457, keterangan: 'Sakit jantung' },
    { id: 2, nama: 'Mariam Sari', penyebab: 'Usia lanjut', umur: 82, tanggalMeninggal: '2025-11-25', alamat: 'RT 002 RW 01', lat: -6.2101, lng: 106.8471, keterangan: 'Meninggal dengan tenang' },
    { id: 3, nama: 'Hendra Kusuma', penyebab: 'Kecelakaan', umur: 42, tanggalMeninggal: '2025-12-05', alamat: 'RT 001 RW 03', lat: -6.2093, lng: 106.8463, keterangan: 'Kecelakaan lalu lintas' },
    { id: 4, nama: 'Suminah', penyebab: 'Sakit', umur: 68, tanggalMeninggal: '2025-12-18', alamat: 'RT 003 RW 01', lat: -6.2112, lng: 106.8482, keterangan: 'Komplikasi diabetes' },
    { id: 5, nama: 'Abdul Rahman', penyebab: 'Penyakit menular', umur: 55, tanggalMeninggal: '2026-01-08', alamat: 'RT 002 RW 02', lat: -6.2099, lng: 106.8469, keterangan: 'TBC Kronis' },
    { id: 6, nama: 'Fatimah Zahra', penyebab: 'Usia lanjut', umur: 78, tanggalMeninggal: '2026-01-20', alamat: 'RT 001 RW 01', lat: -6.2087, lng: 106.8455, keterangan: 'Usia lanjut' },
    { id: 7, nama: 'Joko Widodo', penyebab: 'Sakit', umur: 63, tanggalMeninggal: '2026-02-02', alamat: 'RT 003 RW 02', lat: -6.2116, lng: 106.8486, keterangan: 'Gagal ginjal' },
    { id: 8, nama: 'Sutrisno', penyebab: 'Lainnya', umur: 45, tanggalMeninggal: '2026-02-10', alamat: 'RT 001 RW 01', lat: -6.2085, lng: 106.8451, keterangan: 'Mendadak' },
    { id: 9, nama: 'Kusuma Wardani', penyebab: 'Sakit', umur: 61, tanggalMeninggal: '2026-02-12', alamat: 'RT 004 RW 02', lat: -6.2127, lng: 106.8497, keterangan: 'Stroke' },
    { id: 10, nama: 'Subakti', penyebab: 'Usia lanjut', umur: 85, tanggalMeninggal: '2026-02-15', alamat: 'RT 002 RW 03', lat: -6.2108, lng: 106.8477, keterangan: 'Meninggal di rumah' },
    { id: 11, nama: 'Rahmatullah', penyebab: 'Penyakit menular', umur: 39, tanggalMeninggal: '2026-02-18', alamat: 'RT 005 RW 01', lat: -6.2138, lng: 106.8508, keterangan: 'Hepatitis berat' },
    { id: 12, nama: 'Sumarti', penyebab: 'Sakit', umur: 72, tanggalMeninggal: '2026-02-20', alamat: 'RT 003 RW 01', lat: -6.2115, lng: 106.8485, keterangan: 'Asma akut' },
    { id: 13, nama: 'Imam Bonjol', penyebab: 'Kecelakaan', umur: 24, tanggalMeninggal: '2026-02-22', alamat: 'RT 001 RW 02', lat: -6.2090, lng: 106.8458, keterangan: 'Terjatuh' },
    { id: 14, nama: 'Kartini', penyebab: 'Sakit', umur: 58, tanggalMeninggal: '2026-02-23', alamat: 'RT 002 RW 02', lat: -6.2103, lng: 106.8473, keterangan: 'Kanker payudara' },
    { id: 15, nama: 'Hassanudin', penyebab: 'Lainnya', umur: 67, tanggalMeninggal: '2026-02-24', alamat: 'RT 004 RW 01', lat: -6.2122, lng: 106.8492, keterangan: 'Tidak diketahui' },
];

// Data untuk Warga Miskin Ekstrem
export const wargaMiskinData = [
    { id: 1, nama: 'Slamet Riyadi', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 001 RW 02', jumlahTanggungan: 4, lat: -6.2086, lng: 106.8454, pendapatan: 0, umur: 42 },
    { id: 3, nama: 'Sugeng Priyono', kondisiEkonomi: 'Lansia tanpa penghasilan', jenisBantuan: 'BPNT / Sembako', statusBantuan: 'Penerima', alamat: 'RT 001 RW 03', jumlahTanggungan: 2, lat: -6.2094, lng: 106.8464, pendapatan: 0, umur: 72 },
    { id: 4, nama: 'Rubiyah', kondisiEkonomi: 'Disabilitas', jenisBantuan: 'KIS / BPJS PBI', statusBantuan: 'Penerima', alamat: 'RT 003 RW 01', jumlahTanggungan: 1, lat: -6.2113, lng: 106.8483, pendapatan: 0, umur: 45 },
    { id: 5, nama: 'Tuti Handayani', kondisiEkonomi: 'Kepala keluarga tunggal', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 002 RW 02', jumlahTanggungan: 2, lat: -6.2097, lng: 106.8467, pendapatan: 1200000, umur: 33 },
    { id: 7, nama: 'Sumini', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'Bantuan pendidikan', statusBantuan: 'Penerima', alamat: 'RT 003 RW 02', jumlahTanggungan: 3, lat: -6.2117, lng: 106.8487, pendapatan: 0, umur: 41 },
    { id: 8, nama: 'Kasturi', kondisiEkonomi: 'Lansia tanpa penghasilan', jenisBantuan: 'PKH', statusBantuan: 'Penerima', alamat: 'RT 002 RW 03', jumlahTanggungan: 1, lat: -6.2106, lng: 106.8474, pendapatan: 0, umur: 68 },
    { id: 10, nama: 'Aisyah', kondisiEkonomi: 'Kepala keluarga tunggal', jenisBantuan: 'BPNT / Sembako', statusBantuan: 'Penerima', alamat: 'RT 003 RW 01', jumlahTanggungan: 2, lat: -6.2114, lng: 106.8484, pendapatan: 1100000, umur: 29 },
    { id: 11, nama: 'Warto', kondisiEkonomi: 'Disabilitas', jenisBantuan: 'KIS / BPJS PBI', statusBantuan: 'Penerima', alamat: 'RT 002 RW 01', jumlahTanggungan: 3, lat: -6.2103, lng: 106.8475, pendapatan: 0, umur: 55 },
    { id: 12, nama: 'Yasin Mahmud', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 001 RW 03', jumlahTanggungan: 4, lat: -6.2096, lng: 106.8466, pendapatan: 0, umur: 47 },
    { id: 13, nama: 'Jumadi', kondisiEkonomi: 'Pekerja harian lepas', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 004 RW 02', jumlahTanggungan: 3, lat: -6.2110, lng: 106.8490, pendapatan: 750000, umur: 40 },
    { id: 19, nama: 'Suroso', kondisiEkonomi: 'Pengangguran', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 005 RW 01', jumlahTanggungan: 4, lat: -6.2140, lng: 106.8510, pendapatan: 0, umur: 43 },
    { id: 21, nama: 'Karsito', kondisiEkonomi: 'Lansia tanpa penghasilan', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 003 RW 02', jumlahTanggungan: 1, lat: -6.2118, lng: 106.8488, pendapatan: 0, umur: 69 },
    { id: 22, nama: 'Sulis', kondisiEkonomi: 'Disabilitas', jenisBantuan: 'PKH', statusBantuan: 'Penerima', alamat: 'RT 002 RW 03', jumlahTanggungan: 2, lat: -6.2107, lng: 106.8475, pendapatan: 400000, umur: 31 },
    { id: 24, nama: 'Nining', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 004 RW 03', jumlahTanggungan: 5, lat: -6.2112, lng: 106.8492, pendapatan: 0, umur: 40 },
    { id: 25, nama: 'Mulyono', kondisiEkonomi: 'Pekerja harian lepas', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 002 RW 02', jumlahTanggungan: 2, lat: -6.2100, lng: 106.8470, pendapatan: 850000, umur: 54 },
];

// Data untuk Lansia Terlantar
export const lansiaTerlantarData = [
    { id: 1, nama: 'Pak Sarno', umur: 72, kondisi: 'Tinggal sendiri', kondisiKesehatan: 'Lemah', alamat: 'RT 001 RW 02', lat: -6.2084, lng: 106.8452, bantuan: 'Perlu pengawasan' },
    { id: 2, nama: 'Mbah Siti', umur: 78, kondisi: 'Tidak memiliki keluarga', kondisiKesehatan: 'Sakit', alamat: 'RT 002 RW 01', lat: -6.2104, lng: 106.8476, bantuan: 'Perlu perawatan' },
    { id: 3, nama: 'Pak Tono', umur: 69, kondisi: 'Tinggal dengan keluarga', kondisiKesehatan: 'Baik', alamat: 'RT 001 RW 03', lat: -6.2095, lng: 106.8465, bantuan: 'Mandiri' },
    { id: 4, nama: 'Pak Kusumo', umur: 68, kondisi: 'Diusir keluarga', kondisiKesehatan: 'Baik', alamat: 'RT 003 RW 01', lat: -6.2116, lng: 106.8485, bantuan: 'Tempat tinggal' },
    { id: 5, nama: 'Ponirah', umur: 80, kondisi: 'Lansia terlantar', kondisiKesehatan: 'Sakit', alamat: 'RT 004 RW 02', lat: -6.2115, lng: 106.8495, bantuan: 'Perawatan medis' },
    { id: 6, nama: 'Mbah Warno', umur: 75, kondisi: 'Tinggal sendiri', kondisiKesehatan: 'Lemah', alamat: 'RT 002 RW 03', lat: -6.2108, lng: 106.8478, bantuan: 'Perlu pengawasan' },
    { id: 7, nama: 'Ibu Sumirah', umur: 71, kondisi: 'Tidak memiliki keluarga', kondisiKesehatan: 'Kritis', alamat: 'RT 003 RW 02', lat: -6.2120, lng: 106.8490, bantuan: 'Perlu perawatan intensif' },
    { id: 8, nama: 'Pak Djumadi', umur: 83, kondisi: 'Lansia terlantar', kondisiKesehatan: 'Lemah', alamat: 'RT 001 RW 01', lat: -6.2086, lng: 106.8453, bantuan: 'Bantuan sosial' },
    { id: 9, nama: 'Mbah Kartini', umur: 76, kondisi: 'Tinggal dengan keluarga', kondisiKesehatan: 'Sakit', alamat: 'RT 004 RW 01', lat: -6.2124, lng: 106.8494, bantuan: 'Perawatan medis' },
    { id: 10, nama: 'Pak Sukidjo', umur: 67, kondisi: 'Tinggal sendiri', kondisiKesehatan: 'Baik', alamat: 'RT 002 RW 02', lat: -6.2099, lng: 106.8469, bantuan: 'Pengawasan berkala' },
    { id: 11, nama: 'Mbah Painem', umur: 85, kondisi: 'Diusir keluarga', kondisiKesehatan: 'Kritis', alamat: 'RT 005 RW 01', lat: -6.2138, lng: 106.8508, bantuan: 'Perawatan intensif' },
    { id: 12, nama: 'Ibu Srinatun', umur: 70, kondisi: 'Tidak memiliki keluarga', kondisiKesehatan: 'Baik', alamat: 'RT 003 RW 03', lat: -6.2112, lng: 106.8483, bantuan: 'Pendampingan sosial' },
];

// Data untuk Anak Tidak Sekolah
export const anakTidakSekolahData = [
    { id: 1, nama: 'Andi Nugroho', kategoriUsia: '13 - 15 Tahun', alasanTidakSekolah: 'Faktor Ekonomi', alamat: 'RT 001 RW 02', lat: -6.2087, lng: 106.8455, orangTua: 'Slamet Riyadi', adaKendalaDokumen: true, dokumenBermasalah: ['Kartu Keluarga'], catatanTambahan: 'Keluarga tidak mampu membayar SPP' },
    { id: 2, nama: 'Rina Safitri', kategoriUsia: '16 - 18 Tahun', alasanTidakSekolah: 'Faktor Keluarga', alamat: 'RT 002 RW 01', lat: -6.2107, lng: 106.8477, orangTua: 'Warni', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: 'Sudah bekerja membantu keluarga' },
    { id: 3, nama: 'Budi Setiawan', kategoriUsia: '6 - 12 Tahun', alasanTidakSekolah: 'Faktor Keluarga', alamat: 'RT 001 RW 03', lat: -6.2092, lng: 106.8462, orangTua: 'Tuti Handayani', adaKendalaDokumen: true, dokumenBermasalah: ['AKTA Kelahiran'], catatanTambahan: 'Belum diurus akta kelahirannya' },
    { id: 4, nama: 'Lina Marliana', kategoriUsia: '16 - 18 Tahun', alasanTidakSekolah: 'Faktor Ekonomi', alamat: 'RT 003 RW 01', lat: -6.2119, lng: 106.8489, orangTua: 'Sumini', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: 'Butuh bantuan seragam sekolah' },
    { id: 5, nama: 'Eko Prasetyo', kategoriUsia: '13 - 15 Tahun', alasanTidakSekolah: 'Faktor Akses & Lingkungan', alamat: 'RT 002 RW 02', lat: -6.2119, lng: 106.8489, orangTua: 'Sumarjo', adaKendalaDokumen: true, dokumenBermasalah: ['AKTA Kelahiran', 'Kartu Keluarga'], catatanTambahan: 'Pindahan dari luar kota, dokumen hilang' },
    { id: 6, nama: 'Sari Dewi', kategoriUsia: '6 - 12 Tahun', alasanTidakSekolah: 'Faktor Kesehatan', alamat: 'RT 001 RW 01', lat: -6.2089, lng: 106.8457, orangTua: 'Rubiyah', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: 'Sedang menjalani pengobatan rutin' },
    { id: 7, nama: 'Tegar Perdana', kategoriUsia: '6 - 12 Tahun', alasanTidakSekolah: 'Faktor Ekonomi', alamat: 'RT 004 RW 03', lat: -6.2120, lng: 106.8500, orangTua: 'Nining', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: '' },
    { id: 8, nama: 'Ayu Lestari', kategoriUsia: '13 - 15 Tahun', alasanTidakSekolah: 'Faktor Keluarga', alamat: 'RT 001 RW 02', lat: -6.2090, lng: 106.8460, orangTua: 'Suparman', adaKendalaDokumen: true, dokumenBermasalah: ['Kartu Keluarga'], catatanTambahan: 'Dokumen KK masih gabung dengan nenek' },
    { id: 9, nama: 'Rian Hidayat', kategoriUsia: '6 - 12 Tahun', alasanTidakSekolah: 'Faktor Akses & Lingkungan', alamat: 'RT 005 RW 01', lat: -6.2135, lng: 106.8505, orangTua: 'Suroso', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: 'Masalah transportasi ke sekolah asal' },
    { id: 10, nama: 'Maya Sari', kategoriUsia: '16 - 18 Tahun', alasanTidakSekolah: 'Faktor Keluarga', alamat: 'RT 002 RW 03', lat: -6.2105, lng: 106.8475, orangTua: 'Warto', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: 'Mengurusi adik di rumah' },
    { id: 11, nama: 'Fajar Siddiq', kategoriUsia: '13 - 15 Tahun', alasanTidakSekolah: 'Faktor Ekonomi', alamat: 'RT 005 RW 02', lat: -6.2140, lng: 106.8510, orangTua: 'Bambang', adaKendalaDokumen: true, dokumenBermasalah: ['AKTA Kelahiran'], catatanTambahan: 'Tunggakan biaya sebelumnya' },
    { id: 12, nama: 'Dinda Kirana', kategoriUsia: '6 - 12 Tahun', alasanTidakSekolah: 'Faktor Kesehatan', alamat: 'RT 003 RW 02', lat: -6.2125, lng: 106.8495, orangTua: 'Mulyono', adaKendalaDokumen: false, dokumenBermasalah: [], catatanTambahan: 'Belum bisa berjalan karena sakit sejak kecil' },
];

// Data untuk Anak Putus Sekolah
export const anakPutusSekolahData = [
    { id: 1, nama: 'Andi Nugroho', umur: 15, jenjang: 'SMP', penyebab: 'Ekonomi', alamat: 'RT 001 RW 02', lat: -6.2087, lng: 106.8455, tahunPutus: 2025, orangTua: 'Slamet Riyadi' },
    { id: 2, nama: 'Rina Safitri', umur: 16, jenjang: 'SMA', penyebab: 'Pernikahan dini', alamat: 'RT 002 RW 01', lat: -6.2107, lng: 106.8477, tahunPutus: 2025, orangTua: 'Warni' },
    { id: 3, nama: 'Budi Setiawan', umur: 12, jenjang: 'SD', penyebab: 'Masalah keluarga', alamat: 'RT 001 RW 03', lat: -6.2092, lng: 106.8462, tahunPutus: 2026, orangTua: 'Tuti Handayani' },
    { id: 4, nama: 'Lina Marliana', umur: 17, jenjang: 'SMK', penyebab: 'Ekonomi', alamat: 'RT 003 RW 01', lat: -6.2119, lng: 106.8489, tahunPutus: 2025, orangTua: 'Sumini' },
    { id: 5, nama: 'Eko Prasetyo', umur: 14, jenjang: 'SMP', penyebab: 'Kurang motivasi', alamat: 'RT 002 RW 02', lat: -6.2119, lng: 106.8489, tahunPutus: 2025, orangTua: 'Sumini' },
    { id: 6, nama: 'Sari Dewi', umur: 13, jenjang: 'SMP', penyebab: 'Disabilitas', alamat: 'RT 001 RW 01', lat: -6.2089, lng: 106.8457, tahunPutus: 2025, orangTua: 'Rubiyah' },
    { id: 7, nama: 'Tegar Perdana', umur: 10, jenjang: 'SD', penyebab: 'Ekonomi', alamat: 'RT 004 RW 03', lat: -6.2120, lng: 106.8500, tahunPutus: 2026, orangTua: 'Nining' },
    { id: 8, nama: 'Ayu Lestari', umur: 15, jenjang: 'SMP', penyebab: 'Pekerja anak', alamat: 'RT 001 RW 02', lat: -6.2090, lng: 106.8460, tahunPutus: 2025, orangTua: 'Suparman' },
    { id: 9, nama: 'Rian Hidayat', umur: 11, jenjang: 'SD', penyebab: 'Ekonomi', alamat: 'RT 005 RW 01', lat: -6.2135, lng: 106.8505, tahunPutus: 2026, orangTua: 'Suroso' },
    { id: 10, nama: 'Maya Sari', umur: 16, jenjang: 'SMA', penyebab: 'Masalah keluarga', alamat: 'RT 002 RW 03', lat: -6.2105, lng: 106.8475, tahunPutus: 2025, orangTua: 'Warto' },
];

// Summary statistics
export const dashboardStats = {
    totalWargaSakit: wargaSakitData.length,
    totalWargaMeninggal: wargaMeninggalData.length,
    totalWargaMiskin: wargaMiskinData.length,
    totalLansiaTerlantar: lansiaTerlantarData.length,
    totalAnakTidakSekolah: anakTidakSekolahData.length,
    totalAnakPutusSekolah: anakPutusSekolahData.length,
    penerimaB: wargaMiskinData.filter(w => w.statusBantuan === 'Penerima').length,
};
