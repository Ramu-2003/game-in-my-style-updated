import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[2]}
      course="html"
      phase={2}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
