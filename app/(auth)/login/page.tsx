import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sereva Hotel | Login"
};

export default function page() {
  return (
    <>
      <LoginForm />
    </>
  )
}
