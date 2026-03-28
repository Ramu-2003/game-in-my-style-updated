import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[2]}
      course="html"
      phase={3}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
