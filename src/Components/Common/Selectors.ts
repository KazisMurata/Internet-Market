export const getLightById = (state: any, id: number) => state.lights[id];

export const getLights = (state: any) => {
    const lights = state.lightsPage.ids.map((item: any, index: number) => getLightById(state, item));
    const applySearch = lights.filter((item: any) => item.name.includes(state.lightsPage.search));
    return applySearch;
};

export const getRenderedLightsLength = (state: any) => {
    return state.lightsPage.ids.length;
};

export const getTotalBasketCount = (state: any) => state.basket.length;

export const getTotalBasketPrice = (state: any) => {
   const getLights = state.basket.map((id:number) => getLightById(state, id));
   const getPrices = getLights.map((item: any) => item.price);
   const totalPrice = getPrices.reduce((firstPrice: number, secondPrice: number) => firstPrice + secondPrice, 0);

   return totalPrice;
};