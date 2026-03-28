import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[9]}
      course="html"
      phase={5}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
