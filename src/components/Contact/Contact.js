import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="text-white p-20">
      <div>Contact Me</div>
      <div className="flex justify-around">
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
