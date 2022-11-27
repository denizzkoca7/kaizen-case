import React from "react";
import { Box, Button, Flex } from "rebass/styled-components";
import logo from "../images/logo.svg";
import profile from "../icons/profile-icon.svg";

const Header = () => {
  const [login, setLogin] = React.useState(false);
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="40px 15px 20px 15px"
    >
      <Box as="img" src={logo} alt="logo" sx={{ width: "100px" }} />
      <Flex>
        {!login && (
          <Button
            sx={{
              mr: "10px",
              padding: "10px 19.6px",
              borderRadius: "55px",
              border: "none",
              backgroundColor: "#f00",
              fontSize: "12px",
              fontWeight: "700",
            }}
            onClick={() => setLogin(true)}
          >
            Giriş Yap
          </Button>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: login ? "#f00" : "#000000",
            position: "relative",
          }}
        >
          <Box as="img" src={profile} alt="cart" sx={{ width: "20px" }} />
          {login && (
            <Flex
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "0",
                right: "0",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#fff",
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "green",
                }}
              />
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
