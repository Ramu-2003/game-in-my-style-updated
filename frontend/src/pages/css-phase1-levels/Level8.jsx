import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[8]}
      course="css"
      phase={1}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
