import React, { useState } from "react";
import { GiAustralia } from "react-icons/gi";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";
import data from "../../../data/zipcodes.json";

const FifthStep = ({ handleNext }) => {
	const { formValues, updateFormValues } = useFormContext();
	const [error, setError] = useState("");
	const handleChange = (value) => {
		setError("");
		if (value.length === 4) {
			if (parseInt(value) <= 6999 && parseInt(value) >= 5800) {
				let location = data.find(
					(location) => parseInt(location.zip) === parseInt(value)
				);
				if (location) {
					updateFormValues({ ...formValues, ZIP: parseInt(value) });
				} else {
					setError(
						"We couldn't find your postal code, maybe try again?"
					);
				}
			} else {
				setError("Your postal code should be between 5800 and 6999!");
			}
		}
	};

	const handleKeyDown = (evt) => {
		let allowedKeys = [
			"Backspace",
			"ArrowLeft",
			"ArrowRight",
			"Delete",
			"Shift",
		];
		if (!allowedKeys.includes(evt.key) && isNaN(parseInt(evt.key)))
			evt.preventDefault();
	};

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			<GiAustralia size="100" color="red" />
			<h3>
				The calculation of our rebate
				<br /> is based on the zone you live in <br />
				<br />
				Please enter your WA 4-digit post code.
			</h3>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
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
					name="ZIP"
					id="ZIP"
					placeholder="e.g. 6000"
					maxLength="4"
					minLength="4"
					min="6000"
					max="6997"
					defaultValue={formValues.ZIP}
					onKeyDown={handleKeyDown}
					onChange={(event) => handleChange(event.target.value)}
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
						formValues.ZIP
							? handleNext()
							: setError("Wait, we need your postal code first!");
					}}
				>
					Next
				</FormButton>
			</div>
		</div>
	);
};

export default FifthStep;
