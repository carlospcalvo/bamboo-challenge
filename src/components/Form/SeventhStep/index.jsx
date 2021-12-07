import React, { useState } from "react";
import { MdMail } from "react-icons/md";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";

const SeventhStep = ({ handleNext }) => {
	const { formValues, updateFormValues } = useFormContext();
	const [error, setError] = useState("");

	const validateEmail = (email) => {
		let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleBlur = (value) => {
		if (!validateEmail(value)) {
			setError("Please enter a valid email");
			return;
		}
		setError("");
		updateFormValues({
			...formValues,
			email: value,
		});
	};

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			<MdMail size="100" color="red" />
			{formValues.isOwner ||
			formValues.notOwnerData.monthsToMove === "1-3" ? (
				<h3>
					If you're eligible,
					<br />
					Where can we email you the eligibility confirmation?
					<br />
					<br />
					Enter below!
				</h3>
			) : (
				<h3>
					Ok, last 2 questions and we're done...
					<br />
					What's your email address? Enter below!
				</h3>
			)}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					/* width: "25%", */
				}}
			>
				<input
					style={{
						fontSize: 20,
						marginBottom: "20px",
						textAlign: "center",
						borderRadius: 50,
						border: "2px solid #251c61",
						width: "75%",
					}}
					type="email"
					name="email"
					id="email"
					autoComplete="false"
					defaultValue={formValues.email}
					onBlur={(event) => handleBlur(event.target.value)}
				/>
				{error && (
					<p
						style={{
							color: "red",
							fontWeight: "600",
							marginTop: 0,
							maxWidth: "75%",
						}}
					>
						{error}
					</p>
				)}
				<FormButton
					onClick={() =>
						formValues.email
							? handleNext()
							: setError("Wait, we need your email first!")
					}
				>
					Next
				</FormButton>
			</div>
		</div>
	);
};

export default SeventhStep;
