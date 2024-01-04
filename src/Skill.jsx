export const Skill = (props) => {
	// console.log(props);
	const { currentSkill } = props;
	const { name, level, color } = currentSkill;
	return (
			<span style={{ backgroundColor: color, borderRadius: "5px", margin: "5px", paddingInline: "5px"}}>
				{name} {level === 'Expert' ? '💪' : level === 'Intermediate' ? '🌮' : '🥶' }
			</span>
	);
};
