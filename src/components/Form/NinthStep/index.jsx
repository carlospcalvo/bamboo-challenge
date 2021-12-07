import React from "react";
import { FaRegSadTear, FaRegGrinBeam } from "react-icons/fa";
import { useFormContext } from "../../../context/FormContext";
import { getRebate } from "../../../data/rebates_per_zip";

const NinthStep = () => {
	const { formValues } = useFormContext();

	return (
		<div style={{ width: "100%", fontSize: "25px" }}>
			{formValues.isOwner ||
			formValues.notOwnerData.monthsToMove === "1-3" ? (
				<>
					<FaRegGrinBeam size="100" color="red" />
					<h3>
						Congratulations!!
						<br />
						You're conditionally approved for the Solar Energy
						Rebate!
					</h3>
					<h4>Based on our calculations, you're eligible for:</h4>
					<h2>
						{`$${getRebate(formValues.ZIP)}`} <br />
						{`(6.6kW System)`}
					</h2>
				</>
			) : (
				<>
					<FaRegSadTear size="100" color="red" />
					<h3>
						Unfortunately...
						<br />
						It looks like you're currently <br />
						not eligible for the Solar Government Rebate
					</h3>
					<p>
						We will still send you some information via email ,
						<br /> also you're welcome to get more information on
						our{" "}
						<a
							style={{ textDecoration: "none", color: "red" }}
							href="https://www.instagram.com/solarwizard_au/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
						!
					</p>
				</>
			)}
		</div>
	);
};

export default NinthStep;
