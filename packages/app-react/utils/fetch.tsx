import { Email } from "@iaf/api"

export const fetchEmail = async () => {
  const res = await fetch(`http://localhost:8080/email`)
  const { address } = (await res.json()) as Email
  return { address }
}
