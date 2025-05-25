import React from "react";
import { Card } from "flowbite-react";
import {
	BarChart,
	Bar,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

const data = [
	{ name: "1º Ano", media: 6.8 },
	{ name: "2º Ano", media: 6.5 },
	{ name: "3º Ano", media: 7.5 },
];

export default function GradesBar() {
	return (
		<div className="w-[100%] h-[500px] p-4">
			<Card className="h-full">
				<h3 className="text-xl font-bold mb-4 flex justify-center">
					Média semestral
				</h3>
				<div className="h-[400px]">
					<ResponsiveContainer
						width="100%"
						height="100%">
						<BarChart data={data}>
							<XAxis dataKey="name" />
							<YAxis domain={[0, 10]} />
							<Tooltip />
							<Bar
								dataKey="media"
								fill="#3B82F6"
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</Card>
		</div>
	);
}
