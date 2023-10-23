
import '../Styles/PlantItem.css';
import CareScale from './CareScale';





function PlantItem({ cover, name, water, light }) {
	return (
		<li className='lmj-plant-item'>
    		<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
    		{name}
			<div className='test'>
			<CareScale careType='water' scaleValue={water}/>
        	<CareScale careType='light' scaleValue={light}/>
			</div>
		</li>
	)
}




export default PlantItem
