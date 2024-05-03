"use client";

import Link from "next/link";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  // usePathname para ver la ruta actual en la que estamos
  const pathName = usePathname();

  /**
   * el prefetch carga la página antes de que entre al viewport
   * por defecto está en true, se puede deshabilitar
   */

  return (
    <Link
      // prefetch={true}
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};
