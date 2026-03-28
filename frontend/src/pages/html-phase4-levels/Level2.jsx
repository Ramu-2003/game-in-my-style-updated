import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[2]}
      course="html"
      phase={4}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
