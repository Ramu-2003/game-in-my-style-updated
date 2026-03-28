import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[1]}
      course="css"
      phase={3}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
