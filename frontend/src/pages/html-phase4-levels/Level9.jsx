import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[9]}
      course="html"
      phase={4}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
