import React from "react";
import { motion } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const FormNavButton = ({ direction, onClick }) => {
	return (
		<motion.button
			style={{
				backgroundColor: "transparent",
				color: "red",
				height: 100,
				width: "auto",
			}}
			onClick={onClick}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
		>
			{direction === "back" ? (
				<IoChevronBack size="5rem" />
			) : (
				<IoChevronForward size="5rem" />
			)}
		</motion.button>
	);
};

export default FormNavButton;
