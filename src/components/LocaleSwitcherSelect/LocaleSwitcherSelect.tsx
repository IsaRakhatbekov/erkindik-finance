"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/src/i18n/routing";
import styles from "./LocaleSwitcherSelect.module.scss";
import Image from "next/image";

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        { pathname }, // Убираем `params`, так как он не поддерживается
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className={styles.localeWrapper}>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className={styles.localeSelect}
      >
        {children}
      </select>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="#E5E3EA" />
      </svg>
    </div>
  );
}
