import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import CustomTooltip from '@/components/ui/custom-tooltip';

interface JenisBantuanProps {
    data: { name: string; value: number }[];
}

const COLORS = ['#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7'];

const JenisBantuan = ({ data }: JenisBantuanProps) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const chartData = data.map(item => ({
        ...item,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value);

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full mt-6'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jenis Bantuan</h3>

            <div className="h-[300px] w-full py-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 0,
                            left: -20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d1d1d1" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            domain={[0, 'dataMax + 1']}
                        />
                        <Tooltip
                            cursor={{ fill: '#f8fafc' }}
                            content={<CustomTooltip context={'Penerima'} />}
                        />
                        <Bar
                            dataKey="value"
                            radius={[8, 8, 0, 0]}
                            barSize={50}
                        >
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="percentage"
                                position="top"
                                formatter={(val: any) => `${val}%`}
                                style={{ fill: '#334155', fontSize: 14, fontWeight: '700' }}
                                offset={12}
                            />
                            <LabelList
                                dataKey="value"
                                position="inside"
                                style={{ fill: '#fff', fontSize: 13, fontWeight: '700' }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default JenisBantuan;