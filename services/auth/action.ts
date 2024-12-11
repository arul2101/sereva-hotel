// import { loginSchema } from "@/validation/Login/LoginValidation";
// import { registerSchema } from "@/validation/Register/RegisterValidation";

export type ActionResults = {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

export async function handleLogin({ email, password }: { email: string, password: string }): Promise<ActionResults> {
  // const values = loginSchema.safeParse({
  //   email,
  //   password
  // });

  console.log({ email, password })

  // if (!values.success) {
  //   const errorDesc = values.error.issues.map((issue) => issue.message);

  //   return {
  //     errorTitle: 'Error Validation',
  //     errorDesc,
  //   }
  // }

  return {
    errorTitle: null,
    errorDesc: null,
  }
}

export type HandleRegisterParam = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export async function handleRegister({ fullName, email, password, repeatPassword }: HandleRegisterParam): Promise<ActionResults> {
  // const values = registerSchema.safeParse({ fullName, email, password, repeatPassword });

  console.log({ fullName, email, password, repeatPassword })

  // if (!values.success) {
  //   const errorDesc = values.error.issues.map((issue) => issue.message);

  //   return {
  //     errorTitle: 'Error Validation',
  //     errorDesc,
  //   }
  // }

  return {
    errorTitle: null,
    errorDesc: null,
  }
}