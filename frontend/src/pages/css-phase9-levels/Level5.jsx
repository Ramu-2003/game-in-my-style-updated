import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[5]}
      course="css"
      phase={9}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
