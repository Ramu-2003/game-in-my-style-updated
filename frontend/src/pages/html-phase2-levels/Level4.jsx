import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[4]}
      course="html"
      phase={2}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
