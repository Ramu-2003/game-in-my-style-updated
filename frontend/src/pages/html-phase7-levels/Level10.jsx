import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[10]}
      course="html"
      phase={7}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
