import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[1]}
      course="html"
      phase={1}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
