import './App.css';
import React, {useState} from 'react';

function App() {
	const [counter, setCounter] = useState('')
	
	const handleClick = (e) => {
		setCounter(counter.concat(e.target.name));
	}
	const clear = () => {
		setCounter('');
	}
	const backspace = () => {
		setCounter(counter.slice(0, -1))
	}
	
	const calculate = () => {
		try {
			setCounter(eval(counter).toString());
		} catch (err) {
			setCounter('Error')
		}
	}


	
	return (
		<div className="calc">
			<header className="calc-header">
				<div className='calc-display'>
					<input className='calc-numberDisplay' type="text"  defaultValue={counter}/>
				</div>
				<div className='buttons'>
					<button className="btn ac bg-grey" onClick={clear} id='clear'> ac </button>
					<button className="btn plus-minus bg-grey" onClick={backspace} id='backspace'> c </button>
					<button className="btn percent bg-grey">%</button>
					<button className="btn division bg-orange" onClick={handleClick} name='/'>/</button>

					<button className="btn seven" onClick={handleClick} name='7'>7</button>
					<button className="btn eigth" onClick={handleClick} name='8'>8</button>
					<button className="btn nine" onClick={handleClick} name='9'>9</button>
					<button className="btn multiply bg-orange" onClick={handleClick} name='*'>x</button>

					<button className="btn four" onClick={handleClick} name='4'>4</button>
					<button className="btn five" onClick={handleClick} name='5'>5</button>
					<button className="btn six" onClick={handleClick} name='6'>6</button>
					<button className="btn minus bg-orange" onClick={handleClick} name='-'  >-</button>

					<button className="btn one" onClick={handleClick} name='1'>1</button>
					<button className="btn two" onClick={handleClick} name='2'>2</button>
					<button className="btn three" onClick={handleClick} name='3'>3</button>
					<button className="btn plus bg-orange"  onClick={handleClick} name='+' >+</button>

					<button className="btn zero" onClick={handleClick} name='0'>0</button>
					<button className="btn" onClick={handleClick} name='.'>.</button>
					<button className="btn" onClick={calculate} id='result'>=</button>
				</div>
			</header>
		</div>
	);
}

export default App;
