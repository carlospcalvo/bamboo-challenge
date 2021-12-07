import React from "react";
import { GiAustralia } from "react-icons/gi";
import { useFormContext } from "../../../context/FormContext";
import FormButton from "../../FormButton";
import data from "../../../data/zipcodes.json";

const SixthStep = ({ handleNext }) => {
	const { formValues } = useFormContext();

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			<GiAustralia size="100" color="red" />
			<h3>
				{`Aha! You're around ${
					data.find(
						(location) =>
							parseInt(location.zip) === parseInt(formValues.ZIP)
					).delivery_centre
				}!`}
				<br />
				In the last 10 days, we have helped <br />
				qualify 23 people within 10 km of you!
			</h3>

			<FormButton onClick={() => handleNext()}>
				Check Eligibility
			</FormButton>
		</div>
	);
};

export default SixthStep;
