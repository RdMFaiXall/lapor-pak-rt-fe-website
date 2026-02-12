'use client'

import { useState } from 'react'
import {
    wargaMeninggalData,
    wargaMiskinData,
    wargaSakitData,
    lansiaTerlantarData,
    anakPutusSekolahData,
    categories
} from '../data/dashboard-data'
import { Input } from '@/components/ui/input'
import { Search, Filter, Download } from 'lucide-react'

type TabType = 'all' | 'warga-sakit' | 'warga-meninggal' | 'warga-miskin' | 'lansia-terlantar' | 'anak-putus-sekolah'

export function SosialDataTable() {
    const [activeTab, setActiveTab] = useState<TabType>('all')
    const [searchQuery, setSearchQuery] = useState('')

    // Combine all data with category
    const allData = [
        ...wargaSakitData.map(d => ({
            ...d,
            category: 'warga-sakit',
            type: 'Warga Sakit',
            mainInfo: d.nama,
            subInfo: `${d.jenisPenyakit} - ${d.kategori}`,
            location: d.alamat,
            date: d.tanggalLaporan,
            status: d.kategori
        })),
        ...wargaMeninggalData.map(d => ({
            ...d,
            category: 'warga-meninggal',
            type: 'Warga Meninggal',
            mainInfo: d.nama,
            subInfo: `Penyebab: ${d.penyebab}`,
            location: d.alamat,
            date: d.tanggalMeninggal,
            status: d.penyebab
        })),
        ...wargaMiskinData.map(d => ({
            ...d,
            category: 'warga-miskin',
            type: 'Warga Miskin',
            mainInfo: d.nama,
            subInfo: d.kondisiEkonomi,
            location: d.alamat,
            date: '-',
            status: d.jenisBantuan
        })),
        ...lansiaTerlantarData.map(d => ({
            ...d,
            category: 'lansia-terlantar',
            type: 'Lansia Terlantar',
            mainInfo: d.nama,
            subInfo: d.kondisi,
            location: d.alamat,
            date: '-',
            status: d.kondisiKesehatan
        })),
        ...anakPutusSekolahData.map(d => ({
            ...d,
            category: 'anak-putus-sekolah',
            type: 'Anak Putus Sekolah',
            mainInfo: d.nama,
            subInfo: `${d.jenjang} - ${d.penyebab}`,
            location: d.alamat,
            date: `-`,
            status: d.jenjang
        })),
    ]

    // Filter data
    const filteredData = allData
        .filter(item => activeTab === 'all' || item.category === activeTab)
        .filter(item =>
            item.mainInfo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.subInfo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase())
        )

    const getCategoryBadge = (category: string) => {
        const cat = categories.find(c => c.id === category)
        return (
            <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                    backgroundColor: `${cat?.color}20`,
                    color: cat?.color
                }}
            >
                {cat?.label}
            </span>
        )
    }

    const tabs = [
        { id: 'all', label: 'Semua', count: allData.length },
        { id: 'warga-sakit', label: 'Warga Sakit', count: wargaSakitData.length },
        { id: 'warga-meninggal', label: 'Meninggal', count: wargaMeninggalData.length },
        { id: 'warga-miskin', label: 'Warga Miskin', count: wargaMiskinData.length },
        { id: 'lansia-terlantar', label: 'Lansia', count: lansiaTerlantarData.length },
        { id: 'anak-putus-sekolah', label: 'Putus Sekolah', count: anakPutusSekolahData.length },
    ]

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700'>
            {/* Header */}
            <div className='p-6 border-b border-gray-100 dark:border-gray-700'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Data Sosial RT</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                            {filteredData.length} dari {allData.length} data ditampilkan
                        </p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                            <Input
                                placeholder='Cari data...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='pl-10 w-full md:w-80'
                            />
                        </div>
                        <button className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'>
                            <Download className='h-5 w-5 text-gray-600 dark:text-gray-400' />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={`
                                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all
                                ${activeTab === tab.id
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }
                            `}
                        >
                            {tab.label}
                            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-white/20' : 'bg-white/50 dark:bg-gray-800/50'}`}>
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-gray-50 dark:bg-gray-900/50'>
                        <tr>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider'>
                                No
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider'>
                                Kategori
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider'>
                                Nama
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider'>
                                Keterangan
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider'>
                                Alamat
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider'>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100 dark:divide-gray-700'>
                        {filteredData.length === 0 ? (
                            <tr>
                                <td colSpan={6} className='px-6 py-12 text-center'>
                                    <div className='flex flex-col items-center gap-3'>
                                        <div className='w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center'>
                                            <Filter className='h-8 w-8 text-gray-400' />
                                        </div>
                                        <div>
                                            <p className='text-sm font-medium text-gray-900 dark:text-white'>
                                                Tidak ada data ditemukan
                                            </p>
                                            <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                                Coba ubah filter atau kata kunci pencarian
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            filteredData.map((item, index) => (
                                <tr
                                    key={`${item.category}-${item.id}`}
                                    className='hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors'
                                >
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400'>
                                        {index + 1}
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        {getCategoryBadge(item.category)}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <div className='text-sm font-medium text-gray-900 dark:text-white'>
                                            {item.mainInfo}
                                        </div>
                                    </td>
                                    <td className='px-6 py-4'>
                                        <div className='text-sm text-gray-600 dark:text-gray-400'>
                                            {item.subInfo}
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-400'>
                                        {item.location}
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            {filteredData.length > 0 && (
                <div className='px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between'>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Menampilkan <span className='font-semibold text-gray-900 dark:text-white'>{filteredData.length}</span> data
                    </p>
                    <div className='flex items-center gap-2'>
                        <button className='px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                            Previous
                        </button>
                        <button className='px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg'>
                            1
                        </button>
                        <button className='px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}