import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[10]}
      course="html"
      phase={3}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
