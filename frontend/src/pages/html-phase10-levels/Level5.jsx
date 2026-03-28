import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[5]}
      course="html"
      phase={10}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
