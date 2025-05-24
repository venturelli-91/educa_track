import React from "react";
import { Card } from "flowbite-react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
	{ name: "1º Ano", nota: 10 },
	{ name: "2º Ano", nota: 8 },
	{ name: "3º Ano", nota: 6 },
];

export default function GradesBar() {
	return (
		<Card>
			<ResponsiveContainer
				width="100%"
				height="100%">
				<BarChart data={data}>
					<Bar dataKey="nota" />
				</BarChart>
			</ResponsiveContainer>
		</Card>
	);
}
