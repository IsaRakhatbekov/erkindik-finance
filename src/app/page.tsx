import { ServicesComponent } from "../components/ServicesComponent/ServicesComponent";
import { IContactsApiResponse } from "../types/IContacts";
import { Hero } from "../ui/Hero/Hero";
import { News } from "../ui/News/News";
import { Offers } from "../ui/Offers/Offers";
import { Partners } from "../ui/Partners/Partners";
import { Why } from "../ui/Why/Why";

export default async function Main() {
  let contactsData: IContactsApiResponse["data"] = {
    phone: "lorem ipsum",
    email: "lorem ipsum",
    address: "lorem ipsum",
    addressLink: "lorem ipsum",
    schedule: "lorem ipsum",
    googleMapsLink: "lorem ipsum"
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`);
    if (!res.ok) {
      throw new Error("Failed to fetch contacts");
    }

    const response: IContactsApiResponse = await res.json();
    contactsData = response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
  return (
    <>
      <Hero contactsData={contactsData} />
      <News />
      <Why />
      <ServicesComponent />
      <Offers />
      <Partners />
    </>
  );
}
