import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[10]}
      course="html"
      phase={9}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
