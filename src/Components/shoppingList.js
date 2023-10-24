import { plantList } from '../Data/PlantList'
import '../Styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {

		const categories = plantList.reduce(
			(acc, plant) =>
				acc.includes(plant.category) ? acc : acc.concat(plant.category),
			[]
		)

		function addToCart(name, price) {
			const currentPlantSaved = cart.find((plant) => plant.name === name)
			if (currentPlantSaved) {
				const cartFilteredCurrentPlant = cart.filter(
					(plant) => plant.name !== name
				)
				updateCart([
					...cartFilteredCurrentPlant,
					{ name, price, amount: currentPlantSaved.amount + 1 }
				])
			} else {
				updateCart([...cart, { name, price, amount: 1 }])
			}
		}

		const [filteredPlants, setFilteredPlants] = useState(plantList);

			function filterPlants(category) {
			if (category === '') {
				setFilteredPlants(plantList);
			} else {
				const filtered = plantList.filter((plant) => plant.category === category);
				setFilteredPlants(filtered);
			}
			}


	return (
		<div className='lmj-shopping-list'>
			<Categories categories={categories} filterPlants={filterPlants} />
			<ul className="lmj-plant-list">
				{filteredPlants.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
					<PlantItem
						cover={cover}
						name={name}
						water={water}
						light={light}
						price={price}
					/>
					<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
