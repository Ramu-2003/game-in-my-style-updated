import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[10]}
      course="css"
      phase={9}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
