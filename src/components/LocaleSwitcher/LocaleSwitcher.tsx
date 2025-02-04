import { useLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import LocaleSwitcherSelect from "../LocaleSwitcherSelect/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
