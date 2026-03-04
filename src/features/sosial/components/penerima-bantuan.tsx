import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

interface PenerimaBantuanGaugeProps {
    count: number;
    totalPenduduk?: number;
}

export default function PenerimaBantuan({ count, totalPenduduk = 18 }: PenerimaBantuanGaugeProps) {
    const percentage = ((count / totalPenduduk) * 100).toFixed(1);
    const percentNum = parseFloat(percentage);

    const data = [
        { name: 'Penerima', value: count },
        { name: 'Sisa', value: totalPenduduk - count },
    ];

    // Color based on coverage percentage
    const mainColor = percentNum >= 80 ? '#10b981' : percentNum >= 60 ? '#f59e0b' : '#ef4444';
    const glowColor = percentNum >= 80 ? '#d1fae5' : percentNum >= 60 ? '#fef3c7' : '#fee2e2';

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full'>
            {/* Header: Terdata + count label */}
            <div className="mb-4">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Terdata</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white leading-none">
                        {count}
                    </span>
                    <span className="text-lg font-semibold text-slate-500">Penerima Bantuan</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                    dari {totalPenduduk} warga <span className="font-semibold" style={{ color: mainColor }}>miskin ekstrem</span>
                </p>
            </div>

            {/* Semi-circle gauge */}
            <div className="relative flex-1 flex flex-col items-center justify-center mt-2">
                {/* Glow background */}
                <div
                    className="absolute rounded-full opacity-30 blur-2xl"
                    style={{
                        width: 160,
                        height: 80,
                        backgroundColor: glowColor,
                        bottom: 20,
                    }}
                />

                <div className="w-full h-[155px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <defs>
                                <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor={mainColor} stopOpacity={0.8} />
                                    <stop offset="100%" stopColor={mainColor} stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="100%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={105}
                                outerRadius={150}
                                paddingAngle={2}
                                dataKey="value"
                                stroke="none"
                                strokeWidth={0}
                            >
                                <Cell fill="url(#gaugeGradient)" />
                                <Cell fill="#f1f5f9" className="dark:fill-gray-700" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Center label */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-xs text-slate-400 font-medium mb-1">tingkat cakupan</p>
                    <p className="text-3xl font-extrabold leading-none" style={{ color: mainColor }}>
                        {percentage}%
                    </p>
                </div>
            </div>
        </div>
    )
}