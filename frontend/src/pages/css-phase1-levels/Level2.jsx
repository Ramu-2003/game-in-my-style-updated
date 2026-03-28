import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[2]}
      course="css"
      phase={1}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
