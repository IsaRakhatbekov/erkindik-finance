import styles from "./page.module.scss";
import { Map } from "./ui/Map/Map";
import { SectionContacts } from "./ui/SectionContacts/SectionContacts";
const Contacts = () => {
  return (
    <>
      <SectionContacts />
      <Map />
    </>
  );
};
export default Contacts;
