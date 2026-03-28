import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[5]}
      course="css"
      phase={2}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
