import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[10]}
      course="html"
      phase={4}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
