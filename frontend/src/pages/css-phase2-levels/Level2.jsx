import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[2]}
      course="css"
      phase={2}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
