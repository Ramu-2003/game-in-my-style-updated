import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[1]}
      course="css"
      phase={6}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
