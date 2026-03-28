import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[7]}
      course="css"
      phase={2}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
