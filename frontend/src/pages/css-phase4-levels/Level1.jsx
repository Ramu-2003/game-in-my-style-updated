import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[1]}
      course="css"
      phase={4}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
