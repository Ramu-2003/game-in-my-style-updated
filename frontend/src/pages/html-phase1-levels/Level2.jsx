import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[2]}
      course="html"
      phase={1}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
