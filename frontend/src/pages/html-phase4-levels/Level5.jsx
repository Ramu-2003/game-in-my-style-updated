import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[5]}
      course="html"
      phase={4}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
