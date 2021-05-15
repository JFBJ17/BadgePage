import React from "react";
import md5 from "md5";

type gravatar = { email: string, className: string};

const Gravatar: React.FC<gravatar> = (props) => {
    const urlEmail: string = props.email;
    const hash = md5(urlEmail);
    return (
        <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar" />
    );
};

export default Gravatar;
