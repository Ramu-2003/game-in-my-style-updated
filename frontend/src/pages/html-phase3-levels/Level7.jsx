import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[7]}
      course="html"
      phase={3}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
