import { ServicesComponent } from "@/src/components/ServicesComponent/ServicesComponent";
import styles from "./page.module.scss";
const Service = () => {
  return (
    <div className={styles.servicesPage}>
      <ServicesComponent />
    </div>
  );
};
export default Service;
