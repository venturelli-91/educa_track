import React from "react";
import { Card } from "flowbite-react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
	{ name: "1º Ano", media: 6.8 },
	{ name: "2º Ano", media: 6.5 },
	{ name: "3º Ano", media: 7.5 },
];

export default function GradesBar() {
	return (
		<Card>
			<ResponsiveContainer
				width="100%"
				height="100%">
				<BarChart data={data}>
					<Bar dataKey="media" />
				</BarChart>
			</ResponsiveContainer>
		</Card>
	);
}
