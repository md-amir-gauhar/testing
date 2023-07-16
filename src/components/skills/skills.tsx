type SkillsProps = {
  skills: string[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <ul>
        {skills.map((skill, idx) => {
          return <li key={idx}>{skill}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
