import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[3]}
      course="css"
      phase={5}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
