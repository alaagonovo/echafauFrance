import Image from "next/image";
import React from "react";
import links from "../../../../data/Links";
import Link from "next/link";
import styles from "./footer.module.css";
function Footer() {
  return (
    <footer
      className={`bg-[#191919] pt-16 sm:pt-24 pb-12 text-white ${styles.footer_container}`}
    >
      <div className="w-[90%] mx-auto md:grid-cols-2 grid lg:grid-cols-3 gap-8">
        <div>
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="our logo"
              width={120}
              height={60}
              loading="lazy"
            />
          </Link>
          <p className="text-sm font-light mt-4 text-gray-300">
            Echafau, avec 18 ans d&apos;excellence en Europe, propose désormais
            à Paris des solutions d&apos;échafaudage 100% métalliques, alliant
            durabilité et sécurité. Grâce à une innovation constante, nous
            garantissons des structures fiables avec un taux d’accidents de 0%.
          </p>
        </div>
        <div>
          <h2 className="font-medium">Liens rapides</h2>
          <ul className="ms-4 mt-4 flex flex-col gap-1">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-sm font-light hover:underline hover:text-[var(--main-red)] duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Liens sociaux</h2>
          <ul className="ms-4 mt-4 flex flex-col gap-4">
            <li>
              <Link
                href="https://wa.me/2001212973305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light flex gap-2 items-center hover:underline"
              >
                <span>
                  <Image
                    src="/svgs/whatsapp.svg"
                    alt="whats app icon"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </span>
                WhatsApp
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-light flex gap-2 items-center hover:underline"
                href="mailto:your-email@example.com"
              >
                <span>
                  <Image
                    src="/svgs/emailIcon.svg"
                    alt="email icon"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </span>
                Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[92%] lg:w-[70%] border-white border-t-1 mt-8 mx-auto">
        <p className="text-sm font-light text-gray-300 px-4 pt-4 text-center">
          © 2025 Echafau
          <br />
          Fièrement conçu par
          <Link
            href="https://gonovo.tech/"
            className="text-base text-white font-medium ms-1 hover:underline"
          >
            GONOVO
          </Link>
          <br />
          Conditions générales | Politique de confidentialité
        </p>
      </div>
    </footer>
  );
}

export default Footer;
