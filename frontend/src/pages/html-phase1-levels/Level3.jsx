import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[3]}
      course="html"
      phase={1}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
