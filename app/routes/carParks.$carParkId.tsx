import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// existing imports

import { DUMMY_CAR_PARK } from "../data/index";

type Props = { params: { carParkId: string } };

export const loader = async ({ params }: Props) => {
  console.log({ params });
  //   const contact = await getContact(params.contactId);
  return json({ carPark: DUMMY_CAR_PARK });
};

export default function CarPark() {
  const { carPark } = useLoaderData<typeof loader>();

  return <div>{carPark.english.name}</div>;
}
