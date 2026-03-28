import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[2]}
      course="css"
      phase={5}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
