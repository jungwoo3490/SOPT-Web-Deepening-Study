export const FoodListItem = ({ foods }) => {
  return (
    <>
      {/* key는 일단 생략했슴,, */}
      {foods.map((food) => {
        const { name, price, description } = food;
        return (
          <>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
          </>
        );
      })}
    </>
  );
};
