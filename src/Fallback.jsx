import { useProgress } from '@react-three/drei';
import React from 'react';

const Fallback = () => {
	const { progress } = useProgress();
	return (
		<div className="back">
			<div className="spinner">
				<div className="bounce1"></div>
				<div className="bounce2"></div>
				<div className="bounce3"></div>
			</div>
			<div className="progress">{Math.round(progress, 1) + '%'}</div>
		</div>
	);
};

export default Fallback;
