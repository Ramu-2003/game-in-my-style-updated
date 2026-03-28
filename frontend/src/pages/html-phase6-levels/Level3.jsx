import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[3]}
      course="html"
      phase={6}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
