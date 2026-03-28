import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[1]}
      course="html"
      phase={3}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
