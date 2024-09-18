import React from "react";

const MyForm = ({ koko, onChange }) => {
  return (
    <div>
      <input type="text" name="name" value={koko.name} onChange={onChange} />
      <input type="email" name="email" value={koko.email} onChange={onChange} />
      <textarea name="message" value={koko.message} onChange={onChange} />{" "}
      {/* </form> */}
    </div>
  );
};

export default MyForm;
