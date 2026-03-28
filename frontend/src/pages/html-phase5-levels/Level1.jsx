import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[1]}
      course="html"
      phase={5}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
