import * as yup from "yup";

export const personSchemaLogIn = yup.object({
  password: yup.string().defined().min(8,'اسم حداقل باید 8 حرف باشد').required("این فیلد باید پر شود").trim(),
  email: yup.string().email("ورودی باید ساختار ایمیل باشد").required("این فیلد باید پر شود").trim(),
});

export const personSchemaRegister = yup.object({
  firstName: yup.string().defined().min(3,'اسم حداقل باید 3 حرف باشد').max(15,'اسم حداکثر باید 15 حرف باشد').required("این فیلد باید پر شود").trim(),
  lastName: yup.string().defined().max(20, "اسم حداکثر باید 20 حرف باشد").required("این فیلد باید پر شود").trim(),
  password: yup.string().defined().min(8).required("این فیلد باید پر شود").trim(),
  ConfirmPassword: yup.string().defined().min(8).required("این فیلد باید پر شود").trim(),
  email: yup.string().email("ورودی باید ساختار ایمیل باشد").required("این فیلد باید پر شود").trim(),
  desc: yup.string().optional().trim(),
});

export interface PersonLogIn extends yup.InferType<typeof personSchemaLogIn> {}
export interface PersonRegister extends yup.InferType<typeof personSchemaRegister> {}
