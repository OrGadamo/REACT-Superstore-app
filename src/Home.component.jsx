export default function Home(props) {
  return (
    <section>
      <h1>{props.storeName}</h1>
      <h3>{props.owner}</h3>
    </section>
  );
}
