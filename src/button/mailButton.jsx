import { FaEnvelope } from "react-icons/fa"; 

const MailButton = () => {
  const handleMailClick = () => {
    const recipient = "admin@asthramedtech.com";    
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
    
    window.open(mailtoLink, "_blank");
  };

  return (
    <button onClick={handleMailClick} className="p-2 bg-blue-500 text-white rounded">
      <FaEnvelope size={20} /> {/* Mail icon */}
    </button>
  );
};

export default MailButton;
