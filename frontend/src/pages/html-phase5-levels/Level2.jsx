import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[2]}
      course="html"
      phase={5}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
