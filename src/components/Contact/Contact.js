import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="Section4"
      className="text-light p-20 flex flex-col justify-center items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
    >
      <div className="text-4xl underline underline-offset-2 text-main font-medium">
        Get in Touch
      </div>
      <div className="flex justify-around mt-12">
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default Contact;
