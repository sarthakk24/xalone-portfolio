import FormInput from "../UI/ContactForm/FormInput";
import FormSubmit from "../UI/ContactForm/FormSubmit";
import FormTextArea from "../UI/ContactForm/FormTextArea";

const ContactForm = () => {
  return (
    <div className="bg-[#142121] grow w-[100%] lg:w-[80%] flex items-center flex-col justify-center mt-5 lg:mt-0">
      <div className="flex items-center flex-col">
        <div className="text-3xl mb-9 font-medium mt-5 lg:mt-0">
          Connect Here
        </div>
        <form
          className="contactForm grid grid-cols-2"
          name="xalone"
          method="POST"
          onSubmit="submit"
          netlify
        >
          <input type="hidden" name="form-name" value="xalone" />
          <FormInput type="text" placeholder="First Name" name="First Name" />
          <FormInput type="text" placeholder="Last Name" name="Last Name" />
          <FormInput
            type="email"
            placeholder="Email"
            className="col-span-2"
            name="Email"
          />
          <FormInput type="text" placeholder="Phone" name="Phone Number" />
          <input
            type="file"
            name="Attached Files"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 p-3"
          />
          <FormTextArea />
          <FormSubmit />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
