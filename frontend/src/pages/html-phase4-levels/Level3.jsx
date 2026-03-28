import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[3]}
      course="html"
      phase={4}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
