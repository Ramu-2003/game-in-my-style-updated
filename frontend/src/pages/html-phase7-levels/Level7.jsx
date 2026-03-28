import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[7]}
      course="html"
      phase={7}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
