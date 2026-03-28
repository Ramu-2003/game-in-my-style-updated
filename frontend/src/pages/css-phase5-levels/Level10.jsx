import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[10]}
      course="css"
      phase={5}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
