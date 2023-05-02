export default function PersonCard(props) {
  const { person: { name, picture } } = props;

  return(
    <figure>
      <figcaption>
        <h2>{ `${name.first} ${name.last}` }</h2>
      </figcaption>
      <img src={ picture.large } alt='thumbnail' />
    </figure>
  )
}
