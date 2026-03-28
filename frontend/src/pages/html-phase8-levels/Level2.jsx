import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[2]}
      course="html"
      phase={8}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
