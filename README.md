# things to cover  
- consume API
  - use debouncing
- pagination
- styling with basic sass
- html forms with best practices
- reacty stuff (dealing with state, useEffects, correct hierarchy)

# todo / features to add
- separate everything in app.js into components
  - also move styles from App.css
- style something
  - use flex box
    - centering things
    - having split layouts with fixed % widths
  - use breakpoints (media queries)
  - pagination
    - should be a component
      - props
        - currentPage
        - setCurrentPage
        - numPages
        - pagesToDisplay
      - should always display first page, current page, last page
      - should display `pagesToDisplay` number of pages with current page in the center (when possible)
  - 

## component list  
- currently existing in app.js
  - RunTable
  - Entry
- submit new time