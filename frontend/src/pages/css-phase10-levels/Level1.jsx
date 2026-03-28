import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[1]}
      course="css"
      phase={10}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
