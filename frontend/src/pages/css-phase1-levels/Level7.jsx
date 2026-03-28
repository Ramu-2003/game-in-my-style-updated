import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[7]}
      course="css"
      phase={1}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
