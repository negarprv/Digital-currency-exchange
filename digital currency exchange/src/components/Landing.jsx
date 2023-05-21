import { useEffect, useState } from "react";

//api
import { getCoin } from "../services/api";

//gif
import loadingGif from "../assets/loading.gif";

//component
import Coin from "./Coin";

//css
import styles from "../css/Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(Object.values(data.crypto));
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={searchHandler}
      ></input>
      <div className={styles.coinsContainer}>
        {coins.length === 0 && (
          <div className={styles.loading}>
            <img src={loadingGif} alt="loading" /> <p>Loading...</p>
          </div>
        )}

        {coins.length !== 0 && (
          <>
            <div className={styles.header}>
              <p>row</p>
              <p>Image</p>
              <p>symbol</p>

              <p>name</p>
              <p>max supply</p>
            </div>
            <div>
              {searchedCoins.map((coin, index) => (
                <Coin index={index} data={coin} key={coin.symbol} />
              ))}
            </div>
          </>
        )}
      </div>
      <p className={styles.copyright}>
        © 2023 Created by Negar. Powered by CoinLayer. All rights reserved.
      </p>
    </div>
  );
};

export default Landing;
