import { ActionButton } from "./ActionButton";
export const NewsLetter = () => {
  const handleSubscribe = () => {
    alert("Thank you for Subscribing");
  };
  return (
    <div>
      <h2> Subscribe to NewsLetter</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  );
};
