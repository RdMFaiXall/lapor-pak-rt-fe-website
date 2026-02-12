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

export const categories = [
    { value: 'bantuan', label: 'Bantuan Sosial', color: '#10b981' }, // Emerald
    { value: 'kesehatan', label: 'Kesehatan', color: '#ef4444' }, // Red
    { value: 'kemiskinan', label: 'Kemiskinan', color: '#f59e0b' }, // Amber
    { value: 'pendidikan', label: 'Pendidikan', color: '#3b82f6' }, // Blue
    { value: 'fasilitas', label: 'Fasilitas Umum', color: '#6366f1' }, // Indigo
    { value: 'lainnya', label: 'Lainnya', color: '#9ca3af' }, // Gray
]

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
