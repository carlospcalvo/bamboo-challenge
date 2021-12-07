import { motion } from "framer-motion";
import React from "react";

const FormButton = ({ children, onClick }) => {
	const buttonStyles = {
		minWidth: "10rem",
		padding: "1rem",
		backgroundColor: "red",
		color: "white",
		borderRadius: "30px",
		marginLeft: "1rem",
		marginRight: "1rem",
		borderShadow: "none",
		fontWeight: 600,
		fontSize: "25px",
		border: "none",
	};
	return (
		<motion.button
			style={buttonStyles}
			onClick={onClick}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
		>
			{children}
		</motion.button>
	);
};

export default FormButton;
