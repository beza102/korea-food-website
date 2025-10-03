
import Card from "./Card.jsx";
import Recipe from "./Recipe.jsx";

export default function Body() {
    const famouseDishes=[
        {
            name:"Bibimbap",
            image:"",
            description:"Mixed rice with vegetables, meat, and gochujang.",
            link:"#bibimbap"
        },
        {
            name:"Ramen",
            image:"",
            description:"Noodle soup with savory broth, toppings, and spices.",
            link: "#ramen"
        }
    ];

    const recipes={
        bibimbap:{
            title:"Bibimbap Recipe",
            ingredients: ["Rice", "Vegetables", "Egg", "Gochujang", "Beef"],
        steps: [
            "Cook the rice.",
            "Prepare vegetables and beef.",
            "Fry the egg.",
            "Assemble everything in a bowl with gochujang on top."
        ]

        },

         ramen: {
      title: "Ramen Recipe",
      ingredients: [
        "Instant ramen noodles (or fresh ramen noodles)",
        "Broth (chicken, beef, or miso)",
        "Soy sauce",
        "Egg",
        "Green onions",
        "Vegetables (optional)"
      ],
      steps: [
        "Boil the broth and season with soy sauce.",
        "Cook ramen noodles separately, then add to broth.",
        "Add toppings like soft-boiled egg, green onions, and vegetables.",
        "Serve hot in a bowl."
      ]
    }
  };

 return (
  <main>
    {/* Famous Dishes Section (Cards) */}
    <section>
      <h2>Famous Dishes</h2>
      <div className="card-container">
        {famouseDishes.map((dish, index) => (
          <Card
            key={index}
            name={dish.name}
            image={dish.image}
            description={dish.description}
            link={dish.link}
          />
        ))}
      </div>
    </section>

    {/* Recipes Section */}
    <section id="bibimbap">
      <Recipe
        title={recipes.bibimbap.title}
        ingredients={recipes.bibimbap.ingredients}
        steps={recipes.bibimbap.steps}
      />
    </section>

    <section id="ramen">
      <Recipe
        title={recipes.ramen.title}
        ingredients={recipes.ramen.ingredients}
        steps={recipes.ramen.steps}
      />
    </section>
  </main>
);
}