import { AlertTriangle } from 'lucide-react'
import {
    wargaSakitData,
    wargaMeninggalData,
    wargaMiskinData,
    lansiaTerlantarData,
    anakPutusSekolahData,
} from '../data/data'
import { EconomicConditionChart, WargaSakitByDiseaseChart } from './dashboard-charts'
import PenerimaBantuan from './penerima-bantuan'
import JenisBantuan from './jenis-bantuan'
import JenisPenyakit from './jenis-penyakit'
import WargaSakitJenisPenyakitByAgeChart from './warga-sakit-jenis-penyakit-by-age-chart'
import {
    PenyebabMeninggalByAgeChart,
    WargaMeninggalPerUsiaChart,
    PenyebabMeninggalChart,
} from './warga-meninggal-charts'
import {
    KondisiKesehatanChart,
    KondisiTempatTinggalChart,
} from './lansia-terlantar-charts'
import {
    PenyebabPerJenjangChart,
    JenjangPendidikanChart,
    PenyebabPutusSekolahChart,
} from './anak-putus-sekolah-charts'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const countBy = <T,>(arr: T[], key: keyof T): { name: string; value: number }[] => {
    const map: Record<string, number> = {}
    arr.forEach((item) => {
        const k = String(item[key])
        map[k] = (map[k] || 0) + 1
    })
    return Object.entries(map)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
}

// ─── Section: Warga Sakit ──────────────────────────────────────────────────────

function WargaSakitSection() {
    const byDisease = countBy(wargaSakitData, 'jenisPenyakit')

    return (
        <>
            {/* <div className="flex flex-wrap gap-3 mb-6">
                    <StatPill label="Total Kasus" value={total} color="#ef4444" />
                    <StatPill label="Penyakit Menular" value={menular} color="#f97316" />
                    <StatPill label="Tidak Menular" value={tidakMenular} color="#f59e0b" />
                    <StatPill label="Jenis Penyakit" value={byDisease.length} color="#6b7280" />
                </div> */}

            <div>
                <WargaSakitJenisPenyakitByAgeChart />
            </div>
            <div>
                <WargaSakitByDiseaseChart />
            </div>
            <div>
                <JenisPenyakit data={byDisease} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* By Disease */}
                {/* <div className='lg:col-span-2'>
                    <JenisPenyakit data={byDisease} />
                </div>
                <div className="flex flex-col gap-8">
                    <WargaSakitJenisPenyakitByAgeChart />
                </div> */}
                {/* <div className="lg:col-span-2">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Berdasarkan Jenis Penyakit</p>
                        <HorizontalBar data={byDisease} colors={PALETTE.sakit} label="kasus" />
                    </div> */}

                {/* Menular ratio + kelompok umur */}
                {/* <div className="space-y-5">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Menular vs Tidak Menular</p>
                            <MiniDonut
                                data={[{ name: 'Menular', value: menular }, { name: 'Tidak Menular', value: tidakMenular }]}
                                colors={['#ef4444', '#f59e0b']}
                            />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Kelompok Umur</p>
                            <MiniDonut data={ageGroups} colors={PALETTE.sakit} />
                        </div>
                    </div> */}
            </div>


            {/* Warga list */}
            {/* <div className="mt-6">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Daftar Warga</p>
                <div className="space-y-2">
                    {wargaSakitData.map((w) => (
                        <div key={w.id} className="flex items-center justify-between p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center">
                                    <User className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{w.nama}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{w.jenisPenyakit} · {w.umur} th · {w.alamat}</p>
                                </div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${w.kategori === 'Menular' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'}`}>
                                {w.kategori}
                            </span>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    )
}

// ─── Section: Warga Meninggal ──────────────────────────────────────────────────

function WargaMeninggalSection() {
    return (
        <div className="space-y-6">
            <div>
                <PenyebabMeninggalByAgeChart />
            </div>
            <div>
                <WargaMeninggalPerUsiaChart />
            </div>
            <div>
                <PenyebabMeninggalChart />
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WargaMeninggalPerUsiaChart />
                <PenyebabMeninggalChart />
            </div> */}
        </div>
    )
}

// ─── Section: Warga Miskin Ekstrem ─────────────────────────────────────────────

