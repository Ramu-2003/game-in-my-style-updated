import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[7]}
      course="html"
      phase={2}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
