import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[7]}
      course="html"
      phase={8}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
