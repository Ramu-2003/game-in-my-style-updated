import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[4]}
      course="css"
      phase={7}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
