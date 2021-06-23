getRandowMeal();

async function getRandowMeal()
{
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randowMeal = respData.meals[0];

    console.log(randowMeal);
     

}

function getMealById(id)
{

}

function getMealsBySearch(term)
{

}