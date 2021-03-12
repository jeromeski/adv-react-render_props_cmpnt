import React, { useState } from 'react';

const DeleteWarning = ({ children }) => {
	const [warning, setWarning] = useState(false);

	const toggle = () => {
		console.log('Im hovered');
		setWarning(!warning);
	};

	return children({ warning, toggle });
};

export default DeleteWarning;
