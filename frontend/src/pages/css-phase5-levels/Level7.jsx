import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[7]}
      course="css"
      phase={5}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
