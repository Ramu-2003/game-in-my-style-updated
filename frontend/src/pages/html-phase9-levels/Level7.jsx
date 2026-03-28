import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[7]}
      course="html"
      phase={9}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
