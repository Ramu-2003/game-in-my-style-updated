import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[5]}
      course="html"
      phase={3}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
