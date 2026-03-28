import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[2]}
      course="css"
      phase={9}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
