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
    { id: 'anak-putus-sekolah', label: 'Anak Putus Sekolah', value: 'anak-putus-sekolah', color: '#3b82f6', icon: '🎓' },
];

const titles = [
    'Pendataan penerima bantuan sosial',
    'Warga sakit butuh bantuan transportasi ke RS',
    'Keluarga kurang mampu membutuhkan sembako',
    'Anak putus sekolah perlu bantuan pendidikan',
    'Lampu penerangan jalan mati total',
    'Jalan berlubang membahayakan pengendara',
    'Fasilitas posyandu perlu perbaikan',
    'Warga lansia sebatang kara butuh perhatian',
]

const descriptions = [
    'Mohon update data terbaru untuk penyaluran BLT bulan ini.',
    'Kondisi warga sudah lemas dan tidak ada kendaraan untuk ke puskesmas.',
    'Stok beras habis dan kepala keluarga sedang sakit tidak bisa bekerja.',
    'Anak usia sekolah dasar tidak bisa lanjut sekolah karena biaya.',
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
];

// Data untuk Warga Meninggal
export const wargaMeninggalData = [
    { id: 1, nama: 'Sukarno Wijaya', penyebab: 'Sakit', umur: 75, tanggalMeninggal: '2025-11-10', alamat: 'RT 001 RW 02', lat: -6.2089, lng: 106.8457, keterangan: 'Sakit jantung' },
    { id: 2, nama: 'Mariam Sari', penyebab: 'Usia lanjut', umur: 82, tanggalMeninggal: '2025-11-25', alamat: 'RT 002 RW 01', lat: -6.2101, lng: 106.8471, keterangan: 'Meninggal dengan tenang' },
    { id: 3, nama: 'Hendra Kusuma', penyebab: 'Kecelakaan', umur: 42, tanggalMeninggal: '2025-12-05', alamat: 'RT 001 RW 03', lat: -6.2093, lng: 106.8463, keterangan: 'Kecelakaan lalu lintas' },
    { id: 4, nama: 'Suminah', penyebab: 'Sakit', umur: 68, tanggalMeninggal: '2025-12-18', alamat: 'RT 003 RW 01', lat: -6.2112, lng: 106.8482, keterangan: 'Komplikasi diabetes' },
    { id: 5, nama: 'Abdul Rahman', penyebab: 'Penyakit menular', umur: 55, tanggalMeninggal: '2026-01-08', alamat: 'RT 002 RW 02', lat: -6.2099, lng: 106.8469, keterangan: 'COVID-19' },
    { id: 6, nama: 'Fatimah Zahra', penyebab: 'Usia lanjut', umur: 78, tanggalMeninggal: '2026-01-20', alamat: 'RT 001 RW 01', lat: -6.2087, lng: 106.8455, keterangan: 'Usia lanjut' },
    { id: 7, nama: 'Joko Widodo', penyebab: 'Sakit', umur: 63, tanggalMeninggal: '2026-02-02', alamat: 'RT 003 RW 02', lat: -6.2116, lng: 106.8486, keterangan: 'Gagal ginjal' },
    { id: 8, nama: 'Sutrisno', penyebab: 'Lainnya', umur: 45, tanggalMeninggal: '2026-02-10', alamat: 'RT 001 RW 01', lat: -6.2085, lng: 106.8451, keterangan: 'Tidak diketahui' },
];

