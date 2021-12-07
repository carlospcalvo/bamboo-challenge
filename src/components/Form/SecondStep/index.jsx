import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";

const SecondStep = ({ handleNext, jumpToStep }) => {
	const { formValues, updateFormValues } = useFormContext();

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			<BiBuildingHouse size="100" color="red" />
			{formValues.isOwner ? (
				<>
					<h3>Do you live in a house or an apartment?</h3>
					<div>
						<FormButton
							onClick={() => handleNext({ homeType: "House" })}
						>
							House
						</FormButton>
						<FormButton
							onClick={() =>
								handleNext({ homeType: "Apartment" })
							}
						>
							Apartment
						</FormButton>
					</div>
				</>
			) : (
				<>
					<h3>You are moving to your own home soon?</h3>
					<div>
						<FormButton
							onClick={() => {
								handleNext({
									...formValues,
									notOwnerData: {
										...formValues.notOwnerData,
										isMoving: true,
									},
								});
							}}
						>
							Yes
						</FormButton>
						<FormButton
							onClick={() => {
								updateFormValues({
									...formValues,
									notOwnerData: {
										...formValues.notOwnerData,
										isMoving: false,
									},
								});
								jumpToStep(4);
							}}
						>
							No
						</FormButton>
					</div>
				</>
			)}
		</div>
	);
};

export default SecondStep;
