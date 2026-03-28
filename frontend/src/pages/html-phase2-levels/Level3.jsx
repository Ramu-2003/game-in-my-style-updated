import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[3]}
      course="html"
      phase={2}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
