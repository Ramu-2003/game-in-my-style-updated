import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[2]}
      course="css"
      phase={10}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
