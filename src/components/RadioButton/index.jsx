import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import FormButton from "../FormButton";
import { useFormContext } from "../../context/FormContext";

const RadioButton = ({
	options,
	title,
	handleNext,
	wording,
	selected,
	jumpToStep,
}) => {
	const { formValues, updateFormValues } = useFormContext();
	const [value, setValue] = useState();
	const handleChange = (value) => {
		title === "residentialStatus"
			? updateFormValues({
					...formValues,
					notOwnerData: {
						...formValues.notOwnerData,
						residentialStatus: value,
					},
			  })
			: updateFormValues({ ...formValues, [`${title}`]: value });
		setValue(value);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					maxWidth: "40rem",
				}}
			>
				{options.map((option, i) => (
					<motion.div
						whileHover={{ scale: 1.2 }}
						key={i}
						style={{
							marginLeft: ".5rem",
							marginRight: ".5rem",
							marginTop: ".5rem",
						}}
					>
						<label
							className="radio__label"
							style={{ color: "red", marginLeft: ".5rem" }}
							htmlFor={i}
						>
							<input
								type="radio"
								className="radio__input"
								name={title}
								checked={
									selected
										? selected === option
										: value === option
								}
								id={i}
								value={option}
								onChange={(e) => {
									handleChange(e.target.value);
								}}
							/>
							<div className="radio__radio"></div>
							{option}
						</label>
					</motion.div>
				))}
			</div>
			{value && (
				<div style={{ marginTop: wording ? "0" : "3vh" }}>
					{wording && (
						<p style={{ maxWidth: "40rem" }}>{wording[value]}</p>
					)}
					<FormButton
						onClick={() => {
							if (title === "residentialStatus") {
								updateFormValues({
									...formValues,
									notOwnerData: {
										...formValues.notOwnerData,
										residentialStatus: value,
									},
								});
								jumpToStep(7);
							} else {
								handleNext({ [`${title}`]: value });
							}
						}}
					>
						Next
					</FormButton>
				</div>
			)}
		</div>
	);
};

export default RadioButton;
