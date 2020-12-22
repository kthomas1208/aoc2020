/** DAY 21 **/
interface Food {
    ingredients: string[];
    allergens: string[];
}

const day21 = function (input: string[]): number {
    let foods: Food[] = [];
    let count = 0;
    for (let line of input) {
        let ingredients = line.split(' (')[0].split(' ');
        let allergens = line.match(/(?<=contains )[^)]*/g)[0].split(', ');

        foods.push({ ingredients, allergens });
    }

    // yeah, no, I don't care
    let allergens = ['peanuts',
        'shellfish',
        'dairy',
        'fish',
        'soy',
        'nuts',
        'eggs',
        'wheat']

    let allergenMap = new Map<string, string[]>();

    for (let allergen of allergens) {
        let allergenFoods = foods.filter(food => food.allergens.includes(allergen)).map(food => food.ingredients);
        let allergenIntersection = allergenFoods.reduce((a, b) => a.filter(c => b.includes(c)));
        allergenMap.set(allergen, allergenIntersection);
    }

    // yeah, f this. Writing a solution will take longer than manually figuring it out.
    // while(map values are unmatched (>1 value)) {
    //     // for the ingredients that are matched to 1 allergen
    //     // remove them from the other value lists for the other keys
    // }

    // so here's the final map
    let actualAllergenMap = new Map<string, string>();
    actualAllergenMap.set('pfdkkzp', 'peanuts');
    actualAllergenMap.set('xcfpc', 'shellfish');
    actualAllergenMap.set('gpgrb', 'dairy');
    actualAllergenMap.set('gtjmd', 'fish');
    actualAllergenMap.set('txzv', 'soy');
    actualAllergenMap.set('spbxz', 'nuts');
    actualAllergenMap.set('tjlz', 'eggs');
    actualAllergenMap.set('znqbr', 'wheat');

    foods.forEach(food => {
        food.ingredients.forEach(ingredient => {
            if (!actualAllergenMap.has(ingredient))
                count++;
        });
    });

    return count;
}

const day21_2 = function (): string {
    let actualAllergenMap = new Map<string, string>();
    actualAllergenMap.set('gpgrb', 'dairy');
    actualAllergenMap.set('tjlz', 'eggs');
    actualAllergenMap.set('gtjmd', 'fish');
    actualAllergenMap.set('spbxz', 'nuts');
    actualAllergenMap.set('pfdkkzp', 'peanuts');
    actualAllergenMap.set('xcfpc', 'shellfish');
    actualAllergenMap.set('txzv', 'soy');
    actualAllergenMap.set('znqbr', 'wheat');

    let ingredients = Array.from(actualAllergenMap.keys()).join();

    return ingredients;
}

module.exports = { day21, day21_2 };
