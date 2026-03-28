import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[10]}
      course="html"
      phase={1}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
