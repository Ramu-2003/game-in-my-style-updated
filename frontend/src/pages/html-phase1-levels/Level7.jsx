import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[7]}
      course="html"
      phase={1}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
