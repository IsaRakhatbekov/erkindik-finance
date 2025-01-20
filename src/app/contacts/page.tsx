import { IContactsApiResponse } from "@/src/types/IContacts";
import { Map } from "./ui/Map/Map";
import { SectionContacts } from "./ui/SectionContacts/SectionContacts";
const Contacts = async () => {
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
      <SectionContacts />
      <Map googleMapsLink={contactsData.googleMapsLink} />
    </>
  );
};
export default Contacts;
