import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[10]}
      course="css"
      phase={6}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
