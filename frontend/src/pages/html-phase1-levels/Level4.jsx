import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[4]}
      course="html"
      phase={1}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
