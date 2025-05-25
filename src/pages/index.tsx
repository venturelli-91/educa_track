import React from "react";
import GradesPanel from "@/components/GradesPanel";
import StudentsPanel from "@/components/StudentsPanel";
import NavigationBar from "@/tools/NavigationBar";
export default function Home() {
	return (
		<>
			<NavigationBar />
			<GradesPanel />
			<StudentsPanel />
		</>
	);
}
