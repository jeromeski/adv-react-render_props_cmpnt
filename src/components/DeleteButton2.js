import React from 'react';
import { Button, Tooltip } from 'reactstrap';
import DeleteWarning from './DeleteWarning';

const DeleteButton2 = () => {
	return (
		<DeleteWarning>
			{({ warning, toggle }) => (
				<div>
					<Button id='my-button' color='danger'>
						Remove
					</Button>
					<Tooltip placement='right' isOpen={warning} target='my-button' toggle={toggle}>
						This will delete this item. Are you sure you wanna proceed?
					</Tooltip>
				</div>
			)}
		</DeleteWarning>
	);
};

export default DeleteButton2;
