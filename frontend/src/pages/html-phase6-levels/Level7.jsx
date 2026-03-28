import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[7]}
      course="html"
      phase={6}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
