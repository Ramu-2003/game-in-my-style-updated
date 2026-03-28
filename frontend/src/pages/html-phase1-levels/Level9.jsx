import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[9]}
      course="html"
      phase={1}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
