import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[9]}
      course="html"
      phase={8}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
