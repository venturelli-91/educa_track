import { Card } from "flowbite-react";
import Image from "next/image";

interface CardProps {
	title: string;
	description: string;
	image: string;
}

const Cards = ({ title, description, image }: CardProps) => {
	return (
		<div className="p-4">
			<Card>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
				<Image
					src={image}
					alt={title}
					className="w-full h-48 object-cover"
				/>
			</Card>
		</div>
	);
};

export default Cards;
