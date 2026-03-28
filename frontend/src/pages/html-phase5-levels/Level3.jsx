import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[3]}
      course="html"
      phase={5}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
