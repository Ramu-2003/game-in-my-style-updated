import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[6]}
      course="css"
      phase={1}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
