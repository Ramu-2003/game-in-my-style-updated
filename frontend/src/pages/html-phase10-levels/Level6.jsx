import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[6]}
      course="html"
      phase={10}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
