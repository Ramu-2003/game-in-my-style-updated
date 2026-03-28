import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[1]}
      course="css"
      phase={9}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
