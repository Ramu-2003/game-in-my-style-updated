import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[8]}
      course="html"
      phase={10}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
