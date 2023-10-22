import React from 'react';
import '../Styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`representation ${name} `} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem;
