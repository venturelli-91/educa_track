import {
	Footer,
	FooterCopyright,
	FooterLink,
	FooterLinkGroup,
} from "flowbite-react";
import React from "react";

export default function AppFooter() {
	return (
		<Footer container>
			<div className="w-full text-center">
				<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
					<FooterCopyright
						href="#"
						by="Flowbite"
						year={2024}
					/>
					<FooterLinkGroup>
						<FooterLink href="#">About</FooterLink>
						<FooterLink href="#">Privacy Policy</FooterLink>
						<FooterLink href="#">Contact</FooterLink>
					</FooterLinkGroup>
				</div>
			</div>
		</Footer>
	);
}
