import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[2]}
      course="html"
      phase={6}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
