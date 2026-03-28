import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[7]}
      course="css"
      phase={10}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
