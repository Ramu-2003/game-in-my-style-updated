import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[10]}
      course="html"
      phase={8}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
