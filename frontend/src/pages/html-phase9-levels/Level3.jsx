import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel3Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[3]}
      course="html"
      phase={9}
      levelNumber={3}
    />
  );
};

export default HTMLLevel3Page;
