export interface IContactSubmission {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const submitContactForm = async (
  payload: IContactSubmission,
): Promise<IContactSubmission> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return payload;
};
