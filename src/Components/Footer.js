import { useState } from 'react'
import '../Styles/Footer.css' 


function Footer() {
	const [inputValue, setInputValue] = useState('')
	const isInputError = !inputValue.includes('@')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<textarea
  				className='lmj-footer-elem'
  				placeholder='Laissez-nous votre mail' 
  				value={inputValue}
  				onChange={(e) => setInputValue(e.target.value)}
  				onBlur={() => isInputError && alert('L\'email doit contenir un @')}
			/>
				<button className='lmj-footer-elem'onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
		</footer>
	)
}

export default Footer