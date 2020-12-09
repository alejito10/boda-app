import styled from "styled-components";

export const NavbarWrapper = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: turquoise;
	position: fixed;
	top: 10vh;
	right: ${(props) => (props.open ? "0" : "-100%")};
	width: 100%;
	height: 90vh;
	transition: right 0.3s linear;
	font-size: 35px;
	margin-left: 20px;

	@media only screen and (min-width: 624px) {
		flex-direction: row;
		position: initial;
		height: auto;
		justify-content: center;
		background: #f2f2f2;
		width: 100%;
		left: 0;
		top: 0;
		position: fixed;
		margin-top: 0;
		padding: 0%;
	}

	a {
		padding: 0.5rem 0.8rem;
		color: grey;
		text-decoration: none;
		margin-left: 20px;
	}
`;
