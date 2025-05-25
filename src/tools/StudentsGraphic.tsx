import React from "react";
import { Card } from "flowbite-react";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
	{ name: "Feminino", percentual: 30 },
	{ name: "Masculino", percentual: 35.5 },
	{ name: "Não informado", percentual: 25 },
	{ name: "Prefiro não informar", percentual: 9.5 },
];

export default function StudentsGraphic() {
	return (
		<div className="w-[100%] h-[500px] p-4">
			<Card className="h-full">
				<h3 className="text-xl font-bold mb-4 flex justify-center">
					Distribuição por Gênero
				</h3>
				<div className="h-[400px]">
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
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</Card>
		</div>
	);
}
