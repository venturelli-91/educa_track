import React from "react";
import GenericCards from "@/tools/GenericCards";
import GradesBar from "@/tools/GradesBar";

const GradesPanel = () => {
	return (
		<>
			<div className="flex flex-col gap-4 w-[30%] p-4">
				<GenericCards
					title="Grades Panel"
					description="This is the grades panel">
					<GradesBar />
				</GenericCards>
			</div>
		</>
	);
};

export default GradesPanel;
