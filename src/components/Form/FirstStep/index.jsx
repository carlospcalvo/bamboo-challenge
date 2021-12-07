import React from "react";
import { GiHouse } from "react-icons/gi";
import FormButton from "../../FormButton";

const FirstStep = ({ handleNext }) => {
	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			<GiHouse size={100} color="red" />
			<h3>Are you the owner and occupier of your home?</h3>
			<div>
				<FormButton onClick={() => handleNext({ isOwner: true })}>
					Yes, I am
				</FormButton>
				<FormButton onClick={() => handleNext({ isOwner: false })}>
					No
				</FormButton>
			</div>
		</div>
	);
};

export default FirstStep;
