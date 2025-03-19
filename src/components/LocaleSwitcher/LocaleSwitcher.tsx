"use client";

import { useState, useTransition } from "react";
import { useRouter, usePathname, Locale } from "@/src/i18n/routing";
import styles from "./LocaleSwitcher.module.scss";
import Image from "next/image";
import ruFlag from "@/public/flags/ru.svg";
import kyFlag from "@/public/flags/ky.svg";
import usFlag from "@/public/flags/en.svg";
import { useLocale } from "next-intl";

const localeFlagImages: Record<string, string> = {
  ru: ruFlag.src,
  ky: kyFlag.src,
  en: usFlag.src,
};

const localeLabels: Record<string, string> = {
  ru: "RU",
  ky: "KY",
  en: "EN",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(newLocale: Locale) {
    if (newLocale === locale) return;
    setIsOpen(false);

    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  }

  return (
    <div className={styles.localeWrapper}>
      <div
        className={styles.selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={localeFlagImages[locale]}
          alt={locale}
          width={30}
          height={30}
        />
        <span className={styles.label}>{localeLabels[locale]}</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdown}>
          {Object.keys(localeFlagImages).map((cur) => (
            <li key={cur} onClick={() => handleLocaleChange(cur as Locale)}>
              <Image
                src={localeFlagImages[cur]}
                alt={cur}
                width={30}
                height={30}
              />
              <span className={styles.label}>{localeLabels[cur]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
