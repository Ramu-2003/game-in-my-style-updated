import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[5]}
      course="html"
      phase={6}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
