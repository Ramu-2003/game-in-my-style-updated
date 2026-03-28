import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[3]}
      course="html"
      phase={8}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
