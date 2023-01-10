import React from "react";
import PropTypes from "prop-types";
import styles from "./pagination.module.scss";
import clsx from "clsx";
import { ReactComponent as DoubleChevronRight } from "assets/icons/double-chevron.svg";
import { ReactComponent as ChevronRight } from "assets/icons/chevron.svg";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPageNavigation
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  // if (pageCount < 2) return null;
  const pages = Array(pageCount)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <ul className={styles.container}>
      <li
        className={clsx(
          styles.item,
          currentPage === pages[0] ? " disabled" : ""
        )}
        role="button"
        onClick={() => onPageNavigation("previous")}
      >
        <button className={styles.btn}>
          <DoubleChevronRight className={styles.chevron_flip} />
        </button>
      </li>
      <li
        className={clsx(
          styles.item,
          currentPage === pages[0] ? " disabled" : ""
        )}
        role="button"
        onClick={() => onPageNavigation("previous")}
      >
        <button className={styles.btn}>
          <ChevronRight className={styles.chevron_flip} />
        </button>
      </li>
      {pages.map((page) => (
        <li
          key={"page-" + page}
          className={clsx(styles.item)}
          role="button"
          onClick={() => onPageChange(page)}
        >
          <button
            className={clsx(styles.btn, page === currentPage && styles.active)}
          >
            {page}
          </button>
        </li>
      ))}
      <li
        className={clsx(
          styles.item,
          currentPage === pageCount ? " disabled" : ""
        )}
        role="button"
        onClick={() => onPageNavigation("next")}
      >
        <button className={styles.btn}>
          <ChevronRight />
        </button>
      </li>
      <li
        className={clsx(
          styles.item,
          currentPage === pageCount ? " disabled" : ""
        )}
        role="button"
        onClick={() => onPageNavigation("next")}
      >
        <button className={styles.btn}>
          <DoubleChevronRight />
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageNavigation: PropTypes.func.isRequired
};

export default Pagination;
