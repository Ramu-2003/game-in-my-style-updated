import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[5]}
      course="css"
      phase={6}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
