import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[10]}
      course="css"
      phase={2}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
