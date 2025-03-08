import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { verifyUser } from "../axios/userAxios";

const VerifyUserPage = () => {
  // Extract the info from URL
  const [params] = useSearchParams();

  const userEmail = params.get("email");
  const token = params.get("token");

  // Send Request to API for verifying the user
  const verifyUserEmail = async () => {
    console.log("userEmail", userEmail, token);

    const result = await verifyUser(userEmail, token);

    // Handle error
    if (result.status === "error") {
      return toast.error(result.message);
    }

    // Success
    toast.success(result.message);
  };

  useEffect(() => {
    if (userEmail && token) {
      verifyUserEmail();
    }
  }, []);

  return <h1>Hello, I will verify the user</h1>;
};

export default VerifyUserPage;
