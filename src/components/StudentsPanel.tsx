import React from "react";
import GenericCards from "@/tools/GenericCards";
import StudentsGraphic from "@/tools/StudentsGraphic";

const StudentsPanel = () => {
	return (
		<>
			<div className="flex flex-row gap-4">
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
