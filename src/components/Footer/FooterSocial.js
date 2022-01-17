const FooterSocial = (props) => {
  const Icon = props.icon;
  return (
    <li>
      <a href={props.href} className="flex" target="_blank" rel="noreferrer">
        <span className="mr-5">
          <img src={Icon} className="h-7" alt={props.name} />
        </span>
        {props.name}
      </a>
    </li>
  );
};

export default FooterSocial;
