import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import "./styles.css";
import ThirdStep from "./ThridStep";
import FormNavButton from "../FormNavButton";
import { useFormContext } from "../../context/FormContext";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";
import SeventhStep from "./SeventhStep";
import EighthStep from "./EighthStep";
import NinthStep from "./NinthStep";

const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Form = ({ startForm }) => {
	const [activeStep, setActiveStep] = useState(0);
	const { formValues, updateFormValues } = useFormContext();
	const [visitedSteps, setVisitedSteps] = useState([0]);
	let allowedSteps = steps;

	//For progress bar
	// total steps
	// owner  = 9
	// moving = 9
	// moving, not soon = 7
	// not moving = 6

	let completion;
	if (
		!formValues.isOwner &&
		(!formValues.notOwnerData.isMoving ||
			formValues.notOwnerData.monthsToMove !== "1-3")
	) {
		if (!formValues.notOwnerData.isMoving) {
			//not moving
			allowedSteps = [1, 2, 4, 7, 8, 9];
			completion = (
				((allowedSteps.indexOf(activeStep) + 1) / allowedSteps.length) *
				100
			).toFixed(2);
		} else {
			//moving, not soon
			allowedSteps = [1, 2, 3, 4, 7, 8, 9];
			completion = (
				((allowedSteps.indexOf(activeStep) + 1) / allowedSteps.length) *
				100
			).toFixed(2);
		}
	} else {
		completion = ((activeStep / (steps.length - 1)) * 100).toFixed(2);
	}

	const getNextStep = () => {
		let nextStep;
		for (let index = visitedSteps.length; index > 0; index--) {
			if (
				visitedSteps[index] > activeStep &&
				allowedSteps.includes(visitedSteps[index])
			) {
				nextStep = visitedSteps[index];
			}
		}
		return nextStep;
	};

	const handleNextStep = (newValues) => {
		if (activeStep < steps.length - 1) {
			if (newValues) {
				updateFormValues({ ...formValues, ...newValues });
			}
			setVisitedSteps(
				Array.from(new Set([...visitedSteps, activeStep + 1])).sort(
					(a, b) => a - b
				)
			);
			setActiveStep(activeStep + 1);
		}
	};

	const handlePreviousStep = (newValues) => {
		if (activeStep > 0) {
			if (newValues) {
				updateFormValues({ ...formValues, ...newValues });
			}
			setActiveStep(activeStep - 1);
		}
	};

	const jumpToStep = (stepNumber) => {
		if (steps.includes(stepNumber)) {
			setVisitedSteps(
				Array.from(new Set([...visitedSteps, stepNumber])).sort(
					(a, b) => a - b
				)
			);
			setActiveStep(stepNumber);
		}
	};

	const HomeStep = () => (
		<div style={{ paddingTop: "10vh" }}>
			<h3>Find out if you're eligible for the solar rebate now</h3>
			<motion.button
				onClick={() => {
					startForm();
					handleNextStep();
				}}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
			>
				I want to know!
			</motion.button>
		</div>
	);

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <HomeStep />;
			case 1:
				return <FirstStep handleNext={handleNextStep} />;
			case 2:
				return (
					<SecondStep
						handleNext={handleNextStep}
						jumpToStep={jumpToStep}
					/>
				);
			case 3:
				return (
					<ThirdStep
						handleNext={handleNextStep}
						handleBack={handlePreviousStep}
					/>
				);
			case 4:
				return (
					<FourthStep
						handleNext={handleNextStep}
						jumpToStep={jumpToStep}
					/>
				);
			case 5:
				return <FifthStep handleNext={handleNextStep} />;
			case 6:
				return <SixthStep handleNext={handleNextStep} />;
			case 7:
				return <SeventhStep handleNext={handleNextStep} />;
			case 8:
				return <EighthStep handleNext={handleNextStep} />;
			case 9:
				return <NinthStep />;
			default:
				console.log("mmmm... weird");
				return null;
		}
	};

	return (
		<>
			<div style={{ display: "flex" }}>
				{activeStep !== 0 && (
					<FormNavButton
						direction="back"
						onClick={() => {
							if (activeStep > 1) {
								if (!visitedSteps.includes(activeStep - 1)) {
									let previousStep;
									for (const step of visitedSteps) {
										if (step < activeStep) {
											previousStep = step;
										}
									}
									if (
										previousStep &&
										allowedSteps.includes(previousStep)
									) {
										jumpToStep(previousStep);
									}
								} else {
									handlePreviousStep(formValues);
								}
							}
						}}
					/>
				)}
				<div style={{ minWidth: "50vw" }}>
					{getStepContent(activeStep)}
				</div>

				{activeStep !== 0 && (
					<FormNavButton
						direction="forward"
						onClick={() => {
							let nextStep = getNextStep();
							if (nextStep && visitedSteps.includes(nextStep)) {
								jumpToStep(nextStep);
							}
						}}
					/>
				)}
			</div>
			{activeStep !== 0 && (
				<div style={{ marginTop: "5vh", width: "30%" }}>
					<ProgressBar
						completed={completion}
						bgColor="red"
						isLabelVisible={false}
					/>
				</div>
			)}
		</>
	);
};

export default Form;
