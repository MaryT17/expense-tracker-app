/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [//01180E,02311B,056136,079251,0AC26C,0EF387,3DF59F,6DF8B7,9EFACF,CEFDE7,E7FEF3
  { name: 'A', value: 80, color: '#01180E' },
  { name: 'B', value: 45, color: '#02311B' },
  { name: 'C', value: 25, color: '#056136' },
  { name: 'D', value: 25, color: '#079251' },
  { name: 'E', value: 25, color: '#0AC26C' },
  { name: 'F', value: 25, color: '#0EF387' },
  { name: 'G', value: 25, color: '#3DF59F' },
  { name: 'H', value: 25, color: '#6DF8B7' },
  { name: 'I', value: 25, color: '#9EFACF' },
  { name: 'J', value: 25, color: '#CEFDE7' },
  { name: 'K', value: 25, color: '#E7FEF3' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none"/>,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

export class PieChartNeedle extends PureComponent {
  render() {
    return (
      <PieChart key="x" width={400} height={500}>
        <Pie
          key="value"
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#d0d000')}
      </PieChart>
    );
  }
}
export default PieChartNeedle;