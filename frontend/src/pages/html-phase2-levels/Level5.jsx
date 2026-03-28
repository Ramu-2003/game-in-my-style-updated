import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[5]}
      course="html"
      phase={2}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
