import { useState } from 'react';
import MapComponent from '@/components/ui/maps';

// Mock Data
const mockIncidents = [
    {
        id: 1,
        title: 'Laporan Kebisingan',
        location: 'Blok A No. 12',
        date: '2023-10-27',
        victims: 0,
        status: 'Baru',
        fileStatus: 'open',
        category: 'cat1',
        position: [-6.200000, 106.816666], // Jakarta center approx
    },
    {
        id: 2,
        title: 'Laporan Pencurian',
        location: 'Blok B No. 3',
        date: '2023-10-26',
        victims: 1,
        status: 'Kritis',
        fileStatus: 'investigation',
        category: 'cat2',
        position: [-6.210000, 106.820000],
    },
    {
        id: 3,
        title: 'Tamu Mencurigakan',
        location: 'Pos Satpam Utama',
        date: '2023-10-28',
        victims: 0,
        status: 'Proses',
        fileStatus: 'verified',
        category: 'cat3',
        position: [-6.190000, 106.830000],
    },
];



const mockCategories = [
    { id: 'cat1', name: 'Gangguan Ketertiban', color: '#f59e0b' }, // amber
    { id: 'cat2', name: 'Kriminalitas', color: '#ef4444' },       // red
    { id: 'cat3', name: 'Keamanan Lingkungan', color: '#3b82f6' }, // blue
];

export function KeamananMap() {
    const [selectedIncident, setSelectedIncident] = useState<any>(null);
    // Use the state to avoid lint errors
    console.log(selectedIncident);
    // Use the state to avoid lint errors
    console.log(selectedIncident);

    const handleIncidentSelect = (incident: any) => {
        setSelectedIncident(incident);
        console.log('Selected Incident:', incident);
    };



    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Baru': return 'bg-blue-500';
            case 'Proses': return 'bg-yellow-500';
            case 'Selesai': return 'bg-green-500';
            case 'Kritis': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const getFileStatusBadge = (status: string) => {
        switch (status) {
            case 'open': return { label: 'Open', color: 'bg-green-500' };
            case 'closed': return { label: 'Closed', color: 'bg-gray-500' };
            case 'investigation': return { label: 'Investigasi', color: 'bg-orange-500' };
            case 'verified': return { label: 'Terverifikasi', color: 'bg-blue-500' };
            default: return { label: 'Unknown', color: 'bg-gray-400' };
        }
    };




    return (
        <div className="h-[600px] w-full rounded-md border overflow-hidden relative">


            <MapComponent
                incidents={mockIncidents}
                categories={mockCategories}
                onIncidentSelect={handleIncidentSelect}
                getStatusColor={getStatusColor}
                getFileStatusBadge={getFileStatusBadge}
                viewMode='incidents'
            />
        </div>
    );
}
