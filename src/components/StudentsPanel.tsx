import React from "react";
import GenericCards from "@/tools/GenericCards";
import StudentsGraphic from "@/tools/StudentsGraphic";

const StudentsPanel = () => {
	return (
		<>
			<div className="flex flex-col gap-4 w-[30%] p-4">
				<GenericCards
					title="Students Panel"
					description="This is the students panel">
					<StudentsGraphic />
				</GenericCards>
			</div>
		</>
	);
};

export default StudentsPanel;
