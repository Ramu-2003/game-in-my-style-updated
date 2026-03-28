import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[7]}
      course="css"
      phase={9}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
