import {
    wargaMeninggalData,
    wargaMiskinData,
    wargaSakitData,
    lansiaTerlantarData,
    anakPutusSekolahData,
} from '../data/data'

import {
    Users,
    Wallet,
    GraduationCap,
    Activity,
    HeartPulse,
} from 'lucide-react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'

export function SocialOverviewCards() {
    const stats = [
        {
            title: 'Warga Sakit',
            value: wargaSakitData.length,
            icon: Activity,
            color: 'text-rose-500',
            bg: 'bg-rose-100 dark:bg-rose-900/30',
        },
        {
            title: 'Warga Meninggal',
            value: wargaMeninggalData.length,
            icon: HeartPulse,
            color: 'text-slate-500',
            bg: 'bg-slate-100 dark:bg-slate-800',
        },
        {
            title: 'Miskin Ekstrem',
            value: wargaMiskinData.length,
            icon: Wallet,
            color: 'text-amber-500',
            bg: 'bg-amber-100 dark:bg-amber-900/30',
        },
        {
            title: 'Lansia Terlantar',
            value: lansiaTerlantarData.length,
            icon: Users,
            color: 'text-violet-500',
            bg: 'bg-violet-100 dark:bg-violet-900/30',
        },
        {
            title: 'Putus Sekolah',
            value: anakPutusSekolahData.length,
            icon: GraduationCap,
            color: 'text-blue-500',
            bg: 'bg-blue-100 dark:bg-blue-900/30',
        },
    ]

    const totalReports = stats.reduce((acc, item) => acc + item.value, 0)

    const totalMiskinEkstrem = wargaMiskinData.length
    const totalPenerima = wargaMiskinData.filter(
        (w) => w.statusBantuan === 'Penerima'
    ).length
    const totalBelum = totalMiskinEkstrem - totalPenerima

    const percentageDistributed =
        totalMiskinEkstrem > 0
            ? Math.round((totalPenerima / totalMiskinEkstrem) * 100)
            : 0

    const distributionData = [
        { name: 'Sudah Menerima', value: totalPenerima, color: '#10b981' },
        { name: 'Belum Menerima', value: totalBelum, color: '#f43f5e' },
    ]

    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
            <Card className="xl:col-span-3 border shadow-sm">
                <CardHeader className="pb-4 border-b">
                    <div>
                        <div className="space-y-1">
                            <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                <Activity className="w-5 h-5 text-rose-500" />
                                Kategori Kasus
                            </CardTitle>

                            <p className="text-xs text-muted-foreground">
                                Distribusi laporan berdasarkan kategori kondisi warga
                            </p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="pt-2">
                    {(() => {
                        const categories = [
                            { name: 'Warga Sakit', value: wargaSakitData.length, color: '#f43f5e' },
                            { name: 'Warga Meninggal', value: wargaMeninggalData.length, color: '#6b7280' },
                            { name: 'Miskin Ekstrem', value: wargaMiskinData.length, color: '#f59e0b' },
                            { name: 'Lansia Terlantar', value: lansiaTerlantarData.length, color: '#8b5cf6' },
                            { name: 'Putus Sekolah', value: anakPutusSekolahData.length, color: '#3b82f6' },
                        ].sort((a, b) => b.value - a.value)

                        const total = categories.reduce((acc, item) => acc + item.value, 0)

                        return (
                            <div className="space-y-5">
                                {categories.map((item, index) => {
                                    const percentage =
                                        total > 0
                                            ? ((item.value / total) * 100).toFixed(1)
                                            : '0'

                                    return (
                                        <div key={index}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="w-3 h-3 rounded-full"
                                                        style={{ backgroundColor: item.color }}
                                                    />
                                                    <span className="text-sm text-primary font-semibold">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <span className="text-sm font-semibold">
                                                    {percentage}%
                                                </span>
                                            </div>

                                            <div className="w-full bg-muted rounded-full h-10 flex items-center">
                                                <div
                                                    className="h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold transition-all duration-500"
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: item.color,
                                                    }}
                                                >
                                                    {item.value > 0 && item.value.toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })()}
                </CardContent>
            </Card>


            <div className="flex flex-col gap-6 xl:col-span-1">

                <Card className="border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium text-primary">
                            Total Kasus
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">
                            {totalReports.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Total laporan sosial tercatat
                        </p>
                    </CardContent>
                </Card>

                <Card className="border shadow-sm flex-1">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium text-primary">
                            Penerima Bantuan
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col justify-between h-full">
                        <div>
                            <div className="text-3xl font-bold tracking-tight">
                                {totalPenerima.toLocaleString()}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                dari {totalMiskinEkstrem.toLocaleString()} warga miskin ekstrem
                            </p>
                        </div>

                        <div className="relative h-[200px] w-full mt-4">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-lg font-bold">
                                    {percentageDistributed}%
                                </span>
                            </div>

                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={distributionData}
                                        innerRadius={70}
                                        outerRadius={95}
                                        paddingAngle={3}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {distributionData.map((entry, index) => (
                                            <Cell key={index} fill={entry.color} />
                                        ))}
                                    </Pie>

                                    <Tooltip
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                return (
                                                    <div className="rounded-lg border bg-background p-2 text-xs shadow-md">
                                                        <p className="font-medium">
                                                            {payload[0].name}
                                                        </p>
                                                        <p>{payload[0].value} Warga</p>
                                                    </div>
                                                )
                                            }
                                            return null
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
