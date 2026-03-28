import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[1]}
      course="html"
      phase={6}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
