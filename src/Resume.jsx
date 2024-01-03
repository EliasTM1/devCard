export const Resume = (props) => {
	console.log(props);
	const { name, desc, imagePath } = props;
	return (
		<>
			<img className='avatar' src={imagePath} />
			<div style={{ textAlign: "left", margin: "1rem" }}>
				<h1>{name}</h1>
				<p>
					{desc}
				</p>
			</div>
		</>
	);
};
