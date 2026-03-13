import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList, Label } from 'recharts';

interface JenisPenyakitProps {
    data: { name: string; value: number }[];
}

const COLORS = ['#e76f51', '#f4a261', '#e9c46a', '#2a9d8f', '#264653', '#6366f1', '#8b5cf6', '#a855f7'];

const JenisPenyakit = ({ data }: JenisPenyakitProps) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const chartData = data.map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value);

    const maxValue = Math.max(...chartData.map(d => d.value), 0);

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jenis Penyakit</h3>

            <div className="flex-1 w-full min-h-[350px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 60, top: 0, bottom: 25 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, maxValue]}
                            allowDecimals={false}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#94a3b8' }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                        >
                            <Label value="Jumlah Kasus" offset={-15} position="insideBottom" style={{ fill: '#64748b', fontWeight: 'bold', fontSize: 13 }} />
                        </XAxis>
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={110}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                content={(props: any) => {
                                    const { x, y, width, height, value } = props;
                                    if (value === undefined || value === null) return null;
                                    const displayValue = `${value} kasus (${chartData[props.index]?.percentage}%)`;
                                    
                                    // Semua text dibuat align left saja dalam bar (seperti permintaan)
                                    // Jika value sangat kecil sehingga text tidak muat di bar, kita lempar ke luar bar.
                                    const isSmallValue = value < maxValue * 0.15;
                                    
                                    return (
                                        <text
                                            x={isSmallValue ? x + width + 8 : x + 10}
                                            y={y + height / 2}
                                            fill={isSmallValue ? "#64748b" : "#fff"}
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
        </Card>
    );
};

export default JenisPenyakit;