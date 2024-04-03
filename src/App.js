import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Typography } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import sc from "./bitcoin-logo.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ErrorIcon from "@mui/icons-material/Error";
import PaidIcon from '@mui/icons-material/Paid';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ffe4d5",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginLeft: theme.spacing(1),
  width: "40%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(9),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  // backgroundColor: "#f7efe9",
  width: theme.spacing(4), 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "60%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  const [value, setValue] = React.useState("1");

  return (
    <Box>
      <Box sx={{ flexBasis: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#ffd7ca",
            width: "100%",
            height: "9%",
            justifyContent: "center",
          }}
        >
          <div style={{ justifyContent: "space-evenly", display: "flex",alignItems:'center' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <WbSunnyOutlinedIcon sx={{color:'black',marginRight:10}}/>
            <Button
              variant="contained"
              startIcon={<AccountCircleIcon />}
              sx={{
                backgroundColor: "black",
                color: "white",
                marginLeft: 40,
                borderRadius: 50,
              }}
            >
              Sign in
            </Button>
          </div>
        </AppBar>
        <Box
          sx={{
            p: 2,
            height: 30,
            marginTop: "3.5%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            endIcon={<EmojiEventsIcon />}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 50,
              height: 30,
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            play Slots and Win!
          </Button>
          <Button
            variant="contained"
            endIcon={<PaidIcon />}
            sx={{
              backgroundColor: "red",
              color: "white",
              marginLeft: 1,
              borderRadius: 50,
              height: 30,
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            Win 8.88 BTC
          </Button>
          <Button
            variant="contained"
            endIcon={<PaidIcon />}
            sx={{
              backgroundColor: "green",
              color: "white",
              marginLeft: 1,
              borderRadius: 50,
              height: 30,
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            1000x BTC BONUS
          </Button>
        </Box>
        <Container
          maxWidth="sm"
          sx={{
            p: 1,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img src={sc} style={{ width: 90, height: 90 }} />
          <Box
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 2,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ marginLeft: 1, fontWeight: 600 }}
            >
              1NDyJ-obu1s
            </Typography>
            <Button
              variant=""
              startIcon={<AccountBalanceWalletIcon />}
              sx={{
                backgroundColor: "#f7efe9",
                color: "#fb9676",
                marginLeft: 1,
                borderRadius: 50,
                height: 30,
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              Base58 (P2PKH)
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 1,
              }}
            >
              <QrCodeIcon
                sx={{
                  width: 22,
                  height: 22,
                  marginLeft: "1rem",
                  backgroundColor: "#fb9676",
                  color: "white",
                  p: 0.5,
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 1,
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
                  {" "}
                  Bitcoin Address
                </Typography>
                <Typography sx={{ fontSize: 10 ,alignItems:'center',display:'flex'}}>
                  1NDyHGFBnbghbnjhggj13bvjiuy{" "}
                  <ContentCopyIcon style={{width:9,color:'grey',marginLeft:5}}/>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#ffd7ca",
            marginTop: 1,
            borderRadius: 2,
            p: 1,
          }}
        >
          <Typography sx={{ fontSize: 11, fontWeight: 600 }}>
            Bitcoin Balance
          </Typography>
          <Typography sx={{ fontSize: 10, fontWeight: 600 }}>
            0.43567543.8765
          </Typography>
        </Container>
       
      </Box>
      <Box sx={{ typography: "body1", marginTop: 3 }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabList aria-label="lab API tabs example">
              <Tab label="Wallet" value="1" />
              <Tab label="Chart" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box>
              <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                Summery
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 ,justifyContent:'space-evenly'}}>
              <Box sx={{ width: "27%",paddingRight:3,marginTop:1 }}>
                <Typography sx={{ fontSize: 10 ,display: "flex" }}>
                  This Address has transacted 1,191642 times on the blockchain.
                </Typography>
              </Box>
              <Box sx={{ width: "25%" ,marginLeft:3}}>
                <Typography sx={{ display: "flex" ,fontSize:10,alignItems:'center'}}>
                  Total Received
                  <ErrorIcon style={{ color: "grey", width: 10 }} />
                </Typography>
                <Typography sx={{ fontSize: 10,fontWeight:600 }}>1587654.765467 BTC</Typography>
              </Box>
              <Box sx={{ width: "25%" }}>
              <Typography sx={{ display: "flex" ,fontSize:10,alignItems:'center'}}>
                  Total Sent
                  <ErrorIcon style={{ color: "grey", width: 10 }} />
                </Typography>
                <Typography sx={{ fontSize: 10,fontWeight:600 }}>1587654.765467 BTC</Typography>
              </Box>
              <Box sx={{ width: "25%" }}>
              <Typography sx={{ display: "flex" ,fontSize:10,alignItems:'center'}}>
                  Total Volume
                  <ErrorIcon style={{ color: "grey", width: 10 }} />
                </Typography>
                <Typography sx={{ fontSize: 10,fontWeight:600 }}>1587654.765467 BTC</Typography>
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default App;
