import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[9]}
      course="html"
      phase={2}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
