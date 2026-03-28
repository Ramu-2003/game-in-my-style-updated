import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[5]}
      course="css"
      phase={10}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
