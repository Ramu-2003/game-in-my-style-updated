import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[5]}
      course="css"
      phase={4}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
