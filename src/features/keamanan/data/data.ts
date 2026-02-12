import { fakerID_ID as faker } from '@faker-js/faker'
import { Keamanan } from './schema'

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
    { value: 'pencurian', label: 'Pencurian', color: '#ef4444' }, // Red
    { value: 'perkelahian', label: 'Perkelahian', color: '#dc2626' }, // Darker Red
    { value: 'kebakaran', label: 'Kebakaran', color: '#f97316' }, // Orange
    { value: 'gangguan', label: 'Gangguan Ketertiban', color: '#eab308' }, // Yellow
    { value: 'lainnya', label: 'Lainnya', color: '#6b7280' }, // Gray
]

const titles = [
    'Pencurian sepeda motor di area parkir',
    'Perkelahian antar pemuda di pos ronda',
    'Kebakaran lahan kosong dekat pemukiman',
    'Gangguan ketertiban umum musik keras',
    'Laporan orang mencurigakan di malam hari',
    'Kehilangan dompet dan surat berharga',
    'Vandalisme di tembok fasilitas umum',
    'Balap liar mengganggu warga',
]

const descriptions = [
    'Terjadi sekitar pukul 2 dini hari, pelaku diduga dua orang menggunakan motor matic.',
    'Warga merasa terganggu dengan suara musik yang terlalu keras hingga larut malam.',
    'Api mulai terlihat membesar dari arah lahan kosong, warga berusaha memadamkan.',
    'Sekelompok pemuda terlihat berkumpul dan meminum minuman keras.',
    'Korban melaporkan kehilangan saat sedang berbelanja di warung terdekat.',
    'Coretan dinding merusak keindahan lingkungan RT.',
    'Balapan liar sangat membahayakan pengguna jalan lain.',
]

export const mockKeamananData: Keamanan[] = Array.from({ length: 20 }).map(() => ({
    id: `KS-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.helpers.arrayElement(titles),
    status: faker.helpers.arrayElement(statuses).value,
    priority: faker.helpers.arrayElement(priorities).value,
    category: faker.helpers.arrayElement(categories).value,
    location: `RT ${faker.number.int({ min: 1, max: 10 })} / RW ${faker.number.int({ min: 1, max: 5 })}`,
    description: faker.helpers.arrayElement(descriptions),
    reportedBy: faker.person.fullName(),
    date: faker.date.recent({ days: 30 }).toISOString(),
}))
