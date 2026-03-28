import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[2]}
      course="css"
      phase={8}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
