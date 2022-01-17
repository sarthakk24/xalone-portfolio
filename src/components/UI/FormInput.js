const FormInput = (props) => {
  return (
    <input
      className={
        props.className +
        " rounded-lg p-2 m-2 bg-transparent border-[#F0A500] border-2 text-[#F0A500] placeholder:text-[#DADADA]"
      }
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default FormInput;
