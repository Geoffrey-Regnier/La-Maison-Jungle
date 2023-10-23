import Sun from '../Assets/sun.svg'
import Water from '../Assets/water.svg'


function handleClick(scaleValue, careType) {
	const typeSoin =
		careType === 'light' ? (
			"de lumière"
		) : (
			"d'arrosage"
		)

	if (scaleValue === 1) {
		alert(`Cette plante requiert peu ${typeSoin}`)
	} else if (scaleValue === 2) {
		alert(`Cette plante requiert modérément ${typeSoin}`)
	} else if (scaleValue === 3) {
		alert(`Cette plante requiert beaucoup ${typeSoin}`)
	}
}

function CareScale({ scaleValue, careType, onClick }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}


export default CareScale