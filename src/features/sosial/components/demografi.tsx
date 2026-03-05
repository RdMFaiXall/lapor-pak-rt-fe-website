import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const wargaSakitData = [
    { id: 1, nama: "Budi Santoso", jenisPenyakit: "DBD", kategori: "Menular", alamat: "RT 001 RW 02", umur: 35, tanggalLaporan: "2026-01-15" },
    { id: 2, nama: "Siti Aminah", jenisPenyakit: "Diabetes", kategori: "Tidak Menular", alamat: "RT 001 RW 03", umur: 52, tanggalLaporan: "2026-01-18" },
    { id: 3, nama: "Ahmad Fauzi", jenisPenyakit: "TBC", kategori: "Menular", alamat: "RT 002 RW 01", umur: 45, tanggalLaporan: "2026-01-20" },
    { id: 4, nama: "Dewi Lestari", jenisPenyakit: "Darah Tinggi", kategori: "Tidak Menular", alamat: "RT 001 RW 02", umur: 58, tanggalLaporan: "2026-01-22" },
    { id: 5, nama: "Rudi Hartono", jenisPenyakit: "Asma", kategori: "Tidak Menular", alamat: "RT 003 RW 01", umur: 28, tanggalLaporan: "2026-01-25" },
    { id: 6, nama: "Sri Wahyuni", jenisPenyakit: "Jantung", kategori: "Tidak Menular", alamat: "RT 002 RW 02", umur: 62, tanggalLaporan: "2026-01-28" },
    { id: 7, nama: "Andi Wijaya", jenisPenyakit: "Hepatitis", kategori: "Menular", alamat: "RT 001 RW 01", umur: 38, tanggalLaporan: "2026-02-01" },
    { id: 8, nama: "Nurul Hidayah", jenisPenyakit: "Stroke", kategori: "Tidak Menular", alamat: "RT 003 RW 02", umur: 65, tanggalLaporan: "2026-02-03" },
    { id: 9, nama: "Bambang Susilo", jenisPenyakit: "Gagal Ginjal", kategori: "Tidak Menular", alamat: "RT 002 RW 03", umur: 55, tanggalLaporan: "2026-02-05" },
    { id: 10, nama: "Rina Marlina", jenisPenyakit: "Tipes", kategori: "Menular", alamat: "RT 001 RW 03", umur: 32, tanggalLaporan: "2026-02-08" },
    { id: 11, nama: "Budi Raharjo", jenisPenyakit: "HIV/AIDS", kategori: "Menular", alamat: "RT 003 RW 03", umur: 40, tanggalLaporan: "2026-02-10" },
    { id: 12, nama: "Siti Zulaikha", jenisPenyakit: "Lainnya", kategori: "Tidak Menular", alamat: "RT 002 RW 01", umur: 29, tanggalLaporan: "2026-02-11" },
];

const wargaMeninggalData = [
    { id: 1, nama: "Sukarno Wijaya", penyebab: "Sakit", umur: 75, tanggalMeninggal: "2025-11-10" },
    { id: 2, nama: "Mariam Sari", penyebab: "Usia lanjut", umur: 82, tanggalMeninggal: "2025-11-25" },
    { id: 3, nama: "Hendra Kusuma", penyebab: "Kecelakaan", umur: 42, tanggalMeninggal: "2025-12-05" },
    { id: 4, nama: "Suminah", penyebab: "Sakit", umur: 68, tanggalMeninggal: "2025-12-18" },
    { id: 5, nama: "Abdul Rahman", penyebab: "Penyakit menular", umur: 55, tanggalMeninggal: "2026-01-08" },
    { id: 6, nama: "Fatimah Zahra", penyebab: "Usia lanjut", umur: 78, tanggalMeninggal: "2026-01-20" },
    { id: 7, nama: "Joko Susanto", penyebab: "Sakit", umur: 63, tanggalMeninggal: "2026-02-02" },
    { id: 8, nama: "Sutrisno", penyebab: "Lainnya", umur: 45, tanggalMeninggal: "2026-02-10" },
];

