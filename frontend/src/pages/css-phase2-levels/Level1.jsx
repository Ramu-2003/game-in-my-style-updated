import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[1]}
      course="css"
      phase={2}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