// Data untuk Warga Miskin Ekstrem
export const wargaMiskinData = [
    { id: 1, nama: 'Slamet Riyadi', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 001 RW 02', jumlahTanggungan: 4, lat: -6.2086, lng: 106.8454, pendapatan: 0 },
    { id: 2, nama: 'Warni', kondisiEkonomi: 'Pekerja harian', jenisBantuan: 'PKH', statusBantuan: 'Penerima', alamat: 'RT 002 RW 01', jumlahTanggungan: 3, lat: -6.2102, lng: 106.8473, pendapatan: 800000 },
    { id: 3, nama: 'Sugeng Priyono', kondisiEkonomi: 'Lansia tanpa penghasilan', jenisBantuan: 'BPNT / Sembako', statusBantuan: 'Penerima', alamat: 'RT 001 RW 03', jumlahTanggungan: 2, lat: -6.2094, lng: 106.8464, pendapatan: 0 },
    { id: 4, nama: 'Rubiyah', kondisiEkonomi: 'Disabilitas', jenisBantuan: 'KIS / BPJS PBI', statusBantuan: 'Penerima', alamat: 'RT 003 RW 01', jumlahTanggungan: 1, lat: -6.2113, lng: 106.8483, pendapatan: 0 },
    { id: 5, nama: 'Tuti Handayani', kondisiEkonomi: 'Kepala keluarga tunggal', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 002 RW 02', jumlahTanggungan: 2, lat: -6.2097, lng: 106.8467, pendapatan: 1200000 },
    { id: 6, nama: 'Parman', kondisiEkonomi: 'Pekerja harian', jenisBantuan: 'Bedah rumah', statusBantuan: 'Penerima', alamat: 'RT 001 RW 01', jumlahTanggungan: 5, lat: -6.2088, lng: 106.8456, pendapatan: 900000 },
    { id: 7, nama: 'Sumini', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'Bantuan pendidikan', statusBantuan: 'Penerima', alamat: 'RT 003 RW 02', jumlahTanggungan: 3, lat: -6.2117, lng: 106.8487, pendapatan: 0 },
    { id: 8, nama: 'Kasturi', kondisiEkonomi: 'Lansia tanpa penghasilan', jenisBantuan: 'PKH', statusBantuan: 'Penerima', alamat: 'RT 002 RW 03', jumlahTanggungan: 0, lat: -6.2106, lng: 106.8474, pendapatan: 0 },
    { id: 9, nama: 'Suparman', kondisiEkonomi: 'Pekerja harian', jenisBantuan: 'Bantuan UMKM', statusBantuan: 'Penerima', alamat: 'RT 001 RW 02', jumlahTanggungan: 4, lat: -6.2091, lng: 106.8461, pendapatan: 1000000 },
    { id: 10, nama: 'Aisyah', kondisiEkonomi: 'Kepala keluarga tunggal', jenisBantuan: 'BPNT / Sembako', statusBantuan: 'Penerima', alamat: 'RT 003 RW 01', jumlahTanggungan: 2, lat: -6.2114, lng: 106.8484, pendapatan: 1100000 },
    { id: 11, nama: 'Warto', kondisiEkonomi: 'Disabilitas', jenisBantuan: 'KIS / BPJS PBI', statusBantuan: 'Penerima', alamat: 'RT 002 RW 01', jumlahTanggungan: 3, lat: -6.2103, lng: 106.8475, pendapatan: 0 },
    { id: 12, nama: 'Yasin Mahmud', kondisiEkonomi: 'Pengangguran', jenisBantuan: 'BLT', statusBantuan: 'Penerima', alamat: 'RT 001 RW 03', jumlahTanggungan: 4, lat: -6.2096, lng: 106.8466, pendapatan: 0 },
    { id: 13, nama: 'Jumadi', kondisiEkonomi: 'Pekerja harian lepas', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 004 RW 02', jumlahTanggungan: 3, lat: -6.2110, lng: 106.8490, pendapatan: 750000 },
    { id: 14, nama: 'Sarinah', kondisiEkonomi: 'Lansia sebatang kara', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 002 RW 04', jumlahTanggungan: 0, lat: -6.2099, lng: 106.8459, pendapatan: 0 },
    { id: 15, nama: 'Budi Santoso', kondisiEkonomi: 'Korban PHK', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 001 RW 05', jumlahTanggungan: 4, lat: -6.2120, lng: 106.8488, pendapatan: 0 },
    { id: 16, nama: 'Marni', kondisiEkonomi: 'Janda kurang mampu', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 003 RW 03', jumlahTanggungan: 2, lat: -6.2105, lng: 106.8470, pendapatan: 500000 },
    { id: 17, nama: 'Kasmin', kondisiEkonomi: 'Sakit menahun', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 002 RW 01', jumlahTanggungan: 1, lat: -6.2092, lng: 106.8462, pendapatan: 0 },
    { id: 18, nama: 'Ponirah', kondisiEkonomi: 'Lansia terlantar', jenisBantuan: '-', statusBantuan: 'Belum Menerima', alamat: 'RT 004 RW 02', jumlahTanggungan: 0, lat: -6.2115, lng: 106.8495, pendapatan: 0 },
];

// Data untuk Lansia Terlantar
export const lansiaTerlantarData = [
    { id: 1, nama: 'Pak Sarno', umur: 72, kondisi: 'Tinggal sendiri', kondisiKesehatan: 'Lemah', alamat: 'RT 001 RW 02', lat: -6.2084, lng: 106.8452, bantuan: 'Perlu pengawasan' },
    { id: 2, nama: 'Mbah Siti', umur: 78, kondisi: 'Tidak memiliki keluarga', kondisiKesehatan: 'Sakit-sakitan', alamat: 'RT 002 RW 01', lat: -6.2104, lng: 106.8476, bantuan: 'Perlu perawatan' },
    { id: 3, nama: 'Pak Tono', umur: 69, kondisi: 'Tinggal dengan keluarga', kondisiKesehatan: 'Baik', alamat: 'RT 001 RW 03', lat: -6.2095, lng: 106.8465, bantuan: 'Mandiri' },
    { id: 4, nama: 'Mbah Wulan', umur: 81, kondisi: 'Sakit', kondisiKesehatan: 'Stroke', alamat: 'RT 003 RW 01', lat: -6.2118, lng: 106.8488, bantuan: 'Perawatan intensif' },
    { id: 5, nama: 'Pak Mukri', umur: 75, kondisi: 'Tinggal sendiri', kondisiKesehatan: 'Lemah', alamat: 'RT 002 RW 02', lat: -6.2100, lng: 106.8470, bantuan: 'Perlu pendamping' },
];

// Data untuk Anak Putus Sekolah
export const anakPutusSekolahData = [
    { id: 1, nama: 'Andi Nugroho', umur: 15, jenjang: 'SMP', penyebab: 'Ekonomi', alamat: 'RT 001 RW 02', lat: -6.2087, lng: 106.8455, tahunPutus: 2025, oranTua: 'Slamet Riyadi' },
    { id: 2, nama: 'Rina Safitri', umur: 16, jenjang: 'SMA', penyebab: 'Pernikahan dini', alamat: 'RT 002 RW 01', lat: -6.2107, lng: 106.8477, tahunPutus: 2025, oranTua: 'Warni' },
    { id: 3, nama: 'Budi Setiawan', umur: 12, jenjang: 'SD', penyebab: 'Masalah keluarga', alamat: 'RT 001 RW 03', lat: -6.2092, lng: 106.8462, tahunPutus: 2026, oranTua: 'Tuti Handayani' },
    { id: 4, nama: 'Lina Marliana', umur: 17, jenjang: 'SMK', penyebab: 'Ekonomi', alamat: 'RT 003 RW 01', lat: -6.2119, lng: 106.8489, tahunPutus: 2025, oranTua: 'Sumini' },
    { id: 5, nama: 'Eko Prasetyo', umur: 14, jenjang: 'SMP', penyebab: 'Kurang motivasi', alamat: 'RT 002 RW 02', lat: -6.2101, lng: 106.8471, tahunPutus: 2026, oranTua: 'Parman' },
    { id: 6, nama: 'Sari Dewi', umur: 13, jenjang: 'SMP', penyebab: 'Disabilitas', alamat: 'RT 001 RW 01', lat: -6.2089, lng: 106.8457, tahunPutus: 2025, oranTua: 'Rubiyah' },
];



// Summary statistics
export const dashboardStats = {
    totalWargaSakit: wargaSakitData.length,
    totalWargaMeninggal: wargaMeninggalData.length,
    totalWargaMiskin: wargaMiskinData.length,
    totalLansiaTerlantar: lansiaTerlantarData.length,
    totalAnakPutusSekolah: anakPutusSekolahData.length,
    penerimaB: wargaMiskinData.filter(w => w.statusBantuan === 'Penerima').length,
};