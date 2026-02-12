
import MapComponent from '@/components/ui/maps';
import {
    anakPutusSekolahData,
    lansiaTerlantarData,
    wargaMeninggalData,
    wargaMiskinData,
    wargaSakitData
} from '../data/dashboard-data';

const mapData = [
    ...wargaSakitData.map(d => ({
        ...d,
        id: `sakit-${d.id}`,
        category: 'warga-sakit',
        title: `Sakit: ${d.nama}`,
        description: `${d.jenisPenyakit} - ${d.keterangan || ''}`,
        location: 'Dalam Perawatan',
        date: d.tanggalLaporan,
        status: d.kategori,
        fileStatus: 'Open',
        victims: 1,
        position: [d.lat, d.lng]
    })),
    ...wargaMeninggalData.map(d => ({
        ...d,
        id: `meninggal-${d.id}`,
        category: 'warga-meninggal',
        title: `Meninggal: ${d.nama}`,
        description: `Penyebab: ${d.penyebab}`,
        location: d.alamat,
        date: d.tanggalMeninggal,
        status: 'Meninggal',
        fileStatus: 'Closed',
        victims: 1,
        position: [d.lat, d.lng]
    })),
    ...wargaMiskinData.map(d => ({
        ...d,
        id: `miskin-${d.id}`,
        category: 'warga-miskin',
        title: `Miskin: ${d.nama}`,
        description: `Bantuan: ${d.statusBantuan}`,
        location: d.alamat,
        date: '-',
        status: d.kondisiEkonomi,
        fileStatus: 'Open',
        victims: d.jumlahTanggungan,
        position: [d.lat, d.lng]
    })),
    ...lansiaTerlantarData.map(d => ({
        ...d,
        id: `lansia-${d.id}`,
        category: 'lansia-terlantar',
        title: `Lansia: ${d.nama}`,
        description: `Kondisi: ${d.kondisiKesehatan}`,
        location: d.alamat,
        date: '-',
        status: d.kondisi,
        fileStatus: 'Open',
        victims: 1,
        position: [d.lat, d.lng]
    })),
    ...anakPutusSekolahData.map(d => ({
        ...d,
        id: `putus-sekolah-${d.id}`,
        category: 'anak-putus-sekolah',
        title: `Putus Sekolah: ${d.nama}`,
        description: `Penyebab: ${d.penyebab}`,
        location: d.alamat,
        date: '-',
        status: d.jenjang,
        fileStatus: 'Open',
        victims: 1,
        position: [d.lat, d.lng]
    })),
];

const mapCategories = [
    { id: 'warga-sakit', name: 'Warga Sakit', color: '#ef4444' }, // Red
    { id: 'warga-meninggal', name: 'Warga Meninggal', color: '#6b7280' }, // Gray
    { id: 'warga-miskin', name: 'Warga Miskin', color: '#f59e0b' }, // Amber
    { id: 'lansia-terlantar', name: 'Lansia Terlantar', color: '#8b5cf6' }, // Violet
    { id: 'anak-putus-sekolah', name: 'Anak Putus Sekolah', color: '#3b82f6' }, // Blue
];

export function SosialMap() {
    const handleIncidentSelect = (incident: any) => {
        console.log('Selected Sosial Incident:', incident);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Menular': return 'bg-red-500';
            case 'Tidak Menular': return 'bg-orange-500';
            case 'Meninggal': return 'bg-gray-500';
            case 'Open': return 'bg-green-500';
            case 'Closed': return 'bg-gray-400';
            default: return 'bg-blue-500';
        }
    };

    const getFileStatusBadge = (status: string) => {
        if (status === 'Closed') {
            return { label: 'Selesai', color: 'bg-gray-500' };
        }
        return { label: 'Aktif', color: 'bg-green-500' };
    };

    return (
        <div className="h-[500px] w-full border rounded-lg overflow-hidden relative">
            <MapComponent
                incidents={mapData as any}
                categories={mapCategories}
                onIncidentSelect={handleIncidentSelect}
                getStatusColor={getStatusColor}
                getFileStatusBadge={getFileStatusBadge}
                viewMode='incidents'
            />
        </div>
    );
}
