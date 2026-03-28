import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[4]}
      course="html"
      phase={8}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
