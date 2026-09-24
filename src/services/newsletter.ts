import { z } from "zod";
import { apiClient, normalizeApiError } from "./api";

export const newsletterSubscribeSchema = z.object({
  success: z.boolean(),
  message: z.string().nullish(),
  data: z.unknown().nullish(),
});

export const subscribeNewsletter = async (email: string): Promise<string> => {
  try {
    const { data } = await apiClient.post("/newsletter/subscribe", { email });
    const parsed = newsletterSubscribeSchema.parse(data);
    return parsed.message ?? "You're subscribed to DIDN updates.";
  } catch (error) {
    throw normalizeApiError(
      error,
      "Unable to subscribe right now. Please try again.",
    );
  }
};
