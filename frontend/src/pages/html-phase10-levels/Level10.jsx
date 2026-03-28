import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[10]}
      course="html"
      phase={10}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
