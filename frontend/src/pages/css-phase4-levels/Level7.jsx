import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[7]}
      course="css"
      phase={4}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