const wargaMiskinData = [
    { id: 1, nama: "Slamet Riyadi", kondisiEkonomi: "Pengangguran", jenisBantuan: "BLT", statusBantuan: "Penerima", jumlahTanggungan: 4 },
    { id: 2, nama: "Warni", kondisiEkonomi: "Pekerja harian", jenisBantuan: "PKH", statusBantuan: "Penerima", jumlahTanggungan: 3 },
    { id: 3, nama: "Sugeng Priyono", kondisiEkonomi: "Lansia tanpa penghasilan", jenisBantuan: "BPNT", statusBantuan: "Penerima", jumlahTanggungan: 2 },
    { id: 4, nama: "Rubiyah", kondisiEkonomi: "Disabilitas", jenisBantuan: "KIS", statusBantuan: "Penerima", jumlahTanggungan: 1 },
    { id: 5, nama: "Tuti Handayani", kondisiEkonomi: "KK Tunggal", jenisBantuan: "BLT", statusBantuan: "Penerima", jumlahTanggungan: 2 },
    { id: 6, nama: "Parman", kondisiEkonomi: "Pekerja harian", jenisBantuan: "Bedah Rumah", statusBantuan: "Penerima", jumlahTanggungan: 5 },
    { id: 7, nama: "Sumini", kondisiEkonomi: "Pengangguran", jenisBantuan: "Bantuan Pendidikan", statusBantuan: "Penerima", jumlahTanggungan: 3 },
    { id: 8, nama: "Kasturi", kondisiEkonomi: "Lansia tanpa penghasilan", jenisBantuan: "PKH", statusBantuan: "Penerima", jumlahTanggungan: 0 },
    { id: 9, nama: "Suparman", kondisiEkonomi: "Pekerja harian", jenisBantuan: "UMKM", statusBantuan: "Penerima", jumlahTanggungan: 4 },
    { id: 10, nama: "Aisyah", kondisiEkonomi: "KK Tunggal", jenisBantuan: "BPNT", statusBantuan: "Penerima", jumlahTanggungan: 2 },
    { id: 11, nama: "Warto", kondisiEkonomi: "Disabilitas", jenisBantuan: "KIS", statusBantuan: "Penerima", jumlahTanggungan: 3 },
    { id: 12, nama: "Yasin Mahmud", kondisiEkonomi: "Pengangguran", jenisBantuan: "BLT", statusBantuan: "Penerima", jumlahTanggungan: 4 },
    { id: 13, nama: "Jumadi", kondisiEkonomi: "Pekerja lepas", jenisBantuan: "-", statusBantuan: "Belum Menerima", jumlahTanggungan: 3 },
    { id: 14, nama: "Sarinah", kondisiEkonomi: "Lansia sebatang kara", jenisBantuan: "-", statusBantuan: "Belum Menerima", jumlahTanggungan: 0 },
    { id: 15, nama: "Budi Santoso", kondisiEkonomi: "Korban PHK", jenisBantuan: "-", statusBantuan: "Belum Menerima", jumlahTanggungan: 4 },
    { id: 16, nama: "Marni", kondisiEkonomi: "Janda kurang mampu", jenisBantuan: "-", statusBantuan: "Belum Menerima", jumlahTanggungan: 2 },
    { id: 17, nama: "Kasmin", kondisiEkonomi: "Sakit menahun", jenisBantuan: "-", statusBantuan: "Belum Menerima", jumlahTanggungan: 1 },
    { id: 18, nama: "Ponirah", kondisiEkonomi: "Lansia terlantar", jenisBantuan: "-", statusBantuan: "Belum Menerima", jumlahTanggungan: 0 },
];