function WargaMiskinSection() {
    const penerima = wargaMiskinData.filter(w => w.statusBantuan === 'Penerima').length
    const byBantuan = countBy(wargaMiskinData.filter(w => w.jenisBantuan !== '-'), 'jenisBantuan')

    return (
        <>
            {/* <div className="flex flex-wrap gap-3 mb-6">
                <StatPill label="Total Warga" value={total} color="#f59e0b" />
                <StatPill label="Penerima Bantuan" value={penerima} color="#10b981" />
                <StatPill label="Belum Menerima" value={belum} color="#ef4444" />
                <StatPill label="Rata-rata Tanggungan" value={`${avgTanggungan} org`} color="#d97706" />
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <EconomicConditionChart />
                </div>
                <div className="flex flex-col gap-8">
                    <PenerimaBantuan count={penerima} />
                </div>
            </div>
            <div>
                <JenisBantuan data={byBantuan} />
            </div>
        </>
    )
}

// ─── Section: Lansia Terlantar ─────────────────────────────────────────────────

function LansiaTerlantarSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <KondisiTempatTinggalChart />
            </div>
            <div>
                <KondisiKesehatanChart />
            </div>
        </div>
    )
}

// ─── Section: Anak Putus Sekolah ───────────────────────────────────────────────

function AnakPutusSekolahSection() {
    return (
        <div className="space-y-6">
            <PenyebabPerJenjangChart />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <JenjangPendidikanChart />
                <PenyebabPutusSekolahChart />
            </div>
        </div>
    )
}

// ─── Summary Header ────────────────────────────────────────────────────────────

function DemografiSummary() {
    const totalSakit = wargaSakitData.length
    const totalMeninggal = wargaMeninggalData.length
    const totalMiskin = wargaMiskinData.length
    const totalLansia = lansiaTerlantarData.length
    const totalSekolah = anakPutusSekolahData.length
    const grandTotal = totalSakit + totalMeninggal + totalMiskin + totalLansia + totalSekolah

    const issues = [
        { label: 'Miskin Ekstrem', count: totalMiskin, color: '#f59e0b', pct: Math.round((totalMiskin / grandTotal) * 100) },
        { label: 'Warga Sakit', count: totalSakit, color: '#ef4444', pct: Math.round((totalSakit / grandTotal) * 100) },
        { label: 'Warga Meninggal', count: totalMeninggal, color: '#6b7280', pct: Math.round((totalMeninggal / grandTotal) * 100) },
        { label: 'Lansia Terlantar', count: totalLansia, color: '#8b5cf6', pct: Math.round((totalLansia / grandTotal) * 100) },
        { label: 'Putus Sekolah', count: totalSekolah, color: '#3b82f6', pct: Math.round((totalSekolah / grandTotal) * 100) },
    ]

    const belumBantuan = wargaMiskinData.filter(w => w.statusBantuan !== 'Penerima').length

    return (
        <div className="rounded-2xl border bg-white dark:bg-gray-900 shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className='flex justify-between gap-2'>
                    <h2 className="text-xl text-gray-500 dark:text-gray-400">Total Kasus</h2>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{grandTotal}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {belumBantuan > 0 && (
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-xs font-medium">
                            <AlertTriangle className="w-4 h-4" />
                            {belumBantuan} warga miskin belum terima bantuan
                        </div>
                    )}
                    {/* {menular > 0 && (
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-400 text-xs font-medium">
                            <Clock className="w-4 h-4" />
                            {menular} kasus penyakit menular aktif
                        </div>
                    )} */}
                </div>
            </div>

            <div className="flex rounded-full overflow-hidden h-4 gap-0.5 mb-4">
                {issues.map((isu, i) => (
                    <div
                        key={i}
                        className="h-full transition-all"
                        style={{ width: `${isu.pct}%`, backgroundColor: isu.color }}
                        title={`${isu.label}: ${isu.count} (${isu.pct}%)`}
                    />
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {issues.map((isu, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ backgroundColor: `${isu.color}10`, border: `1px solid ${isu.color}25` }}>
                        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: isu.color }} />
                        <div className="min-w-0">
                            <p className="text-lg text-slate-700 dark:text-slate-300 truncate">{isu.label}</p>
                            <p className="text-lg font-bold" style={{ color: isu.color }}>{isu.count} <span className="text-xs font-normal text-gray-900 dark:text-white">({isu.pct}%)</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function DemografiIsuBreakdown() {
    return (
        <div className="space-y-4">
            <DemografiSummary />
            <WargaMiskinSection />
            <WargaSakitSection />
            <WargaMeninggalSection />
            <LansiaTerlantarSection />
            <AnakPutusSekolahSection />
        </div>
    )
}
