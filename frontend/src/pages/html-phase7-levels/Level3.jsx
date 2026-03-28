import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[3]}
      course="html"
      phase={7}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
