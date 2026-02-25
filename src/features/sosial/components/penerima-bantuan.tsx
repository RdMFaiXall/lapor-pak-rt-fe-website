import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

interface PenerimaBantuanGaugeProps {
    count: number;
    totalPenduduk?: number;
}

export default function PenerimaBantuan({ count, totalPenduduk = 18 }: PenerimaBantuanGaugeProps) {
    const percentage = ((count / totalPenduduk) * 100).toFixed(1);

    const data = [
        { name: 'Penerima', value: count },
        { name: 'Sisa', value: totalPenduduk - count },
    ];

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-2">Penerima Bantuan</h3>
            <div>
                <div className="text-3xl font-bold tracking-tight">
                    {count}
                </div>
                <p className="text-sm text-muted-foreground">
                    dari {totalPenduduk} warga <span className="text-[#f59e0b]">miskin ekstrem</span>
                </p>
            </div>

            <div className="relative flex-1 flex flex-col items-center justify-center">
                <div className="w-full h-32">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="100%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                            >
                                <Cell fill="#f59e0b" />
                                <Cell fill="#e5e7eb" className="dark:fill-gray-700" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="absolute top-[70%] left-1/2 -translate-x-1/2 text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{percentage}%</p>
                </div>
            </div>
        </div>
    )
}