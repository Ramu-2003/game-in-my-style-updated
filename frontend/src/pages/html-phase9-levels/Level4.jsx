import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[4]}
      course="html"
      phase={9}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
