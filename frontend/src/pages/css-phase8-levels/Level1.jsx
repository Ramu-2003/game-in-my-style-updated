import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[1]}
      course="css"
      phase={8}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
