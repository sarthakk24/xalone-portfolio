import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="Section4"
      className="text-white p-20 flex flex-col justify-center items-center"
    >
      <div className="text-4xl underline underline-offset-2 text-[#F0A500] font-medium">
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
