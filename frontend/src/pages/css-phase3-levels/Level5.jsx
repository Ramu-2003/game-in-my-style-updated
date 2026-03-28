import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[5]}
      course="css"
      phase={3}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
