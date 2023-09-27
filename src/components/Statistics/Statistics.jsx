import React from "react";
import { useDonationContext } from "../../DonationContext";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const { totalDonation, donatedCards } = useDonationContext();

  const data = [
    { name: "Group A", value: totalDonation },
    { name: "Group B", value: donatedCards },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        <div className="flex items-center justify-center gap-4 ">
          <p> Total Donation:</p>
          <div className="h-2 w-[160px] bg-red-500 rounded"></div>
        </div>
        <div className="flex items-center justify-center gap-4 pb-[380px]">
          <p> Your Donation:</p>
          <div className="h-2 w-[160px] bg-green-500 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
