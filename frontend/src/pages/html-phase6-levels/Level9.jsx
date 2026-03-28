import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[9]}
      course="html"
      phase={6}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
