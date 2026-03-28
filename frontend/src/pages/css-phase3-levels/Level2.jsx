import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[2]}
      course="css"
      phase={3}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
