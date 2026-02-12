'use client';

import { useEffect, ReactNode } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import { MapPin, Calendar, Users, Ship, Plane, Truck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

if (typeof window !== 'undefined') {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
}

const createCustomIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
            </svg>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
};

const createAssetIcon = (type: string) => {
    // Color based on asset type
    const typeColors: Record<string, string> = {
        water: '#3b82f6', // blue
        air: '#0ea5e9',   // sky
        land: '#22c55e',  // green
    };

    const color = typeColors[type] || '#6b7280';

    return L.divIcon({
        className: 'custom-marker',
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
            </svg>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
};


function MapViewController({ items, viewMode }: { items: any[], viewMode: string }) {
    const map = useMap();

    useEffect(() => {
        if (items.length > 0) {
            const bounds = L.latLngBounds(items.map(item => item.position));
            map.flyToBounds(bounds, {
                padding: [100, 100],
                maxZoom: viewMode === 'assets' ? 14 : 15,
                duration: 1.5
            });
        } else {
            // Default to Indonesia center
            map.flyTo([-2.5489, 118.0149], 6, { duration: 1.5 });
        }
    }, [items, map, viewMode]);

    return null;
}

interface MapComponentProps {
    incidents: any[];
    assets?: any[];
    categories: any[];
    onIncidentSelect: (incident: any) => void;
    onAssetSelect?: (asset: any) => void;
    getStatusColor: (status: string) => string;
    getFileStatusBadge: (fileStatus: string) => { label: string; color: string };
    getAssetStatusBadge?: (status: string) => { label: string; color: string };
    viewMode: 'incidents' | 'assets';
    className?: string;
    children?: ReactNode;
}

const AssetTypeIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'water': return <Ship className="h-5 w-5 text-blue-500" />;
        case 'air': return <Plane className="h-5 w-5 text-sky-500" />;
        case 'land': return <Truck className="h-5 w-5 text-green-500" />;
        default: return <Ship className="h-5 w-5" />;
    }
};

export default function MapComponent({
    incidents,
    assets,
    categories,
    onIncidentSelect,
    onAssetSelect,
    getStatusColor,
    getFileStatusBadge,
    getAssetStatusBadge,
    viewMode,
    className = "h-full w-full",
    children
}: MapComponentProps) {
    const displayItems = viewMode === 'incidents' ? incidents : (assets || []);

    return (
        <div className={`relative ${className}`}>
            <MapContainer
                center={[-2.5489, 118.0149]}
                zoom={5}
                className="h-full w-full z-0 outline-none"
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="map-tiles"
                />

                <ZoomControl position="bottomright" />

                <MapViewController items={displayItems} viewMode={viewMode} />

                {viewMode === 'incidents' && incidents.map((incident) => {
                    const category = categories.find(c => c.id === incident.category);
                    const fileStatusBadge = getFileStatusBadge(incident.fileStatus);

                    return (
                        <Marker
                            key={incident.id}
                            position={incident.position as [number, number]}
                            icon={createCustomIcon(category?.color || '#6b7280')}
                            eventHandlers={{
                                click: () => {
                                    onIncidentSelect(incident);
                                }
                            }}
                        >
                            <Popup closeButton={false} offset={[0, -10]}>
                                <div className="p-3 min-w-[280px]">
                                    <h3 className="font-bold text-gray-900 mb-2 text-base">
                                        {incident.title}
                                    </h3>
                                    <div className="space-y-2 text-sm text-gray-600 mb-4 bg-gray-50 p-2 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-orange-500" />
                                            <span className="font-medium">{incident.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-blue-500" />
                                            <span>{incident.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-green-500" />
                                            <span>{incident.victims} Korban</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className={`${getStatusColor(incident.status)} text-white border-0`}>
                                            {incident.status}
                                        </Badge>
                                        <Badge className={`${fileStatusBadge.color} text-white border-0`}>
                                            {fileStatusBadge.label}
                                        </Badge>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}

                {viewMode === 'assets' && assets && assets.map((asset) => {
                    const statusBadge = getAssetStatusBadge ? getAssetStatusBadge(asset.status) : { label: '', color: '' };

                    return (
                        <Marker
                            key={asset.id}
                            position={asset.position as [number, number]}
                            icon={createAssetIcon(asset.type)}
                            eventHandlers={{
                                click: () => {
                                    if (onAssetSelect) onAssetSelect(asset);
                                }
                            }}
                        >
                            <Popup closeButton={false} offset={[0, -10]}>
                                <div className="p-3 min-w-[280px]">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-slate-100`}>
                                            <AssetTypeIcon type={asset.type} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 mb-1 leading-tight">
                                                {asset.name}
                                            </h3>
                                            <Badge className={`${statusBadge.color} text-white border-0 text-xs`}>
                                                {statusBadge.label}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Kapasitas</span>
                                            <span className="font-medium">{asset.capacity} orang</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Kru</span>
                                            <span className="font-medium">{asset.crew} orang</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Kantor</span>
                                            <span className="font-medium capitalize">{asset.officeId}</span>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            {children && (
                <div className="absolute inset-0 pointer-events-none z-1000">
                    {children}
                </div>
            )}
        </div>
    );
}