const lansiaTerlantarData = [
    { id: 1, nama: "Pak Sarno", umur: 72, kondisi: "Tinggal sendiri", kondisiKesehatan: "Lemah", alamat: "RT 001 RW 02", bantuan: "Perlu pengawasan" },
    { id: 2, nama: "Mbah Siti", umur: 78, kondisi: "Tanpa keluarga", kondisiKesehatan: "Sakit-sakitan", alamat: "RT 002 RW 01", bantuan: "Perlu perawatan" },
    { id: 3, nama: "Pak Tono", umur: 69, kondisi: "Dengan keluarga", kondisiKesehatan: "Baik", alamat: "RT 001 RW 03", bantuan: "Mandiri" },
    { id: 4, nama: "Mbah Wulan", umur: 81, kondisi: "Sakit", kondisiKesehatan: "Stroke", alamat: "RT 003 RW 01", bantuan: "Perawatan intensif" },
    { id: 5, nama: "Pak Mukri", umur: 75, kondisi: "Tinggal sendiri", kondisiKesehatan: "Lemah", alamat: "RT 002 RW 02", bantuan: "Perlu pendamping" },
];

const anakTidakSekolahData = [
    { id: 1, nama: "Andi Nugroho", umur: 15, jenjang: "SMP", penyebab: "Ekonomi", alamat: "RT 001 RW 02", tahunPutus: 2025 },
    { id: 2, nama: "Rina Safitri", umur: 16, jenjang: "SMA", penyebab: "Pernikahan Dini", alamat: "RT 002 RW 01", tahunPutus: 2025 },
    { id: 3, nama: "Budi Setiawan", umur: 12, jenjang: "SD", penyebab: "Masalah Keluarga", alamat: "RT 001 RW 03", tahunPutus: 2026 },
    { id: 4, nama: "Lina Marliana", umur: 17, jenjang: "SMK", penyebab: "Ekonomi", alamat: "RT 003 RW 01", tahunPutus: 2025 },
    { id: 5, nama: "Eko Prasetyo", umur: 14, jenjang: "SMP", penyebab: "Kurang Motivasi", alamat: "RT 002 RW 02", tahunPutus: 2026 },
    { id: 6, nama: "Sari Dewi", umur: 13, jenjang: "SMP", penyebab: "Disabilitas", alamat: "RT 001 RW 01", tahunPutus: 2025 },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const countBy = <T,>(arr: T[], key: keyof T): { name: string; value: number }[] => {
    const map: Record<string, number> = {};
    arr.forEach(item => { const k = String(item[key]); map[k] = (map[k] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
};

// ─── MICRO COMPONENTS ─────────────────────────────────────────────────────────

const SparkBar = ({ value, max, color, height = 4 }: { value: number; max: number; color: string; height?: number }) => (
    <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden" style={{ height }}>
        <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.max(4, (value / max) * 100)}%`, background: color }}
        />
    </div>
);

const Ring = ({ value, total, color, size = 52, stroke = 7 }: { value: number; total: number; color: string; size?: number; stroke?: number }) => {
    const r = (size - stroke) / 2;
    const circ = 2 * Math.PI * r;
    const pct = total > 0 ? value / total : 0;
    return (
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" className="stroke-gray-200 dark:stroke-gray-700" strokeWidth={stroke} />
            <circle
                cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={color} strokeWidth={stroke}
                strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.8s ease" }}
            />
        </svg>
    );
};

const Tag = ({ children, color }: { children: React.ReactNode; color: string }) => (
    <span
        className="inline-block rounded px-1.5 py-0.5 text-xs font-bold"
        style={{
            background: color + "1a",
            color,
            border: `1px solid ${color}40`,
            fontSize: 10,
            letterSpacing: "0.02em",
        }}
    >
        {children}
    </span>
);

// ─── BENTO CARD WRAPPER ───────────────────────────────────────────────────────

const BentoCard = ({ id, color, colSpan, onClick, children }: { id: string; color: string; colSpan: number; onClick: (id: string) => void; children: React.ReactNode }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onClick(id)}
            onKeyDown={e => e.key === "Enter" && onClick(id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border transition-all duration-200"
            style={{
                gridColumn: `span ${colSpan}`,
                borderColor: hovered ? color + "99" : color + "33",
                boxShadow: hovered ? `0 6px 24px ${color}15` : "none",
                transform: hovered ? "translateY(-1px)" : "translateY(0)",
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
            <div className="p-4">{children}</div>
        </div>
    );
};

// ─── DETAIL SIDE PANEL ────────────────────────────────────────────────────────

const DetailPanel = ({ card, onClose }: { card: string | null; onClose: () => void }) => {
    if (!card) return null;

    const config = ({
        sakit: { label: "🏥 Warga Sakit", color: "#ef4444" },
        meninggal: { label: "⚰️ Warga Meninggal", color: "#6b7280" },
        miskin: { label: "💰 Miskin Ekstrem", color: "#f59e0b" },
        lansia: { label: "👴 Lansia Terlantar", color: "#8b5cf6" },
        sekolah: { label: "🎓 Putus Sekolah", color: "#3b82f6" },
    } as Record<string, { label: string; color: string }>)[card];

    const renderContent = () => {
        if (card === "sakit") {
            const byDisease = countBy(wargaSakitData, "jenisPenyakit");
            const maxD = byDisease[0]?.value || 1;
            const menular = wargaSakitData.filter(w => w.kategori === "Menular").length;
            return (
                <>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="rounded-xl p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40">
                            <div className="text-2xl font-black text-red-500">{menular}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Penyakit Menular ⚠️</div>
                        </div>
                        <div className="rounded-xl p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
                            <div className="text-2xl font-black text-amber-500">{wargaSakitData.length - menular}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Tidak Menular</div>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Distribusi Penyakit</p>
                    {byDisease.map((d, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-600 dark:text-gray-400">{d.name}</span>
                                <span className="text-xs font-bold text-red-500 font-mono">{d.value}</span>
                            </div>
                            <SparkBar value={d.value} max={maxD} color="#ef4444" height={5} />
                        </div>
                    ))}
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-5 mb-3">Daftar Warga</p>
                    {wargaSakitData.map((w, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{w.nama}</div>
                                <div className="text-xs text-gray-500">{w.jenisPenyakit} · {w.umur}th · {w.alamat}</div>
                            </div>
                            <Tag color={w.kategori === "Menular" ? "#ef4444" : "#f59e0b"}>{w.kategori}</Tag>
                        </div>
                    ))}
                </>
            );
        }
        if (card === "meninggal") {
            const byCause = countBy(wargaMeninggalData, "penyebab");
            const maxC = byCause[0]?.value || 1;
            const avgAge = Math.round(wargaMeninggalData.reduce((s, w) => s + w.umur, 0) / wargaMeninggalData.length);
            return (
                <>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="rounded-xl p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-black text-gray-500">{wargaMeninggalData.length}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Total Kasus</div>
                        </div>
                        <div className="rounded-xl p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="text-2xl font-black text-gray-500">{avgAge}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Rata-rata Usia</div>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Penyebab</p>
                    {byCause.map((d, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-600 dark:text-gray-400">{d.name}</span>
                                <span className="text-xs font-bold text-gray-500 font-mono">{d.value}</span>
                            </div>
                            <SparkBar value={d.value} max={maxC} color="#6b7280" height={5} />
                        </div>
                    ))}
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-5 mb-3">Daftar Warga</p>
                    {wargaMeninggalData.map((w, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{w.nama}</div>
                                <div className="text-xs text-gray-500">{w.umur}th · {w.tanggalMeninggal}</div>
                            </div>
                            <Tag color="#6b7280">{w.penyebab}</Tag>
                        </div>
                    ))}
                </>
            );
        }
        if (card === "miskin") {
            const penerima = wargaMiskinData.filter(w => w.statusBantuan === "Penerima");
            const belum = wargaMiskinData.filter(w => w.statusBantuan !== "Penerima");
            return (
                <>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="rounded-xl p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                            <div className="text-2xl font-black text-emerald-500">{penerima.length}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Terima Bantuan ✓</div>
                        </div>
                        <div className="rounded-xl p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40">
                            <div className="text-2xl font-black text-red-500">{belum.length}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Belum Terima !</div>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Prioritas — Belum Terima</p>
                    {belum.map((w, i) => (
                        <div key={i} className="flex justify-between items-center px-3 py-2 rounded-lg mb-2 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30">
                            <div>
                                <div className="text-xs font-bold text-red-600 dark:text-red-400">{w.nama}</div>
                                <div className="text-xs text-gray-500">{w.kondisiEkonomi} · {w.jumlahTanggungan} tanggungan</div>
                            </div>
                        </div>
                    ))}
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-5 mb-2">Penerima Aktif</p>
                    {penerima.map((w, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{w.nama}</div>
                                <div className="text-xs text-gray-500">{w.kondisiEkonomi} · {w.jumlahTanggungan} tanggungan</div>
                            </div>
                            <Tag color="#10b981">{w.jenisBantuan}</Tag>
                        </div>
                    ))}
                </>
            );
        }
        if (card === "lansia") {
            return (
                <>
                    {lansiaTerlantarData.map((w, i) => {
                        const c = w.bantuan === "Mandiri" ? "#10b981" : w.bantuan === "Perawatan intensif" ? "#ef4444" : "#f59e0b";
                        return (
                            <div key={i} className="flex items-start justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: c }} />
                                    <div>
                                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                            {w.nama} <span className="text-gray-400 font-normal text-xs">{w.umur}th</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5">{w.kondisi} · {w.kondisiKesehatan} · {w.alamat}</div>
                                    </div>
                                </div>
                                <Tag color={c}>{w.bantuan}</Tag>
                            </div>
                        );
                    })}
                </>
            );
        }
        if (card === "sekolah") {
            const byPenyebab = countBy(anakTidakSekolahData, "penyebab");
            const byJenjang = countBy(anakTidakSekolahData, "jenjang");
            const maxP = byPenyebab[0]?.value || 1;
            const clrs = ["#3b82f6", "#60a5fa", "#93c5fd", "#1d4ed8"];
            return (
                <>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                        {byJenjang.map((j, i) => (
                            <div key={i} className="rounded-xl p-3 text-center border"
                                style={{ background: clrs[i % clrs.length] + "15", borderColor: clrs[i % clrs.length] + "33" }}>
                                <div className="text-xl font-black" style={{ color: clrs[i % clrs.length] }}>{j.value}</div>
                                <div className="text-xs text-gray-500">{j.name}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Penyebab</p>
                    {byPenyebab.map((d, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-600 dark:text-gray-400">{d.name}</span>
                                <span className="text-xs font-bold text-blue-500 font-mono">{d.value}</span>
                            </div>
                            <SparkBar value={d.value} max={maxP} color="#3b82f6" height={5} />
                        </div>
                    ))}
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-5 mb-3">Daftar Anak</p>
                    {anakTidakSekolahData.map((w, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <div>
                                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {w.nama} <span className="text-gray-400 font-normal text-xs">{w.umur}th</span>
                                </div>
                                <div className="text-xs text-gray-500">{w.jenjang} · {w.alamat} · Putus {w.tahunPutus}</div>
                            </div>
                            <Tag color={w.penyebab === "Ekonomi" ? "#ef4444" : "#3b82f6"}>{w.penyebab}</Tag>
                        </div>
                    ))}
                </>
            );
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex justify-end"
            style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
        >
            <div
                className="w-96 h-full overflow-y-auto bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 p-6 relative shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xs font-mono px-2.5 py-1.5 rounded-lg
            bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400
            hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700
            transition-colors cursor-pointer"
                >
                    ✕ tutup
                </button>
                <div className="mb-5 pr-16">
                    <div className="text-sm font-black text-gray-900 dark:text-gray-100 tracking-tight">{config.label}</div>
                </div>
                <div style={{ borderTop: `2px solid ${config.color}`, paddingTop: 16 }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export function DemografiIsu() {
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const [hoveredAction, setHoveredAction] = useState<number | null>(null);

    // computed stats
    const menularCount = wargaSakitData.filter(w => w.kategori === "Menular").length;
    const sakitMenularPct = Math.round((menularCount / wargaSakitData.length) * 100);
    const belumBantuan = wargaMiskinData.filter(w => w.statusBantuan !== "Penerima").length;
    const penerimaCount = wargaMiskinData.filter(w => w.statusBantuan === "Penerima").length;
    const penerimaRatio = Math.round((penerimaCount / wargaMiskinData.length) * 100);
    const avgMeninggalAge = Math.round(wargaMeninggalData.reduce((s, w) => s + w.umur, 0) / wargaMeninggalData.length);
    const byCause = countBy(wargaMeninggalData, "penyebab");
    const intensif = lansiaTerlantarData.filter(w => w.bantuan === "Perawatan intensif").length;
    const ekonomiPct = Math.round((anakTidakSekolahData.filter(w => w.penyebab === "Ekonomi").length / anakTidakSekolahData.length) * 100);
    const byJenjang = countBy(anakTidakSekolahData, "jenjang");
    const sakitByDisease = countBy(wargaSakitData, "jenisPenyakit").slice(0, 4);
    const maxDisease = sakitByDisease[0]?.value || 1;
    const totalAll = wargaSakitData.length + wargaMeninggalData.length + wargaMiskinData.length + lansiaTerlantarData.length + anakTidakSekolahData.length;

    const grandPieData = [
        { name: "Sakit", value: wargaSakitData.length, color: "#ef4444" },
        { name: "Meninggal", value: wargaMeninggalData.length, color: "#6b7280" },
        { name: "Miskin", value: wargaMiskinData.length, color: "#f59e0b" },
        { name: "Lansia", value: lansiaTerlantarData.length, color: "#8b5cf6" },
        { name: "Sekolah", value: anakTidakSekolahData.length, color: "#3b82f6" },
    ];

    return (
        <div className="space-y-4">
            {/* ── ALERT BAR ── */}
            {(belumBantuan > 0 || menularCount > 0) && (
                <div className="flex flex-col sm:flex-row gap-3">
                    {belumBantuan > 0 && (
                        <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700/50">
                            <span className="text-sm">⚡</span>
                            <div>
                                <div className="text-xs font-bold text-amber-700 dark:text-amber-400">{belumBantuan} warga miskin belum terima bantuan</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Aksi diperlukan segera · klik kartu Miskin Ekstrem</div>
                            </div>
                        </div>
                    )}
                    {menularCount > 0 && (
                        <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-700/50">
                            <span className="text-sm">🦠</span>
                            <div>
                                <div className="text-xs font-bold text-red-700 dark:text-red-400">{menularCount} kasus penyakit menular aktif</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Monitoring ketat diperlukan</div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* ── BENTO GRID ── */}
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(12, 1fr)" }}>

                {/* OVERVIEW TOTAL — col 3 */}
                <div className="rounded-2xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4 relative overflow-hidden" style={{ gridColumn: "span 3" }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent" />
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Kasus</div>
                    <div className="flex items-end gap-2 mb-1">
                        <div className="text-5xl font-black tracking-tighter text-indigo-500 dark:text-indigo-400 leading-none">{totalAll}</div>
                    </div>
                    <div className="mt-4 space-y-2">
                        {grandPieData.map((d, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-sm shrink-0" style={{ background: d.color }} />
                                <span className="text-xs text-gray-500 dark:text-gray-400 w-14 truncate">{d.name}</span>
                                <div className="flex-1"><SparkBar value={d.value} max={totalAll} color={d.color} height={4} /></div>
                                <span className="text-xs font-bold font-mono w-5 text-right" style={{ color: d.color }}>{d.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WARGA SAKIT — col 5 */}
                <BentoCard id="sakit" color="#ef4444" colSpan={5} onClick={setActivePanel}>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Warga Sakit</div>
                            <div className="text-5xl font-black tracking-tighter text-red-500 leading-none">{wargaSakitData.length}</div>
                        </div>
                        <div className="text-center">
                            <div className="relative inline-block">
                                <Ring value={menularCount} total={wargaSakitData.length} color="#ef4444" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-black text-red-500">{sakitMenularPct}%</span>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">menular</div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        {sakitByDisease.map((d, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{d.name}</span>
                                    <span className="text-xs font-bold text-red-500 font-mono">{d.value}</span>
                                </div>
                                <SparkBar value={d.value} max={maxDisease} color="#ef4444" height={3} />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2 mt-3 flex-wrap">
                        <Tag color="#ef4444">{menularCount} Menular</Tag>
                        <Tag color="#f59e0b">{wargaSakitData.length - menularCount} Tdk Menular</Tag>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600 mt-2 font-mono" style={{ fontSize: 9 }}>↗ klik untuk detail</p>
                </BentoCard>

                {/* WARGA MENINGGAL — col 4 */}
                <BentoCard id="meninggal" color="#6b7280" colSpan={4} onClick={setActivePanel}>
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Warga Meninggal</div>
                    <div className="text-5xl font-black tracking-tighter text-gray-500 leading-none">{wargaMeninggalData.length}</div>
                    <div className="mt-4 flex flex-wrap gap-1.5 mb-3">
                        {byCause.map((c, i) => (
                            <Tag key={i} color="#6b7280">{c.name} {Math.round((c.value / wargaMeninggalData.length) * 100)}%</Tag>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="text-xl font-black text-gray-500">{avgMeninggalAge}</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500">Rata-rata usia</div>
                        </div>
                        <div className="rounded-xl p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="text-xl font-black text-gray-500">{wargaMeninggalData.filter(w => w.penyebab === "Sakit").length}</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500">Karena sakit</div>
                        </div>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600 mt-2 font-mono" style={{ fontSize: 9 }}>↗ klik untuk detail</p>
                </BentoCard>

                {/* MISKIN EKSTREM — col 5 */}
                <BentoCard id="miskin" color="#f59e0b" colSpan={5} onClick={setActivePanel}>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Miskin Ekstrem</div>
                            <div className="text-5xl font-black tracking-tighter text-amber-500 leading-none">{wargaMiskinData.length}</div>
                        </div>
                        <div className="text-center">
                            <div className="relative inline-block">
                                <Ring value={penerimaCount} total={wargaMiskinData.length} color="#10b981" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-black text-emerald-500">{penerimaRatio}%</span>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">penerima</div>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="rounded-xl p-2.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                            <div className="text-xl font-black text-emerald-500">{penerimaCount}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Terima bantuan</div>
                        </div>
                        <div className="relative rounded-xl p-2.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40">
                            <div className="text-xl font-black text-red-500">{belumBantuan}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Belum terima</div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <SparkBar value={penerimaCount} max={wargaMiskinData.length} color="#10b981" height={6} />
                        <div className="flex justify-between mt-1">
                            <span className="text-emerald-500 font-mono" style={{ fontSize: 9 }}>Penerima {penerimaCount}</span>
                            <span className="text-red-500 font-mono" style={{ fontSize: 9 }}>Belum {belumBantuan}</span>
                        </div>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600 mt-2 font-mono" style={{ fontSize: 9 }}>↗ klik untuk prioritas bantuan</p>
                </BentoCard>

                {/* LANSIA TERLANTAR — col 3 */}
                <BentoCard id="lansia" color="#8b5cf6" colSpan={3} onClick={setActivePanel}>
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Lansia Terlantar</div>
                    <div className="text-5xl font-black tracking-tighter text-violet-500 leading-none">{lansiaTerlantarData.length}</div>
                    <div className="mt-4 space-y-2">
                        {lansiaTerlantarData.map((w, i) => {
                            const c = w.bantuan === "Mandiri" ? "#10b981" : w.bantuan === "Perawatan intensif" ? "#ef4444" : "#f59e0b";
                            return (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: c }} />
                                    <span className="text-xs text-gray-600 dark:text-gray-400 flex-1 truncate">{w.nama}</span>
                                    <span className="text-xs text-gray-400">{w.umur}th</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-1.5 mt-3 flex-wrap">
                        {intensif > 0 && <Tag color="#ef4444">🚨 {intensif} Kritis</Tag>}
                        <Tag color="#10b981">{lansiaTerlantarData.filter(w => w.bantuan === "Mandiri").length} Mandiri</Tag>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600 mt-2 font-mono" style={{ fontSize: 9 }}>↗ klik untuk detail</p>
                </BentoCard>

                {/* ANAK PUTUS SEKOLAH — col 4 */}
                <BentoCard id="sekolah" color="#3b82f6" colSpan={4} onClick={setActivePanel}>
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Putus Sekolah</div>
                    <div className="text-5xl font-black tracking-tighter text-blue-500 leading-none">{anakTidakSekolahData.length}</div>
                    <div className="flex gap-1.5 flex-wrap mt-3 mb-3">
                        {byJenjang.map((j, i) => {
                            const clrs = ["#3b82f6", "#60a5fa", "#93c5fd", "#1d4ed8"];
                            return <Tag key={i} color={clrs[i % clrs.length]}>{j.name}: {j.value}</Tag>;
                        })}
                    </div>
                    <div className="rounded-xl p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30 flex items-center gap-3">
                        <div className="text-2xl font-black text-red-500">{ekonomiPct}%</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">disebabkan<br />faktor ekonomi</div>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600 mt-2 font-mono" style={{ fontSize: 9 }}>↗ klik untuk detail</p>
                </BentoCard>

                {/* PIE OVERVIEW — col 5 */}
                <div className="rounded-2xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4 relative overflow-hidden" style={{ gridColumn: "span 5" }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent" />
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Komposisi Isu Sosial</div>
                    <div className="flex items-center gap-3">
                        <div style={{ width: 120, height: 120, flexShrink: 0 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={grandPieData} innerRadius={36} outerRadius={54} paddingAngle={3} dataKey="value" stroke="none">
                                        {grandPieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                                    </Pie>
                                    <Tooltip
                                        content={({ active, payload }) =>
                                            active && payload?.length ? (
                                                <div className="rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 px-3 py-2 shadow-lg text-xs">
                                                    <div className="font-bold" style={{ color: payload[0].payload.color }}>{payload[0].name}</div>
                                                    <div className="text-gray-500">{payload[0].value} kasus</div>
                                                </div>
                                            ) : null
                                        }
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex-1 space-y-2">
                            {grandPieData.map((d, i) => (
                                <div key={i} className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: d.color }} />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">{d.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold font-mono" style={{ color: d.color }}>{d.value}</span>
                                        <span className="text-xs text-gray-400 dark:text-gray-600 w-8 text-right">{Math.round((d.value / totalAll) * 100)}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* QUICK ACTIONS — col 7 */}
                <div className="rounded-2xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4" style={{ gridColumn: "span 7" }}>
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Prioritas</div>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { icon: "⚡", text: `${belumBantuan} warga miskin belum terima bantuan`, color: "#f59e0b", action: "miskin" },
                            { icon: "🦠", text: `${menularCount} kasus menular perlu monitoring ketat`, color: "#ef4444", action: "sakit" },
                            { icon: "🚨", text: `${intensif} lansia perlu perawatan intensif`, color: "#8b5cf6", action: "lansia" },
                        ].map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActivePanel(item.action)}
                                onMouseEnter={() => setHoveredAction(i)}
                                onMouseLeave={() => setHoveredAction(null)}
                                className="flex items-start gap-2 p-3 rounded-xl text-left cursor-pointer transition-all border"
                                style={{
                                    background: hoveredAction === i ? item.color + "18" : item.color + "0d",
                                    borderColor: hoveredAction === i ? item.color + "77" : item.color + "33",
                                }}
                            >
                                <span className="text-sm shrink-0">{item.icon}</span>
                                <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</span>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            <DetailPanel card={activePanel} onClose={() => setActivePanel(null)} />
        </div>
    );
}