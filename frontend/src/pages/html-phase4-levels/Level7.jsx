import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[7]}
      course="html"
      phase={4}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
