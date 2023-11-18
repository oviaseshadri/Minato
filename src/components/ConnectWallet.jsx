import React, { useEffect, useContext } from "react";
import { connect, disconnect } from "starknetkit";
import { ThemeContext } from "../context/WalletContext";

const ConnectWallet = () => {
  const { handleAddress, address } = useContext(ThemeContext);

  // const [address,setAddress] = useState("");
  console.log(address);

  useEffect(() => {
    const connectToStarknet = async () => {
      const connection = await connect({ modalMode: "neverAsk" });
      if (connection && connection.isConnected) {
        handleAddress(connection.selectedAddress);
      }
    };
    connectToStarknet();
  }, [handleAddress]);

  const handleConnectWallet = async () => {
    try {
      let connection = await connect();
      handleAddress(connection.selectedAddress);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleDisconnectWallet = async () => {
    console.log(disconnect);
    await disconnect();
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.buttonContainer}>
        {!address && (
          <button style={styles.button} onClick={handleConnectWallet}>
            Connect Wallet
          </button>
        )}

        {address && (
          <button style={styles.button} onClick={handleDisconnectWallet}>
            Disconnect
          </button>
        )}

        {/* {!address && (
              <button style={styles.button}>
              Register User
              </button>
          )} */}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex",
  },
  link: {
    marginRight: "10px",
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
  },
  button: {
    marginLeft: "10px",
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    border: "1px solid #333",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "#fff",
  },
};

export default ConnectWallet;
