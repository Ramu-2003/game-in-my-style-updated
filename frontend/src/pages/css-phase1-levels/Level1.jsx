import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[1]}
      course="css"
      phase={1}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
