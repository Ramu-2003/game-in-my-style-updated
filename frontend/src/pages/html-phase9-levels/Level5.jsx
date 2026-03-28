import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[5]}
      course="html"
      phase={9}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
