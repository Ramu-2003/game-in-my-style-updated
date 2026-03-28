import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[1]}
      course="css"
      phase={5}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
