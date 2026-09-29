"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./BooksGrid.module.scss";

interface Book {
  id: string;
  title: string;
  author: string;
  coverSrc: string;
  /** Zdjęcia stron/wnętrza książki pokazywane w karuzeli po najechaniu */
  pagesSrc: string[];
  /** Opcjonalny krótki opis/tekst pod okładką */
  description?: string;
}

const books: Book[] = [
  {
    id: "u-szymanskich",
    title: "U Szymańskich",
    author: "Adam Brykowicz",
    coverSrc: "/images/covers/u-szymanskich.png",
    pagesSrc: [
      "/images/pages/u-szymanskich-1.jpg",
      "/images/pages/u-szymanskich-2.jpg",
      "/images/pages/u-szymanskich-3.jpg",
    ],
    description: "Skład do druku",
  },
  {
    id: "dzwiekoterapia",
    title: "Dźwiękoterapia",
    author: "Monika Doroszkiewicz",
    coverSrc: "/images/covers/dzwiekoterapia.jpg",
    pagesSrc: [
      "/images/pages/dzwiekoterapia-1.jpg",
      "/images/pages/dzwiekoterapia-2.jpg",
      "/images/pages/dzwiekoterapia-3.jpg",
      "/images/pages/dzwiekoterapia-4.jpg",
    ],
    description: "Przygotowanie e-booka (PDF, EPUB, MOBI)",
  },
  {
    id: "w-oczach-rose",
    title: "W oczach Rose",
    author: "Tina J. Hyde",
    coverSrc: "/images/covers/w-oczach-rose.jpg",
    pagesSrc: [
      "/images/pages/w-oczach-rose-1.jpg",
      "/images/pages/w-oczach-rose-2.jpg",
      "/images/pages/w-oczach-rose-3.jpg",
    ],
    description: "Skład do druku, przygotowanie e-booka (PDF, EPUB, MOBI)",
  },
  {
    id: "zacznij-dzialac",
    title: "Zacznij działać",
    author: "Barbara Krawczyk",
    coverSrc: "/images/covers/zacznij-dzialac.jpg",
    pagesSrc: [
      "/images/pages/zacznij-dzialac-1.jpg",
      "/images/pages/zacznij-dzialac-2.jpg",
    ],
    description: "Skład do druku",
  },
  {
    id: "galopem-do-marzen",
    title: "Galopem do marzeń",
    author: "Agnieszka Łoza",
    coverSrc: "/images/covers/galopem-do-marzen.jpg",
    pagesSrc: [
      "/images/pages/galopem-do-marzen-1.jpg",
      "/images/pages/galopem-do-marzen-2.jpg",
    ],
    description: "Skład do druku",
  },
  {
    id: "tbd-1",
    title: "Projekt w przygotowaniu",
    author: "Autor TBD",
    coverSrc: "",
    pagesSrc: [],
    description: "TBD.",
  },
  {
    id: "tbd-2",
    title: "Projekt w przygotowaniu",
    author: "Autor TBD",
    coverSrc: "",
    pagesSrc: [],
    description: "TBD.",
  },
  {
    id: "tbd-3",
    title: "Projekt w przygotowaniu",
    author: "Autor TBD",
    coverSrc: "",
    pagesSrc: [],
    description: "TBD.",
  },
];;

const CAROUSEL_INTERVAL_MS = 1600;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (src: string) => `${basePath}${src}`;

function BookCard({ book }: { book: Book }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasMultiplePages = book.pagesSrc.length > 1;

  useEffect(() => {
    if (isHovered && hasMultiplePages) {
      intervalRef.current = setInterval(() => {
        setActivePage((prev) => (prev + 1) % book.pagesSrc.length);
      }, CAROUSEL_INTERVAL_MS);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, hasMultiplePages, book.pagesSrc.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setActivePage(0);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Kontener okładki i karuzeli */}
      <div
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {/* Okładka lub placeholder TBD */}
        {book.coverSrc ? (
          <Image
            src={withBasePath(book.coverSrc)}
            alt={`Okładka książki ${book.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className={`${styles.image} ${
              !isHovered ? styles["image--visible"] : ""
            }`}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-400 text-2xl tracking-wider select-none rounded-md">
            TBD
          </div>
        )}

        {/* Strony - karuzela */}
        {book.pagesSrc.map((src, index) => (
          <Image
            key={src}
            src={withBasePath(src)}
            alt={`Strona ${index + 1} książki ${book.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className={`${styles.image} ${
              isHovered && index === activePage ? styles["image--visible"] : ""
            }`}
          />
        ))}

        {/* Kropki karuzeli */}
        {isHovered && hasMultiplePages && (
          <div className={styles.dots}>
            {book.pagesSrc.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === activePage ? styles["dot--active"] : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Podpis i opis pod okładką */}
      <div className="flex flex-col text-left px-1">
        <p className="font-semibold text-gray-800 dark:text-gray-100">
          {book.title}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {book.author}
        </p>
        {book.description && (
          <p className="mt-1 text-xs text-gray-500 leading-snug">
            {book.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BooksGrid() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="mt-2 text-sm text-gray-500 font-mono">
          Przykładowe książki, w których tworzeniu brałam udział.
        </p>
      </div>

      <div
        className="
          max-w-6xl mx-auto
          grid gap-6
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}