import styles from "../css/Coin.module.css";

const Coin = (props) => {
  const { symbol, name, max_supply, icon_url } = props.data;
  return (
    <div className={styles.container}>
      <p>{props.index + 1}</p>
      <img src={icon_url} />
      <p>{symbol}</p>
      <p>{name}</p>
      <p>{max_supply.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
