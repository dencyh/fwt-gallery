import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./pagination.module.scss";
import clsx from "clsx";
import { ReactComponent as DoubleChevronRight } from "assets/icons/double-chevron.svg";
import { ReactComponent as ChevronRight } from "assets/icons/chevron.svg";
import { paginate } from "utils/paginate";

const Pagination = ({
  itemsCount,
  pageSize,
  initialPage,
  onPageChange,
  isLoading = false,
  visiblePages = 3
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(itemsCount / pageSize);
  const displayedCount = totalPages >= visiblePages ? visiblePages : totalPages;

  const [isFirst, setIsFirst] = useState(initialPage === 1);
  const [isLast, setIsLast] = useState(initialPage === totalPages);

  const populatePages = useCallback(() => {
    return Array(displayedCount)
      .fill(1)
      .map((_, index) => index + 1);
  }, [isLoading]);

  const [pages, setPages] = useState(populatePages);

  useEffect(() => {
    setPages(populatePages);
  }, [isLoading]);

  useEffect(() => {
    setPages(paginate({ pages, currentPage, totalPages, visiblePages }));
    setIsFirst(currentPage === 1);
    setIsLast(currentPage === totalPages);
    onPageChange(currentPage);
  }, [currentPage]);

  // If there is less than 2 pages - pagination isn't shown
  if (totalPages < 2) return null;

  const handleNavigate = (type) => {
    return function (page) {
      switch (type) {
        case "first":
          if (isFirst) return;
          setCurrentPage(1);
          break;
        case "previous":
          if (isFirst) return;
          setCurrentPage((prev) => prev - 1);
          break;
        case "next":
          if (isLast) return;
          setCurrentPage((prev) => prev + 1);
          break;
        case "last":
          if (isLast) return;
          setCurrentPage(totalPages);
          break;
        case "page":
          setCurrentPage(page);
          break;
      }
    };
  };

  return (
    <ul className={styles.container}>
      <li
        className={clsx(styles.item, {
          [styles.disabled]: isFirst || isLoading
        })}
      >
        <button
          className={styles.btn}
          aria-label="First page"
          onClick={handleNavigate("first")}
        >
          <DoubleChevronRight className={styles.chevron_flip} />
        </button>
      </li>
      <li
        className={clsx(styles.item, {
          [styles.disabled]: isFirst || isLoading
        })}
      >
        <button
          className={styles.btn}
          aria-label="Previous page"
          onClick={handleNavigate("previous")}
        >
          <ChevronRight className={styles.chevron_flip} />
        </button>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={clsx(styles.item, {
            [styles.disabled]: isLoading,
            [styles.active]: page === currentPage
          })}
        >
          <button
            className={styles.btn}
            onClick={() => handleNavigate("page")(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <li
        className={clsx(styles.item, {
          [styles.disabled]: isLast || isLoading
        })}
      >
        <button
          className={styles.btn}
          aria-label="Next page"
          onClick={handleNavigate("next")}
        >
          <ChevronRight />
        </button>
      </li>
      <li
        className={clsx(styles.item, {
          [styles.disabled]: isLast || isLoading
        })}
      >
        <button
          className={styles.btn}
          aria-label="Last page"
          onClick={handleNavigate("last")}
        >
          <DoubleChevronRight />
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  visiblePages: PropTypes.number
};

export default Pagination;
