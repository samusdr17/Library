import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import Book from "../Item/book";
import "../Item/book.scss";
// import data from "../../assets/data/data.json";
import "./libraryTable.scss";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";
import iconBook from "../../assets/icons/library-book-pngrepo-com.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function LibraryTable() {

  const [library, setLibrary] = React.useState([]);
  const getLibrary = (s) => {
      s = s.target.value;
      setSearch({search: s});
      if(s === ''){
          setLibrary([]);
      } else {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${s}&maxResults=40&startIndex=0`)
      .then((response) => response.json())
      .then((data) => { console.log(data); return data; })
      .then((data) => {
        setLibrary( data.items );
      })
      .catch((error) => console.error(error));
  }};

  const classes = useStyles2();
  const classesSearch = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [state, setState] = React.useState();

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, library.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [search, setSearch] = React.useState({
    search: "",
    dataSearch: [],
  });
  function onSearch(e) {
    setSearch({ search: e.target.value, dataSearch: search.dataSearch });
    console.log("sdfsdf" + search.search);
    searchBook();
  }
//   const searchBook = () => {
//     for (const book of state) {
//       console.log(book);
//       // const searchArray = [];
//       if (book.volumeInfo.title.toLowerCase().includes(search.search)) {
//         setSearch({ dataSearch: search.dataSearch.concat(book) });
//       }
//     }
//   };
    const searchBook = () => {
        var searchVar = library.filter(book =>
            (book.volumeInfo.title.toLowerCase().includes(search.search))
        );
        setSearch({...search, dataSearch: searchVar})
    }
  React.useEffect(() => {
    setSearch({ dataSearch: library });
  }, []);

  return (
    <div>
      <header className="header">
        <div className="headerRow">
          <div className="headerLeft">
            <h1>LIBRARY</h1>
            <img src={iconBook} className="iconBook"></img>
          </div>
          <div className="headerRight">
            <div className={classesSearch.search}>
              <div className={classesSearch.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classesSearch.inputRoot,
                  input: classesSearch.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={search.search}
                onChange={getLibrary}
              />
            </div>
          </div>
        </div>
      </header>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="custom pagination table"
          className="marginTop"
        >
          <TableBody>
            {(rowsPerPage > 0
              ? library.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : library
            ).map((book, index) => (
              <TableRow>
                <TableCell component="span" align="center">
                  <Book
                    key={index}
                    image={book.volumeInfo.imageLinks?.thumbnail}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    authors={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}
                    publishedDate={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    pageCount={book.volumeInfo.pageCount}
                    previewLink={book.volumeInfo.previewLink}
                    averageRating={book.volumeInfo.averageRating}
                  ></Book>
                </TableCell>
                <TableCell>
                  <h4>Book Description: </h4>
                  {book.volumeInfo.description}
                </TableCell>
                <TableCell width={160}>
                  <h4>Year: </h4>
                  {book.volumeInfo.publishedDate}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
                colSpan={3}
                count={library.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
