import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[6]}
      course="css"
      phase={10}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
