import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[6]}
      course="css"
      phase={8}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
