import { redirect } from "react-router";
import { deleteContact } from "../data";
import type { Route } from "./+types/destroy-contact";

// an action to delete
export async function action({ params }: Route.ActionArgs) {
  // validate
  await deleteContact(params.contactId);
  return redirect("/");
}