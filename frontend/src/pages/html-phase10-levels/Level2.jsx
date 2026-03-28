import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[2]}
      course="html"
      phase={10}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
