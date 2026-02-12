
import MapComponent from '@/components/ui/maps';
import { mockSosialData, categories } from '../data/data';

// Map mockData to MapComponent expected format
const mapData = mockSosialData.map(item => ({
    ...item,
    position: [item.lat, item.lng],
    category: item.category // Ensure category value matches
}));

const mapCategories = categories.map(c => ({
    id: c.value,
    name: c.label,
    color: '#8b5cf6' // Violet for sosial
}));

export function SosialMap() {
    const handleIncidentSelect = (incident: any) => {
        console.log('Selected Sosial Incident:', incident);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'open': return 'bg-blue-500';
            case 'in-progress': return 'bg-yellow-500';
            case 'resolved': return 'bg-green-500';
            case 'closed': return 'bg-gray-500';
            default: return 'bg-gray-500';
        }
    };

    const getFileStatusBadge = (status: string) => {
        switch (status) {
            case 'open': return { label: 'Baru', color: 'bg-blue-500' };
            case 'in-progress': return { label: 'Proses', color: 'bg-yellow-500' };
            case 'resolved': return { label: 'Selesai', color: 'bg-green-500' };
            case 'closed': return { label: 'Ditutup', color: 'bg-gray-500' };
            default: return { label: 'Unknown', color: 'bg-gray-400' };
        }
    };

    return (
        <div className="h-[500px] w-full border rounded-lg overflow-hidden relative">
            <MapComponent
                incidents={mapData}
                categories={mapCategories}
                onIncidentSelect={handleIncidentSelect}
                getStatusColor={getStatusColor}
                getFileStatusBadge={getFileStatusBadge}
                viewMode='incidents'
            />
        </div>
    );
}
