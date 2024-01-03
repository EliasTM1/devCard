export const Skill = (props) => {
	// console.log(props);
	const { currentSkill } = props;
	const { name, icon, color } = currentSkill;
	return (
			<span style={{ backgroundColor: color, borderRadius: "5px", margin: "5px", paddingInline: "5px"}}>
				{name} {icon}
			</span>
	);
};
