import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[5]}
      course="html"
      phase={1}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
