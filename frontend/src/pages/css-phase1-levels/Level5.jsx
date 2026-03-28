import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[5]}
      course="css"
      phase={1}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
