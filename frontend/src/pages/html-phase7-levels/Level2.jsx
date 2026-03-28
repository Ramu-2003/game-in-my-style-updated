import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel2Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[2]}
      course="html"
      phase={7}
      levelNumber={2}
    />
  );
};

export default HTMLLevel2Page;
