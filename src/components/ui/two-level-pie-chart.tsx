import { Pie, PieChart, Tooltip } from 'recharts';
import CustomTooltip from './custom-tooltip';

interface DataPC {
    name: string;
    value: number;
    [key: string]: string | number;
}

const DEFAULT_DATA_01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const DEFAULT_DATA_02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

// #endregion
export default function TwoLevelPieChart({
    isAnimationActive = true,
    data01 = DEFAULT_DATA_01,
    data02 = DEFAULT_DATA_02,
}: {
    isAnimationActive?: boolean;
    data01?: DataPC[];
    data02?: DataPC[];
}) {
    return (
        <PieChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
        >
            <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius="50%"
                fill="#8884d8"
                isAnimationActive={isAnimationActive}
            />
            <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#82ca9d"
                label
                isAnimationActive={isAnimationActive}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
        </PieChart>
    );
}