import { plantList } from '../Data/PlantList'
import '../Styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li>
						<PlantItem {...plant} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList