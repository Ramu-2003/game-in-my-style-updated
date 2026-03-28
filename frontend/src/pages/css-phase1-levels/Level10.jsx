import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[10]}
      course="css"
      phase={1}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
