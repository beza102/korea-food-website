export default function Recipe({ title, ingredients, steps }) {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
