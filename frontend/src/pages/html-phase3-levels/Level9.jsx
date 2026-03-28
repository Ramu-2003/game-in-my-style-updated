import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[9]}
      course="html"
      phase={3}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
