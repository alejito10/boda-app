import React, { useState } from "react";
import { HeaderWrapper } from "./HeaderStyles";
import {Navbar} from "../navbar/Navbar";
import MenuButton from "./MenuButton";

export function Header() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<HeaderWrapper>
			<Navbar open={open} />
			<MenuButton open={open} handleClick={handleClick} />
		</HeaderWrapper>
	);
}

