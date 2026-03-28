import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[5]}
      course="html"
      phase={5}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
