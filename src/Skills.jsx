import { Skill } from "./Skill";

export const Skills = (props) => {
	const {listOfTechnologies} = props;
	// console.log(listOfTechnologies, "THIS ARE MY PROPS");
	return (
		<div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", width: "80%", paddingInline: "1rem", paddingBottom: "1rem"}}>
			{listOfTechnologies.map((skill, index) => (
				<Skill currentSkill={skill} key={index}/>
			))}
		</div>
	);
};
