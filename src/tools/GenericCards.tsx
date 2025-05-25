import { Card } from "flowbite-react";

interface GenericCardsProps {
	title: string;
	description: string;
	children?: React.ReactNode;
}

const GenericCards = ({ title, description, children }: GenericCardsProps) => {
	return (
		<Card>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
			{children}
		</Card>
	);
};

export default GenericCards;
