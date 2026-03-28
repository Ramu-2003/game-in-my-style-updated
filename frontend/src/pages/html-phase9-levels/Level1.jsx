import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[1]}
      course="html"
      phase={9}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
