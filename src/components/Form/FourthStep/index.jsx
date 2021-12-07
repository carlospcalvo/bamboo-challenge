import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";
import RadioButton from "../../RadioButton";

const FourthStep = ({ handleNext, jumpToStep }) => {
	const radioOptions = ["Living with family", "Renting", "Other"];
	const { formValues } = useFormContext();

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			{formValues.isOwner ||
			formValues.notOwnerData.monthsToMove === "1-3" ? (
				<>
					<FaPercent size="100" color="red" />
					<h3>
						Will this be the first time claiming the rebate? <br />
						Or have you already received one?
					</h3>
					<div>
						<FormButton
							onClick={() => handleNext({ firstRebate: true })}
						>
							Not yet!
						</FormButton>
						<FormButton
							onClick={() => handleNext({ firstRebate: false })}
						>
							Already saving!
						</FormButton>
					</div>
				</>
			) : (
				<>
					<BiBuildingHouse size="100" color="red" />
					<h3>How would you describe your residential status?</h3>
					<div>
						<RadioButton
							options={radioOptions}
							title="residentialStatus"
							handleNext={handleNext}
							selected={formValues.notOwnerData.residentialStatus}
							jumpToStep={jumpToStep}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default FourthStep;
