import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[3]}
      course="html"
      phase={10}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
