import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";

const EighthStep = ({ handleNext }) => {
	const { formValues, updateFormValues } = useFormContext();
	const [error, setError] = useState("");

	const handleKeyDown = (evt) => {
		let allowedKeys = [
			"Backspace",
			"ArrowLeft",
			"ArrowRight",
			"Delete",
			"Shift",
			"+",
			"-",
			"(",
			")",
		];
		if (!allowedKeys.includes(evt.key) && isNaN(parseInt(evt.key))) {
			evt.preventDefault();
		}
	};

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			<FaPhone size="100" color="red" />
			{formValues.isOwner ||
			formValues.notOwnerData.monthsToMove === "1-3" ? (
				<h3>
					Just in case we need to call you to confirm <br />
					your eligibility, what is your best contact number?
				</h3>
			) : (
				<h3>Great, thanks! What's your best contact number?</h3>
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
					}}
					type="tel"
					name="phone"
					id="phone"
					placeholder="Phone number"
					maxLength="10"
					defaultValue={formValues.phone}
					onKeyDown={handleKeyDown}
					onChange={(event) => {
						setError("");
						updateFormValues({
							...formValues,
							phone: parseInt(event.target.value),
						});
					}}
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
					onClick={() => {
						formValues.phone
							? handleNext()
							: setError("Wait, we need your phone first!");
					}}
				>
					Next
				</FormButton>
			</div>
		</div>
	);
};

export default EighthStep;
