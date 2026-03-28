import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[2]}
      course="css"
      phase={4}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
