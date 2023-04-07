
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utilities/constants";
import { SearchBar } from "./";

const Navbar = () => (
   <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#0f0b0b', top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
         <img src={logo} alt="logo" height={65} width={100} sx={{ right: '100' }} />
      </Link>
      <SearchBar />
   </Stack>
);

export default Navbar;

