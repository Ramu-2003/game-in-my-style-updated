import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[10]}
      course="css"
      phase={4}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
