export function paginate({ pages, currentPage, visiblePages, totalPages }) {
  const temp = pages.slice(0);
  const mid = Math.floor(visiblePages / 2);
  // If we have more pages than visible limit
  if (currentPage > mid) {
    // If we have pages on both sides
    if (currentPage + mid <= totalPages) {
      temp[mid] = currentPage;
      // Change left half
      let term = 1;
      for (let i = mid - 1; i >= 0; i--) {
        temp[i] = currentPage - term;
        term++;
      }
      // Change right half
      term = 1;
      for (let i = mid + 1; i < temp.length; i++) {
        temp[i] = currentPage + term;
        term++;
      }
      return temp;
    } else {
      // If can't go right
      temp[temp.length - 1] = totalPages;
      let term = 1;
      for (let i = temp.length - 2; i >= 0; i--) {
        temp[i] = totalPages - term;
        term++;
      }
      return temp;
    }
  } else {
    // If can't go left
    return temp.map((_, index) => index + 1);
  }
}
