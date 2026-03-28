import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[7]}
      course="html"
      phase={5}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
