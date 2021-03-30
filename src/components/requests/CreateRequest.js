import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CreateRequest = () => {
  const history = useHistory();
  if (!sessionStorage.getItem('token')) {
		history.push('/');
	}

	return <div>requests</div>;
};

export default CreateRequest;
