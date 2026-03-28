import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[7]}
      course="css"
      phase={6}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
