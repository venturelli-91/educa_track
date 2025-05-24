import React from "react";
import { Card } from "flowbite-react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Feminino", percentual: 30 },
	{ name: "Masculino", percentual: 35.5 },
	{ name: "Não informado", percentual: 25 },
	{ name: "Prefiro não informar", percentual: 9.5 },
];

export default function StudentsGraphic() {
	return (
		<Card>
			<ResponsiveContainer
				width="100%"
				height="100%">
				<PieChart>
					<Pie
						data={data}
						dataKey="percentual"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={100}
						fill="#8884d8"
						label
					/>
				</PieChart>
			</ResponsiveContainer>
		</Card>
	);
}
