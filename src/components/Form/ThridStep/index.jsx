import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GiHandTruck } from "react-icons/gi";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";
import RadioButton from "../../RadioButton";

const ThirdStep = ({ handleNext }) => {
	const { formValues } = useFormContext();
	const radioOptions = [
		"100-500",
		"500-1000",
		"1000-2000",
		"2000+",
		`I don't know`,
	];

	const wording = {
		"100-500": "Great! The rebate will get you close to 0 then.",
		"500-1000": "Great, good that you're taking action now.",
		"1000-2000":
			"Ok, your bill is getting a bit up there. It's defintely time to address this!",
		"2000+":
			"Ouch! Makes sense why you'd be looking to lower your energy costs. It's defintely time to address this!",
		"I don't know": "No problem, we can skip this one.",
	};

	return (
		<div style={{ fontSize: "25px" }}>
			{formValues.isOwner ? (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<FaFileInvoiceDollar size={100} color="red" />
					<h3>What is your average energy bill per quarter?</h3>
					<RadioButton
						options={radioOptions}
						title="AvgBillPerQ"
						handleNext={handleNext}
						wording={wording}
						selected={formValues.AvgBillPerQ}
					/>
				</div>
			) : (
				<>
					<GiHandTruck size="100" color="red" />
					<h3>In how many months do you plan to move?</h3>
					<div>
						<FormButton
							onClick={() =>
								handleNext({
									notOwnerData: {
										...formValues.notOwnerData,
										monthsToMove: "1-3",
									},
								})
							}
						>
							1-3
						</FormButton>
						<FormButton
							onClick={() =>
								handleNext({
									notOwnerData: {
										...formValues.notOwnerData,
										monthsToMove: "3-6",
									},
								})
							}
						>
							3-6
						</FormButton>
						<FormButton
							onClick={() =>
								handleNext({
									notOwnerData: {
										...formValues.notOwnerData,
										monthsToMove: "6-12",
									},
								})
							}
						>
							6-12
						</FormButton>
					</div>
				</>
			)}
		</div>
	);
};

export default ThirdStep;
