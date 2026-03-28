import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[7]}
      course="css"
      phase={3}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
