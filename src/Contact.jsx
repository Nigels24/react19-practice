import { ActionButton } from "./ActionButton";
export const Contact = () => {
  const handleSendMessage = () => {
    alert("Sending Your Message");
  };
  return (
    <div>
      <h2>Contact Us</h2>
      <ActionButton text="Send Message" onClick={handleSendMessage} />
    </div>
  );
};
