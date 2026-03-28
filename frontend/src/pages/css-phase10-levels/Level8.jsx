import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[8]}
      course="css"
      phase={10}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
