import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[2]}
      course="css"
      phase={6}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
