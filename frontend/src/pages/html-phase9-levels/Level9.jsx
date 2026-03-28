import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[9]}
      course="html"
      phase={9}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
