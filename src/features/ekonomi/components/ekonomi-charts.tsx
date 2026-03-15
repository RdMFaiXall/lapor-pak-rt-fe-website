import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Label,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Pie,
    PieChart,
} from 'recharts'
import { mockData } from '../constants'

// Helpers
const pengangguranData = mockData.filter(d => d.kategori_isu_ekonomi === 'Warga tidak punya pekerjaan')
const hutangData = mockData.filter(d => d.kategori_isu_ekonomi === 'Warga berhutang')
const bansosData = mockData.filter(d => d.kategori_isu_ekonomi === 'Calon penerima bansos')

// --- TIDAK PUNYA PEKERJAAN CHARTS ---

export function KategoriUsiaChart() {
    const ageGroups = pengangguranData.reduce((acc, curr) => {
        let group = ''
        const umur = (curr as any).umur as number | undefined
        if (umur !== undefined) {
            if (umur < 18) group = 'Remaja'
            else if (umur <= 59) group = 'Dewasa'
            else group = 'Lansia'
        }
        if (group) acc[group] = (acc[group] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    // Use static representative data for the defined categories
    const total = pengangguranData.length
    const COLORS = ['#06b6d4', '#10b981', '#f59e0b']

    const remaja = ageGroups['Remaja'] || Math.ceil(total * 0.3)
    const dewasa = ageGroups['Dewasa'] || Math.ceil(total * 0.55)
    const lansia = ageGroups['Lansia'] || Math.max(0, total - remaja - dewasa)

    const chartData = [
        { label: 'Remaja', value: remaja },
        { label: 'Dewasa', value: dewasa },
        { label: 'Lansia', value: lansia },
    ].map(item => ({
        ...item,
        name: item.label,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mt-2 mb-4">Kategori Usia</h3>
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
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight'>{item.label} <span className="font-bold">({item.percentage}%)</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function LamaTidakBekerjaChart() {
    const total = pengangguranData.length
    const COLORS = ['#34d399', '#3b82f6', '#f43f5e']

    const v1 = Math.ceil(total * 0.35)
    const v2 = Math.ceil(total * 0.4)
    const v3 = Math.max(0, total - v1 - v2)

    const chartData = [
        { label: '< 6 Bulan', sublabel: '(Baru Lulus)', value: v1 },
        { label: '6 Bln - 1 Thn', sublabel: '', value: v2 },
        { label: '> 1 Tahun', sublabel: '(Long Term)', value: v3 },
    ].map(item => ({
        ...item,
        name: item.label,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mt-2 mb-4">Sudah Berapa Lama Tidak Bekerja</h3>
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
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight'>{item.label} <span className="font-bold">({item.percentage}%)</span></p>
                                {item.sublabel && <p className='text-[10px] text-gray-500 font-medium leading-tight'>{item.sublabel}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function JenjangPendidikanChart() {
    const total = pengangguranData.length
    const COLORS = ['#8b5cf6', '#d946ef', '#f43f5e', '#f97316']

    const v1 = Math.ceil(total * 0.2)
    const v2 = Math.ceil(total * 0.3)
    const v3 = Math.ceil(total * 0.35)
    const v4 = Math.max(0, total - v1 - v2 - v3)

    const chartData = [
        { label: 'SD', value: v1 },
        { label: 'SMP', value: v2 },
        { label: 'SMA', value: v3 },
        { label: 'SMK', value: v4 },
    ].map(item => ({
        ...item,
        name: item.label,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mt-2 mb-4">Jenjang Pendidikan Terakhir</h3>
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
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight'>{item.label} <span className="font-bold">({item.percentage}%)</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// --- ALASAN BELUM BEKERJA CHART (horizontal bar - KondisiTempatTinggal style) ---

export function AlasanBelumBekerjaChart() {
    const total = pengangguranData.length
    const ALASAN_COLORS = ['#3b82f6', '#f59e0b', '#ec4899', '#ef4444', '#6b7280']

    const v1 = Math.ceil(total * 0.35)
    const v2 = Math.ceil(total * 0.25)
    const v3 = Math.ceil(total * 0.18)
    const v4 = Math.ceil(total * 0.15)
    const v5 = Math.max(0, total - v1 - v2 - v3 - v4)

    const chartData = [
        { name: 'Belum dapat pekerjaan', value: v1, color: ALASAN_COLORS[0] },
        { name: 'Kurang keterampilan', value: v2, color: ALASAN_COLORS[1] },
        { name: 'Faktor keluarga', value: v3, color: ALASAN_COLORS[2] },
        { name: 'Tidak ada lowongan', value: v4, color: ALASAN_COLORS[3] },
        { name: 'Lainnya', value: v5, color: ALASAN_COLORS[4] },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0',
    }))

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Alasan Belum Bekerja</h3>

            <div className="w-full h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, maxValue]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#94a3b8' }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            allowDecimals={false}
                        >
                            <Label value="Jumlah Warga" offset={-15} position="insideBottom" style={{ fill: '#64748b', fontWeight: 'bold', fontSize: 13 }} />
                        </XAxis>
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={155}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={ALASAN_COLORS[index % ALASAN_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props;
                                    if (value === undefined || value === null) return null;
                                    const isSmallValue = value < maxValue * 0.15;
                                    const displayValue = `${value} warga (${chartData[index]?.percentage}%)`;
                                    return (
                                        <text
                                            x={isSmallValue ? x + width + 8 : x + 10}
                                            y={y + height / 2}
                                            fill={isSmallValue ? '#64748b' : '#fff'}
                                            fontSize={11}
                                            fontWeight="bold"
                                            dominantBaseline="middle"
                                            textAnchor="start"
                                        >
                                            {displayValue}
                                        </text>
                                    );
                                }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// --- WARGA BERHUTANG CHARTS ---

export function JenisHutangChart() {
    const total = hutangData.length
    const COLORS = ['#f59e0b', '#10b981', '#ef4444']

    const v1 = Math.ceil(total * 0.35)
    const v2 = Math.ceil(total * 0.25)
    const v3 = Math.max(0, total - v1 - v2)

    const chartData = [
        { label: 'Tidak Terlalu Berdampak', value: v1 },
        { label: 'Tidak Berdampak', value: v2 },
        { label: 'Sangat Berdampak', value: v3 },
    ].map(item => ({
        ...item,
        name: item.label,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mt-2 mb-4">Jenis Hutang</h3>
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
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full max-w-[260px] mx-auto grid grid-cols-1 gap-y-3 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center justify-between gap-2'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium'>{item.label}</p>
                            </div>
                            <span className='text-xs font-bold' style={{ color: COLORS[index % COLORS.length] }}>{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function AlasanBerhutangChart() {
    const total = hutangData.length
    const ALASAN_COLORS = ['#3b82f6', '#f59e0b', '#ec4899', '#10b981', '#ef4444', '#8b5cf6', '#6b7280']

    const v1 = Math.ceil(total * 0.28)
    const v2 = Math.ceil(total * 0.15)
    const v3 = Math.ceil(total * 0.18)
    const v4 = Math.ceil(total * 0.17)
    const v5 = Math.ceil(total * 0.1)
    const v6 = Math.ceil(total * 0.07)
    const v7 = Math.max(0, total - v1 - v2 - v3 - v4 - v5 - v6)

    const chartData = [
        { name: 'Kebutuhan Sehari-hari', value: v1, color: ALASAN_COLORS[0] },
        { name: 'Biaya Pendidikan', value: v2, color: ALASAN_COLORS[1] },
        { name: 'Biaya Kesehatan', value: v3, color: ALASAN_COLORS[2] },
        { name: 'Usaha / Modal Kerja', value: v4, color: ALASAN_COLORS[3] },
        { name: 'Kehilangan Pekerjaan', value: v5, color: ALASAN_COLORS[4] },
        { name: 'Kebutuhan Mendesak', value: v6, color: ALASAN_COLORS[5] },
        { name: 'Lainnya', value: v7, color: ALASAN_COLORS[6] },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0',
    }))

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Alasan Berhutang</h3>

            <div className="flex-1 w-full min-h-[320px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, maxValue]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#94a3b8' }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            allowDecimals={false}
                        >
                            <Label value="Jumlah Warga" offset={-15} position="insideBottom" style={{ fill: '#64748b', fontWeight: 'bold', fontSize: 13 }} />
                        </XAxis>
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={160}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={ALASAN_COLORS[index % ALASAN_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props;
                                    if (value === undefined || value === null) return null;
                                    const isSmallValue = value < maxValue * 0.15;
                                    const displayValue = `${value} warga (${chartData[index]?.percentage}%)`;
                                    return (
                                        <text
                                            x={isSmallValue ? x + width + 8 : x + 10}
                                            y={y + height / 2}
                                            fill={isSmallValue ? '#64748b' : '#fff'}
                                            fontSize={11}
                                            fontWeight="bold"
                                            dominantBaseline="middle"
                                            textAnchor="start"
                                        >
                                            {displayValue}
                                        </text>
                                    );
                                }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export function DampakHutangPerJenisHutangChart() {
    const JENIS_HUTANG = [
        { key: 'Hutang Bank', color: '#3b82f6' },
        { key: 'Pinjaman Online', color: '#ef4444' },
        { key: 'Hutang Koperasi', color: '#10b981' },
        { key: 'Hutang Rentenir', color: '#f59e0b' },
        { key: 'Hutang Pribadi', color: '#8b5cf6' },
        { key: 'Lainnya', color: '#6b7280' },
    ]

    const DAMPAK_GROUPS = [
        { key: 'Tidak Terlalu Berdampak', label: 'Tidak Terlalu', color: '#f59e0b' },
        { key: 'Tidak Berdampak', label: 'Tidak Berdampak', color: '#10b981' },
        { key: 'Sangat Berdampak', label: 'Sangat Berdampak', color: '#ef4444' },
    ]

    const total = hutangData.length

    const jenisWeights = [0.25, 0.30, 0.15, 0.12, 0.10, 0.08]
    const dampakWeights = [0.35, 0.25, 0.40]

    let remainingTotal = total;
    const chartData = JENIS_HUTANG.map((jenis, ji) => {
        let jenisTotal = 0;
        if (ji === JENIS_HUTANG.length - 1) {
            jenisTotal = Math.max(0, remainingTotal);
        } else {
            jenisTotal = Math.round(total * jenisWeights[ji]);
            remainingTotal -= jenisTotal;
        }

        const groups: Record<string, number> = {}
        let remainingDampak = jenisTotal;
        DAMPAK_GROUPS.forEach((dampak, di) => {
            let count = 0;
            if (di === DAMPAK_GROUPS.length - 1) {
                count = Math.max(0, remainingDampak);
            } else {
                count = Math.round(jenisTotal * dampakWeights[di]);
                remainingDampak -= count;
            }
            groups[dampak.key] = count;
        })

        return {
            name: jenis.key,
            color: jenis.color,
            total: jenisTotal,
            ...groups,
        }
    })

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className='text-md font-bold text-black dark:text-white mb-6'>
                Dampak Hutang Saat Ini Per Jenis Hutang
            </h3>

            <div className='flex-1 overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {chartData.map((jenis, index) => (
                    <div key={index} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
                        <div className='flex items-center justify-between mb-4'>
                            <span className='text-sm font-semibold text-gray-900 dark:text-white leading-tight'>
                                {jenis.name}
                            </span>
                            <div className='flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700'>
                                <span className='text-xs font-bold text-gray-900 dark:text-white'>
                                    {jenis.total}
                                </span>
                                <span className='text-[10px] text-gray-500 font-medium'>
                                    kasus
                                </span>
                            </div>
                        </div>

                        <div className='space-y-3.5'>
                            {DAMPAK_GROUPS.map((dampak) => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const count = (jenis as any)[dampak.key] || 0;
                                const percentage = jenis.total > 0 ? ((count / jenis.total) * 100).toFixed(1) : '0';

                                return (
                                    <div key={dampak.key}>
                                        <div className='flex items-center justify-between mb-1.5 px-1'>
                                            <div className='flex items-center gap-2'>
                                                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: dampak.color }} />
                                                <span className='text-[11px] font-medium text-gray-600 dark:text-gray-400'>
                                                    {dampak.label}
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
                                                    backgroundColor: dampak.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function ButuhMediasiChart() {
    const total = hutangData.length
    const COLORS = ['#ef4444', '#10b981']

    const v1 = Math.ceil(total * 0.45)
    const v2 = Math.max(0, total - v1)

    const chartData = [
        { name: 'Butuh Mediasi', value: v1 },
        { name: 'Tidak Butuh Mediasi', value: v2 },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Butuh Mediasi Penagihan?</h3>
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
                                ))!}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-1 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 w-full justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium'>{item.name}</p>
                            </div>
                            <span className="text-xs font-bold">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// --- CALON PENERIMA BANSOS CHARTS ---

export function PekerjaanKepalaKeluargaChart() {
    const total = bansosData.length
    const COLORS = ['#f97316', '#84cc16', '#ef4444', '#3b82f6', '#10b981', '#a855f7', '#6b7280']

    const v1 = Math.ceil(total * 0.20)
    const v2 = Math.ceil(total * 0.35)
    const v3 = Math.ceil(total * 0.10)
    const v4 = Math.ceil(total * 0.15)
    const v5 = Math.ceil(total * 0.08)
    const v6 = Math.ceil(total * 0.07)
    const v7 = Math.max(0, total - v1 - v2 - v3 - v4 - v5 - v6)

    const chartData = [
        { name: 'Tidak Bekerja', value: v1, color: COLORS[0] },
        { name: 'Buruh Harian / Serabutan', value: v2, color: COLORS[1] },
        { name: 'Nelayan', value: v3, color: COLORS[2] },
        { name: 'Pedagang Kecil', value: v4, color: COLORS[3] },
        { name: 'Ojek / Driver online', value: v5, color: COLORS[4] },
        { name: 'Wiraswasta', value: v6, color: COLORS[5] },
        { name: 'Lainnya', value: v7, color: COLORS[6] },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Pekerjaan Kepala Keluarga</h3>
            <div className='w-full h-[320px] min-h-[320px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, maxValue ? maxValue + 1 : 5]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#94a3b8' }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={130}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip cursor={{ fill: 'transparent' }} />

                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props;
                                    if (value === undefined || value === null) return null;
                                    const isSmallValue = value < maxValue * 0.15;
                                    const percentage = chartData[index]?.percentage || '0';
                                    return (
                                        <text
                                            x={isSmallValue ? x + width + 8 : x + 10}
                                            y={y + height / 2}
                                            fill={isSmallValue ? "#64748b" : "#fff"}
                                            fontSize={11}
                                            fontWeight="bold"
                                            dominantBaseline="middle"
                                        >
                                            {value} KK ({percentage}%)
                                        </text>
                                    );
                                }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export function PenghasilanKKChart() {
    const total = bansosData.length
    const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981']

    const v1 = Math.ceil(total * 0.15)
    const v2 = Math.ceil(total * 0.45)
    const v3 = Math.ceil(total * 0.3)
    const v4 = Math.max(0, total - v1 - v2 - v3)

    const chartData = [
        { name: 'Tidak Ada', value: v1 },
        { name: '< 1.5 Juta', value: v2 },
        { name: '1.5 - 3 Juta', value: v3 },
        { name: '> 3 Juta', value: v4 },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Penghasilan Perbulan</h3>
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
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0 justify-items-center'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex flex-col items-center gap-0.5 text-center'>
                            <div className='flex items-center gap-1.5'>
                                <div className='w-2.5 h-2.5 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-[10px] sm:text-[11px] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap'>{item.name}</p>
                            </div>
                            <span className="text-[11px] sm:text-xs font-bold leading-none">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function JumlahTanggunganChart() {
    const total = bansosData.length
    const COLORS = ['#14b8a6', '#f59e0b', '#ec4899', '#3b82f6']

    const v1 = Math.ceil(total * 0.4)
    const v2 = Math.ceil(total * 0.45)
    const v3 = Math.max(0, total - v1 - v2)

    const chartData = [
        { name: '1-2 orang', value: v1 },
        { name: '3-4 orang', value: v2 },
        { name: '> 4 orang', value: v3 },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Jumlah Tanggungan</h3>
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
                                ))!}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0 justify-items-center'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex flex-col items-center gap-0.5 text-center'>
                            <div className='flex items-center gap-1.5'>
                                <div className='w-2.5 h-2.5 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-[10px] sm:text-[11px] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap'>{item.name}</p>
                            </div>
                            <span className="text-[11px] sm:text-xs font-bold leading-none">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function StatusTempatTinggalChart() {
    const total = bansosData.length
    const COLORS = ['#ef4444', '#10b981', '#f59e0b']

    const v1 = Math.ceil(total * 0.5)
    const v2 = Math.ceil(total * 0.35)
    const v3 = Math.max(0, total - v1 - v2)

    const chartData = [
        { name: 'Milik Sendiri', value: v1 },
        { name: 'Kontrakan / Sewa', value: v2 },
        { name: 'Tinggal Bersama Keluarga', value: v3 },
    ].map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Status Tempat Tinggal</h3>
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
                                ))!}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0 justify-items-center'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex flex-col items-center gap-0.5 text-center'>
                            <div className='flex items-center gap-1.5'>
                                <div className='w-2.5 h-2.5 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-[10px] sm:text-[11px] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap'>{item.name}</p>
                            </div>
                            <span className="text-[11px] sm:text-xs font-bold leading-none">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function RiwayatBantuanChart() {
    const dataCount = bansosData.reduce((acc, curr) => {
        if (curr.riwayat_bantuan) {
            curr.riwayat_bantuan.forEach(r => {
                acc[r] = (acc[r] || 0) + 1
            })
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(dataCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#84cc16', '#eab308', '#0ea5e9', '#ec4899']
    const total = bansosData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Riwayat Bansos
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Rekam jejak penerimaan bantuan warga
            </p>

            <div className='space-y-4'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={index}>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-3'>
                                    <div
                                        className='w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md'
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    >
                                        {item.value}
                                    </div>
                                    <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {item.name}
                                    </span>
                                </div>
                                <span
                                    className='text-lg font-bold'
                                    style={{ color: COLORS[index % COLORS.length] }}
                                >
                                    {percentage}%
                                </span>
                            </div>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3'>
                                <div
                                    className='h-3 rounded-full transition-all duration-500 shadow-sm'
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: COLORS[index % COLORS.length]
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
