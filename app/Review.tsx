"use client"
import React, { useState } from "react";
import './styles/style.scss'
import people from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { ReadMore } from "./readMore";





const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, text } = people[index];
  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=people.length-1;



  return (
    <article className="review dark:text-white">
      <h4 className="author">{name}</h4>
      <p className="job ">{job}</p>
        <ReadMore id="read-more-text "  text={text} />

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>

      </div>
    </article>
  );
};

export default Review;
