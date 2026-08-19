"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./BooksGrid.module.scss";

interface Book {
  id: string;
  title: string;
  author: string;
  coverSrc: string;
  pagesSrc: string[];
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
  },
];

const CAROUSEL_INTERVAL_MS = 1600;

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
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {/* Okładka */}
      <Image
        src={book.coverSrc}
        alt={`Okładka książki ${book.title}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        className={`${styles.image} ${
          !isHovered ? styles["image--visible"] : ""
        }`}
      />

      {/* Strony - karuzela */}
      {book.pagesSrc.map((src, index) => (
        <Image
          key={src}
          src={src}
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

      {/* Podpis */}
      <div className={styles.caption}>
        <p className={styles.caption__title}>{book.title}</p>
        <p className={styles.caption__author}>{book.author}</p>
      </div>
    </div>
  );
}

export default function BooksGrid() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-9xl mx-auto text-center mb-10">
        <p className="mt-2 text-sm text-gray-500 font-mono">
          Przykładowe książki, w których tworzeniu brałam udział.
        </p>
        <p className="mt-2 text-sm text-gray-500 font-mono">
          Po najechaniu kursorem, wyświetla się wnętrze książek.
        </p>
      </div>

      <div
        className="
          max-w-12xl mx-auto
          grid gap-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
