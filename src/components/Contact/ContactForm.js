import FormInput from "../UI/ContactForm/FormInput";
import FormSubmit from "../UI/ContactForm/FormSubmit";
import FormTextArea from "../UI/ContactForm/FormTextArea";

const ContactForm = () => {
  return (
    <div className="bg-[#142121] grow min-w-[850px] flex items-center flex-col justify-center">
      <div className="flex items-center flex-col">
        <div className="text-3xl mb-9 font-medium">Get in Touch</div>
        <form className="grid grid-cols-2">
          <FormInput type="text" placeholder="First Name" />
          <FormInput type="text" placeholder="Last Name" />
          <FormInput type="email" placeholder="Email" className="col-span-2" />
          <FormInput type="number" placeholder="Phone" />
          <FormInput type="url" placeholder="Attach Files (URL)" />
          <FormTextArea />
          <FormSubmit />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
