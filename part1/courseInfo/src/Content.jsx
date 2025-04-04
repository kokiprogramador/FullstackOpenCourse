import Part from './Part.jsx'


const Content = () =>{
		const part1 = 'Fundamentals of React'
	  	const exercises1 = 10
	return(
		<div>
	 		<Part part={part1} content={exercises1}/>
	 		<Part part={part1} content={exercises1}/>
	 		<Part part={part1} content={exercises1}/>
	 	</div>
	)
}

export default Content;