import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[5]}
      course="css"
      phase={5}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
