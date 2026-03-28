import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[10]}
      course="html"
      phase={6}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
