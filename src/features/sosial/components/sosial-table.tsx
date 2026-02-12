
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    anakPutusSekolahData,
    lansiaTerlantarData,
    wargaMeninggalData,
    wargaMiskinData,
    wargaSakitData
} from '../data/dashboard-data'
import { format, parseISO } from 'date-fns'
import { id } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'

// Unified data type for table
interface SocialIssue {
    id: string
    type: 'Sakit' | 'Meninggal' | 'Miskin' | 'Lansia' | 'Putus Sekolah'
    name: string
    detail: string
    location: string
    date: string // ISO string
}

// Combine and map data
const allIssues: SocialIssue[] = [
    ...wargaSakitData.map(d => ({
        id: String(d.id),
        type: 'Sakit' as const,
        name: d.nama,
        detail: d.jenisPenyakit,
        location: 'Indonesia', // Mock location if not available or add to mock data
        date: d.tanggalLaporan
    })),
    ...wargaMeninggalData.map(d => ({
        id: String(d.id),
        type: 'Meninggal' as const,
        name: d.nama,
        detail: d.penyebab,
        location: d.alamat,
        date: d.tanggalMeninggal
    })),
    ...wargaMiskinData.map(d => ({
        id: String(d.id),
        type: 'Miskin' as const,
        name: d.nama,
        detail: d.statusBantuan,
        location: d.alamat,
        date: new Date().toISOString() // Mock date as it wasn't in original mock
    })),
    ...lansiaTerlantarData.map(d => ({
        id: String(d.id),
        type: 'Lansia' as const,
        name: d.nama,
        detail: d.kondisiKesehatan,
        location: d.alamat,
        date: new Date().toISOString()
    })),
    ...anakPutusSekolahData.map(d => ({
        id: String(d.id),
        type: 'Putus Sekolah' as const,
        name: d.nama,
        detail: d.penyebab,
        location: d.alamat,
        date: new Date().toISOString()
    })),
]

// Sort by date descending and take top 10
const sortedIssues = allIssues.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10)

const getTypeColor = (type: SocialIssue['type']) => {
    switch (type) {
        case 'Sakit': return 'destructive'
        case 'Meninggal': return 'secondary'
        case 'Miskin': return 'outline'
        case 'Lansia': return 'default'
        case 'Putus Sekolah': return 'destructive' // Reusing destructive for urgency
        default: return 'outline'
    }
}

export function SosialTable() {
    return (
        <div className='border rounded-lg bg-card'>
            <div className='p-4 border-b'>
                <h3 className='text-lg font-semibold text-foreground'>Laporan Terbaru</h3>
                <p className='text-sm text-muted-foreground'>
                    10 laporan sosial terbaru yang masuk
                </p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tipe</TableHead>
                        <TableHead>Nama Warga</TableHead>
                        <TableHead>Keterangan</TableHead>
                        <TableHead>Lokasi</TableHead>
                        <TableHead className="text-right">Tanggal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedIssues.map((issue) => (
                        <TableRow key={issue.id}>
                            <TableCell>
                                <Badge variant={getTypeColor(issue.type)}>{issue.type}</Badge>
                            </TableCell>
                            <TableCell className="font-medium">{issue.name}</TableCell>
                            <TableCell>{issue.detail}</TableCell>
                            <TableCell>{issue.location}</TableCell>
                            <TableCell className="text-right">
                                {format(parseISO(issue.date), 'dd MMM yyyy', { locale: id })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
