import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[3]}
      course="html"
      phase={3}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
