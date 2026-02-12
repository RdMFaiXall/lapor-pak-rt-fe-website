'use client'

import MapComponent from '@/components/ui/maps'
import {
    anakPutusSekolahData,
    lansiaTerlantarData,
    wargaMeninggalData,
    wargaMiskinData,
    wargaSakitData,
    categories
} from '../data/dashboard-data'
import { useState } from 'react'
import { MapPin, Users, Calendar } from 'lucide-react'

export function CleanSosialMap() {
    const [selectedIncident, setSelectedIncident] = useState<any>(null)

    // Combine all data for map
    const mapData = [
        ...wargaSakitData.map(d => ({
            id: `sakit-${d.id}`,
            category: 'warga-sakit',
            title: `${d.nama}`,
            description: `${d.jenisPenyakit}`,
            location: d.alamat,
            date: d.tanggalLaporan,
            victims: 1,
            position: [d.lat, d.lng],
            status: d.kategori,
            fileStatus: 'active',
            details: {
                nama: d.nama,
                jenisPenyakit: d.jenisPenyakit,
                kategori: d.kategori,
                umur: d.umur,
                keterangan: d.keterangan
            }
        })),
        ...wargaMeninggalData.map(d => ({
            id: `meninggal-${d.id}`,
            category: 'warga-meninggal',
            title: `${d.nama}`,
            description: `Penyebab: ${d.penyebab}`,
            location: d.alamat,
            date: d.tanggalMeninggal,
            victims: 1,
            position: [d.lat, d.lng],
            status: d.penyebab,
            fileStatus: 'closed',
            details: {
                nama: d.nama,
                umur: d.umur,
                penyebab: d.penyebab,
                keterangan: d.keterangan
            }
        })),
        ...wargaMiskinData.map(d => ({
            id: `miskin-${d.id}`,
            category: 'warga-miskin',
            title: `${d.nama}`,
            description: `${d.kondisiEkonomi}`,
            location: d.alamat,
            date: '-',
            victims: d.jumlahTanggungan,
            position: [d.lat, d.lng],
            status: d.statusBantuan,
            fileStatus: 'active',
            details: {
                nama: d.nama,
                kondisiEkonomi: d.kondisiEkonomi,
                jenisBantuan: d.jenisBantuan,
                statusBantuan: d.statusBantuan,
                jumlahTanggungan: d.jumlahTanggungan
            }
        })),
        ...lansiaTerlantarData.map(d => ({
            id: `lansia-${d.id}`,
            category: 'lansia-terlantar',
            title: `${d.nama}`,
            description: `${d.kondisi}`,
            location: d.alamat,
            date: '-',
            victims: 1,
            position: [d.lat, d.lng],
            status: d.kondisiKesehatan,
            fileStatus: 'active',
            details: {
                nama: d.nama,
                umur: d.umur,
                kondisi: d.kondisi,
                kondisiKesehatan: d.kondisiKesehatan
            }
        })),
        ...anakPutusSekolahData.map(d => ({
            id: `putus-${d.id}`,
            category: 'anak-putus-sekolah',
            title: `${d.nama}`,
            description: `${d.jenjang} - ${d.penyebab}`,
            location: d.alamat,
            date: `-`,
            victims: 1,
            position: [d.lat, d.lng],
            status: d.penyebab,
            fileStatus: 'active',
            details: {
                nama: d.nama,
                umur: d.umur,
                jenjang: d.jenjang,
                penyebab: d.penyebab
            }
        })),
    ]

    const handleIncidentSelect = (incident: any) => {
        setSelectedIncident(incident)
    }

    const getStatusColor = (status: string) => {
        const colorMap: Record<string, string> = {
            'Menular': 'bg-red-500',
            'Tidak Menular': 'bg-blue-500',
            'Penerima': 'bg-green-500',
            'Sakit': 'bg-gray-500',
            'Ekonomi': 'bg-amber-500',
        }
        return colorMap[status] || 'bg-gray-500'
    }

    const getFileStatusBadge = (fileStatus: string) => {
        if (fileStatus === 'active') {
            return { label: 'Aktif', color: 'bg-blue-500' }
        }
        return { label: 'Selesai', color: 'bg-gray-500' }
    }

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6'>
            <div className='mb-6'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                    Peta Sebaran Data Sosial
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Visualisasi lokasi {mapData.length} data sosial di wilayah RT
                </p>
            </div>

            {/* Legend */}
            <div className='flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
                {categories.map(cat => (
                    <div key={cat.id} className='flex items-center gap-2'>
                        <div
                            className='w-3 h-3 rounded-full shadow-sm'
                            style={{ backgroundColor: cat.color }}
                        />
                        <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>
                            {cat.label}
                        </span>
                        <span className='text-xs text-gray-500 dark:text-gray-400'>
                            ({mapData.filter(m => m.category === cat.id).length})
                        </span>
                    </div>
                ))}
            </div>

            {/* Map Container */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-inner">
                <MapComponent
                    incidents={mapData as any}
                    categories={categories as any}
                    onIncidentSelect={handleIncidentSelect}
                    getStatusColor={getStatusColor}
                    getFileStatusBadge={getFileStatusBadge}
                    viewMode='incidents'
                />
            </div>

            {/* Selected Incident Details */}
            {selectedIncident && (
                <div className='mt-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-blue-100 dark:border-gray-700'>
                    <div className='flex items-start justify-between mb-4'>
                        <h4 className='text-base font-semibold text-gray-900 dark:text-white'>
                            Detail Informasi
                        </h4>
                        <button
                            onClick={() => setSelectedIncident(null)}
                            className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                        >
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                                    <Users className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 dark:text-gray-400'>Nama</p>
                                    <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {selectedIncident.details.nama}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center'>
                                    <MapPin className='h-5 w-5 text-green-600 dark:text-green-400' />
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 dark:text-gray-400'>Lokasi</p>
                                    <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {selectedIncident.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {selectedIncident.details.umur && (
                            <div className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center'>
                                        <Calendar className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>Umur</p>
                                        <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                                            {selectedIncident.details.umur} tahun
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {selectedIncident.details.jenisPenyakit && (
                            <div className='bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm'>
                                <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Jenis Penyakit</p>
                                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                                    {selectedIncident.details.jenisPenyakit}
                                </p>
                            </div>
                        )}
                        {selectedIncident.details.kategori && (
                            <div className='bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm'>
                                <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Kategori</p>
                                <span
                                    className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                                    style={{
                                        backgroundColor: selectedIncident.details.kategori === 'Menular' ? '#fecaca' : '#bfdbfe',
                                        color: selectedIncident.details.kategori === 'Menular' ? '#991b1b' : '#1e3a8a'
                                    }}
                                >
                                    {selectedIncident.details.kategori}
                                </span>
                            </div>
                        )}
                        {selectedIncident.details.jenisBantuan && (
                            <div className='bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm'>
                                <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Jenis Bantuan</p>
                                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                                    {selectedIncident.details.jenisBantuan}
                                </p>
                            </div>
                        )}
                        {selectedIncident.details.penyebab && (
                            <div className='bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm'>
                                <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>Penyebab</p>
                                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                                    {selectedIncident.details.penyebab}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}