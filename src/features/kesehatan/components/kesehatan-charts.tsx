import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Pie,
    PieChart,
} from 'recharts'
import { Card } from '@/components/ui/card'
import { mockData } from '../constants'

// Helpers
const dbdData = mockData.filter(d => d.isu_kesehatan === 'Wabah DBD')
const stuntingData = mockData.filter(d => d.isu_kesehatan === 'Stunting / Gizi Buruk')
const ibuHamilData = mockData.filter(d => d.isu_kesehatan === 'Ibu Hamil Berisiko')
const bpjsData = mockData.filter(d => d.isu_kesehatan === 'Warga Belum BPJS')

// --- WABAH DBD CHARTS ---

export function LokasiPerawatanChart() {
    const lokasiCount = dbdData.reduce((acc, curr) => {
        if (curr.lokasi_perawatan) {
            acc[curr.lokasi_perawatan] = (acc[curr.lokasi_perawatan] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const total = dbdData.length
    const COLORS = ['#ef4444', '#f59e0b', '#06b6d4']

    const chartData = Object.entries(lokasiCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Lokasi Perawatan</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={105}
                                dataKey="value"
                                stroke="#fff"
                                strokeWidth={2}
                                paddingAngle={2}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                    if (cx == null || cy == null || midAngle == null || innerRadius == null || outerRadius == null || percent == null || percent < 0.05) return null;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
                                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                            >
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} kasus (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mt-8 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div 
                                className='w-3 h-3 rounded-full shrink-0 mt-1' 
                                style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                            />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-600 dark:text-gray-400 font-medium leading-none'>
                                    {item.name} <span className='font-bold ml-1 text-gray-900 dark:text-white'>({item.percentage}%)</span>
                                </p>
                                <p className='text-[10px] text-gray-400 font-medium mt-1'>
                                    ({item.value} kasus)
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function PerkembanganKasusChart() {
    const perkembanganCount = dbdData.reduce((acc, curr) => {
        if (curr.perkembangan_kasus) {
            acc[curr.perkembangan_kasus] = (acc[curr.perkembangan_kasus] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const total = dbdData.length

    const COLORS = ['#f59e0b', '#ef4444', '#10b981', '#6b7280']

    const chartData = Object.entries(perkembanganCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Perkembangan Kasus</h3>
            <div className='flex flex-col gap-6 flex-1 w-full'>
                <div className='h-[250px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 25 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue ? maxValue + 1 : 5]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => val.toString().replace(/,/g, '')}
                                label={{ value: 'Jumlah Kasus', position: 'insideBottom', offset: -15, fill: '#94a3b8', fontSize: 12 }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={120}
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip cursor={{ fill: 'transparent' }} />

                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value === undefined || value === null) return null;
                                        const isSmallValue = value < 10;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2'>
                    {chartData.map((item, index) => {
                        return (
                            <div key={index} className='flex items-start gap-3'>
                                <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <div>
                                    <p className='text-xs text-gray-400 font-medium leading-tight'>{item.name}</p>
                                    <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const PERKEMBANGAN = [
    { label: 'Terindikasi DBD', abbr: 'IND', color: '#f59e0b', bg: '#fef3c7' },
    { label: 'Positif DBD', abbr: 'POS', color: '#ef4444', bg: '#fee2e2' },
    { label: 'Sembuh', abbr: 'SMB', color: '#10b981', bg: '#d1fae5' },
    { label: 'Meninggal', abbr: 'MGL', color: '#6b7280', bg: '#f3f4f6' },
];

export function PerkembanganPerLokasiChart() {
    const LOKASI_LIST = [
        { key: 'Di rumah', label: 'Di rumah', color: '#06b6d4' },
        { key: 'Puskesmas', label: 'Puskesmas', color: '#10b981' },
        { key: 'Rumah Sakit', label: 'Rumah Sakit', color: '#f59e0b' },
    ];

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className='text-md font-semibold text-slate-400 mb-6'>
                Perkembangan Kasus per Lokasi Perawatan
            </h3>

            <div className='flex-1 overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
                {PERKEMBANGAN.map((item) => {
                    const filteredData = dbdData.filter(d => d.perkembangan_kasus === item.label);
                    const totalKasus = filteredData.length;
                    
                    const countByLokasi = filteredData.reduce((acc, curr) => {
                        if (curr.lokasi_perawatan) {
                            acc[curr.lokasi_perawatan] = (acc[curr.lokasi_perawatan] || 0) + 1;
                        }
                        return acc;
                    }, {} as Record<string, number>);

                    return (
                        <div key={item.label} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                    {item.label}
                                </span>
                                <div className='flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700'>
                                    <span className='text-xs font-bold text-gray-900 dark:text-white'>
                                        {totalKasus}
                                    </span>
                                    <span className='text-[10px] text-gray-500 font-medium'>
                                        kasus
                                    </span>
                                </div>
                            </div>

                            <div className='space-y-3.5'>
                                {LOKASI_LIST.map((lokasi) => {
                                    const count = countByLokasi[lokasi.key] || 0;
                                    const percentage = totalKasus > 0 ? ((count / totalKasus) * 100).toFixed(1) : '0';

                                    return (
                                        <div key={lokasi.key}>
                                            <div className='flex items-center justify-between mb-1.5 px-1'>
                                                <div className='flex items-center gap-2'>
                                                    <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: lokasi.color }} />
                                                    <span className='text-[11px] font-medium text-gray-600 dark:text-gray-400'>
                                                        {lokasi.label}
                                                    </span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-xs font-bold text-gray-800 dark:text-gray-200'>
                                                        {count}
                                                    </span>
                                                    <span className='text-[10px] text-gray-400 font-medium min-w-[32px] text-right'>
                                                        ({percentage}%)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden'>
                                                <div
                                                    className='h-full rounded-full transition-all duration-700 ease-out'
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: lokasi.color
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


// --- STUNTING CHARTS ---

const INDIKASI_PERTUMBUHAN = [
    { label: 'Tubuh Anak Terlihat Pendek', abbr: 'PDK', color: '#fba11b', bg: '#fef3c7' },
    { label: 'Anak Terlihat Sangat Kurus', abbr: 'KRS', color: '#ef4444', bg: '#fee2e2' },
    { label: 'Sering Sakit (Batuk/Diare Berulang)', abbr: 'SKT', color: '#10b981', bg: '#d1fae5' },
    { label: 'Belum/Jarang ke Posyandu', abbr: 'PSY', color: '#6b7280', bg: '#f3f4f6' },
];

export function IndikasiPertumbuhanChart() {
    const indikasiCount = stuntingData.reduce((acc, curr) => {
        if (curr.indikasi_pertumbuhan) {
            curr.indikasi_pertumbuhan.forEach(ind => {
                acc[ind] = (acc[ind] || 0) + 1;
            });
        }
        return acc;
    }, {} as Record<string, number>);

    const totalKasus = stuntingData.length;

    const items = INDIKASI_PERTUMBUHAN.map(ind => ({
        ...ind,
        value: indikasiCount[ind.label] || 0
    }));

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Indikasi Pertumbuhan (Pendataan Khusus Balita (0-5 Tahun))</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                {items.map((item) => {
                    const pct = totalKasus > 0 ? (item.value / totalKasus) * 100 : 0;
                    const pctDisplay = pct > 0 ? pct.toFixed(1) : '0';

                    return (
                        <div key={item.label} className="flex flex-col gap-2">
                            {/* Top row: badge + count + label */}
                            <div className="flex items-start gap-3">
                                {/* Colored badge */}
                                <div
                                    className="w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center text-xs font-bold leading-none"
                                    style={{ backgroundColor: item.bg, color: item.color }}
                                >
                                    {item.abbr}
                                </div>
                                {/* Count + label */}
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                                        {item.value}{' '}
                                        <span className="text-sm font-semibold text-slate-500">Kasus</span>
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                                        {item.label}
                                    </span>
                                </div>
                            </div>

                            {/* Progress bar + percentage */}
                            <div className="mt-2">
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.max(pct > 0 ? 4 : 0, pct)}%`,
                                            backgroundColor: item.color,
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-semibold mt-1 block" style={{ color: item.color }}>
                                    {pctDisplay}%
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}

// --- IBU HAMIL BERISIKO CHARTS ---

export function UsiaKandunganChart() {
    const kandunganCount = ibuHamilData.reduce((acc, curr) => {
        if (curr.usia_kandungan) {
            acc[curr.usia_kandungan] = (acc[curr.usia_kandungan] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const total = ibuHamilData.length
    const COLORS = ['#8b5cf6', '#d946ef', '#f43f5e']

    const chartData = Object.entries(kandunganCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Usia Kandungan Berisiko</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={105}
                                dataKey="value"
                                stroke="#fff"
                                strokeWidth={2}
                                paddingAngle={2}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                    if (cx == null || cy == null || midAngle == null || innerRadius == null || outerRadius == null || percent == null || percent < 0.05) return null;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
                                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                            >
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} kasus (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mt-8 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div 
                                className='w-3 h-3 rounded-full shrink-0 mt-1' 
                                style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                            />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-600 dark:text-gray-400 font-medium leading-none'>
                                    {item.name} <span className='font-bold ml-1 text-gray-900 dark:text-white'>({item.percentage}%)</span>
                                </p>
                                <p className='text-[10px] text-gray-400 font-medium mt-1'>
                                    ({item.value} kasus)
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const FAKTOR_RISIKO = [
    { label: 'Darah Tinggi (Hipertensi)', abbr: 'HPT', color: '#ef4444', bg: '#fee2e2' },
    { label: 'Usia Terlalu Muda (<20) / Tua (>35)', abbr: 'USA', color: '#f59e0b', bg: '#fef3c7' },
    { label: 'Kurang Energi (Kurus/Lemas)', abbr: 'KEK', color: '#ec4899', bg: '#fce7f3' },
    { label: 'Jarak Kehamilan Terlalu Dekat (<2th)', abbr: 'JRK', color: '#8b5cf6', bg: '#f3e8ff' },
];

export function FaktorRisikoChart() {
    const risikoCount = ibuHamilData.reduce((acc, curr) => {
        if (curr.faktor_risiko) {
            curr.faktor_risiko.forEach(r => {
                acc[r] = (acc[r] || 0) + 1
            })
        }
        return acc
    }, {} as Record<string, number>)

    const totalKasus = ibuHamilData.length

    const items = FAKTOR_RISIKO.map(r => ({
        ...r,
        value: risikoCount[r.label] || 0
    }));

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className='text-md font-semibold text-slate-400 mb-6'>
                Faktor Risiko Ibu Hamil
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {items.map((item) => {
                    const pct = totalKasus > 0 ? (item.value / totalKasus) * 100 : 0;
                    const pctDisplay = pct > 0 ? pct.toFixed(1) : '0';

                    return (
                        <div key={item.label} className="flex flex-col gap-2">
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center text-xs font-bold leading-none"
                                    style={{ backgroundColor: item.bg, color: item.color }}
                                >
                                    {item.abbr}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                                        {item.value}{' '}
                                        <span className="text-sm font-semibold text-slate-500">Kasus</span>
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                                        {item.label}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.max(pct > 0 ? 4 : 0, pct)}%`,
                                            backgroundColor: item.color,
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-semibold mt-1 block" style={{ color: item.color }}>
                                    {pctDisplay}%
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

// --- BPJS CHARTS ---

export function AlasanBPJSChart() {
    const alasanCount = bpjsData.reduce((acc, curr) => {
        if (curr.alasan_bpjs) {
            acc[curr.alasan_bpjs] = (acc[curr.alasan_bpjs] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(alasanCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#3b82f6', '#2dd4bf', '#84cc16', '#eab308', '#ec4899']
    const total = bpjsData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Alasan Tidak Memiliki BPJS</h3>

            <div className='grid grid-cols-1 gap-3 flex-1'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div
                            key={index}
                            className='relative overflow-hidden rounded-lg p-4 border-2 transition-all hover:shadow-md'
                            style={{ borderColor: COLORS[index % COLORS.length] }}
                        >
                            <div
                                className='absolute top-0 right-0 w-20 h-20 opacity-10 rounded-bl-full'
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <div className='relative z-10 flex items-center justify-between'>
                                <div className='flex-1'>
                                    <p className='text-sm font-semibold text-gray-900 dark:text-white mb-1'>
                                        {item.name}
                                    </p>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex-1 max-w-[200px]'>
                                            <div className='h-2 rounded-full bg-gray-200 dark:bg-gray-700'>
                                                <div
                                                    className='h-2 rounded-full transition-all duration-500'
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: COLORS[index % COLORS.length]
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <span
                                            className='text-xs font-semibold min-w-[45px]'
                                            style={{ color: COLORS[index % COLORS.length] }}
                                        >
                                            {percentage}%
                                        </span>
                                    </div>
                                </div>
                                <div className='ml-4 text-right'>
                                    <p className='text-3xl font-bold text-gray-900 dark:text-white'>
                                        {item.value}
                                    </p>
                                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                                        kasus
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
