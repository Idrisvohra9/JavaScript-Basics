async function getRecipe() {
    const getIngredients = new Promise(function (resolve, reject) {
        console.log("Delivery guy Getting ingredients");
        const ingredients = ["dough", "meat", "cheese", "tomato", "topings", "mushroom"];
        setTimeout(function () {
            resolve(ingredients);
        }, 2000);
    });

    async function makePizza() {
        try {
            const ingredients = await getIngredients;
            console.log("Got ingredients", ingredients);
            console.log("Started making pizza..");
            await new Promise(() => {
                setTimeout(() => {
                    console.log("Pizza is ready!");
                }, 2000);
            })
        } catch (error) {
            console.log(error);
        }
    }
    makePizza();
}

getRecipe();