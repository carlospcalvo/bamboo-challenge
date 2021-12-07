import React, { useContext, useState } from "react";

export const FormContext = React.createContext([]);

const initialValues = {
	isOwner: undefined,
	notOwnerData: {
		isMoving: undefined,
		monthsToMove: undefined,
		residentialStatus: undefined,
	},
	homeType: undefined,
	AvgBillPerQ: undefined,
	firstRebate: undefined,
	ZIP: undefined,
	email: undefined,
	phone: undefined,
};

export const FormContextProvider = ({ children }) => {
	const [formValues, setFormValues] = useState(initialValues);

	const updateFormValues = (value) => setFormValues(value);

	const value = { formValues, updateFormValues };

	return (
		<FormContext.Provider value={value}>{children}</FormContext.Provider>
	);
};

export const useFormContext = () => {
	const context = useContext(FormContext);

	if (!context)
		throw new Error(
			"useFormContext must be used within FormContextProvider"
		);
	return context;
};
