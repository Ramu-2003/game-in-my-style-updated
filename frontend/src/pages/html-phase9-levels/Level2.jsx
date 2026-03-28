import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[2]}
      course="html"
      phase={9}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
