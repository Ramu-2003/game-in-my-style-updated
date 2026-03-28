import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[5]}
      course="html"
      phase={8}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
