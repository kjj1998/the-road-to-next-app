import { ZodError } from "zod";

export type ActionState = { message: string; payload?: FormData };

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  // if validation error with Zod, return first error message
  if (error instanceof ZodError) {
    return {
      message: error.errors[0].message,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // if another error instance, return error message
    // e.g. database error
    return {
      message: error.message,
      payload: formData,
    };
  } else {
    // if not an error instance but something else crashed
    // return generic error message
    return {
      message: "Something went wrong",
      payload: formData,
    };
  }
};
