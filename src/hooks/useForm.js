import { useState } from "react";

const useForm = (initialFromData) => {
  const [formData, setFormData] = useState(initialFromData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return {
    formData,
    setFormData,
    handleOnChange,
  };
};

export default useForm;
