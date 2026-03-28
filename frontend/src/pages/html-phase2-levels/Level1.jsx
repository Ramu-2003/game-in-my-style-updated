import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[1]}
      course="html"
      phase={2}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
