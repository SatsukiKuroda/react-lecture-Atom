import { PrimaryButton } from "./compnents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compnents/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
    </div>
  );
}
