import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel10Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[10]}
      course="html"
      phase={5}
      levelNumber={10}
    />
  );
};

export default HTMLLevel10Page;
