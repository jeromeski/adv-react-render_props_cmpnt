import React from 'react';
import { Button, Tooltip } from 'reactstrap';
import DeleteWarning from './DeleteWarning';

const DeleteButton1 = () => {
	return (
		<DeleteWarning>
			{({ warning, toggle }) => (
				<div>
					<Button id='my-button' color='primary'>
						Delete
					</Button>
					<Tooltip placement='right' isOpen={warning} target='my-button' toggle={toggle}>
						Are you sure you want to remove the item?
					</Tooltip>
				</div>
			)}
		</DeleteWarning>
	);
};

export default DeleteButton1;
