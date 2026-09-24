import { z } from "zod";
import { apiClient, normalizeApiError } from "./api";

export interface IContactSubmission {
  full_name: string;
  phone_number: string;
  email: string;
  message: string;
}

export const contactEnvelopeSchema = z.object({
  success: z.boolean(),
  message: z.string().nullish(),
  data: z.unknown().nullish(),
});

export const submitContactForm = async (
  payload: IContactSubmission,
): Promise<string> => {
  try {
    const { data } = await apiClient.post("/contact", payload);
    const parsed = contactEnvelopeSchema.parse(data);
    return (
      parsed.message ??
      "Your message has been sent successfully. We'll get back to you soon."
    );
  } catch (error) {
    throw normalizeApiError(
      error,
      "We couldn't send your message right now. Please try again.",
    );
  }
};
