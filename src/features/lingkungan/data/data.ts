import { fakerID_ID as faker } from '@faker-js/faker'
import { Lingkungan } from './schema'
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
    { value: 'sampah', label: 'Sampah Menumpuk', color: '#d97706' }, // Amber
    { value: 'saluran', label: 'Saluran Air Tersumbat', color: '#3b82f6' }, // Blue
    { value: 'jalan', label: 'Jalan Rusak', color: '#64748b' }, // Slate
    { value: 'penerangan', label: 'Penerangan Jalan', color: '#eab308' }, // Yellow
]

const titles = [
    'Sampah menumpuk di selokan utama',
    'Saluran air tersumbat menyebabkan genangan',
    'Jalan berlubang dan rusak parah',
    'Lampu jalan mati di perempatan',
    'Tumpukan sampah liar di lahan kosong',
    'Gorong-gorong mampet oleh sampah plastik',
    'Aspal terkelupas dan membahayakan',
    'Penerangan sangat minim di gang',
]

const descriptions = [
    'Warga mengeluhkan bau tidak sedap dan potensi penyakit dari tumpukan sampah.',
    'Hujan deras menyebabkan air tidak bisa mengalir dan menggenang.',
    'Banyak kendaraan yang terperosok ke dalam lubang jalan yang cukup dalam.',
    'Area tersebut sangat gelap di malam hari, rawan tindakan kriminal.',
    'Selokan mampet karena banyak sampah plastik yang dibuang sembarangan.',
    'Mohon perbaikan jalan segera sebelum memakan korban kecelakaan.',
    'Lampu jalan sudah putus selama 3 hari berturut-turut.',
]

export const mockLingkunganData: Lingkungan[] = Array.from({ length: 20 }).map(() => ({
    id: `LG-${faker.number.int({ min: 1000, max: 9999 })}`,
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
