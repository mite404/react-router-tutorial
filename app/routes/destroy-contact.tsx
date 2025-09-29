import { redirect, type ActionFunctionArgs } from "react-router";
import { deleteContact } from "app/data";
import type { Route } from "../+types/root";

// an action to delete
export const action = async ({ params }: ActionFunctionArgs) => {
  // validate
  await deleteContact(params.contactId);
  return redirect("/");
}