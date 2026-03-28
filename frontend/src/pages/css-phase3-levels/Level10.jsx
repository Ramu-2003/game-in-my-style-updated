import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[10]}
      course="css"
      phase={3}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
