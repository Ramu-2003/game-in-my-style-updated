import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[10]}
      course="html"
      phase={2}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
