export const getLightsById = (state: any, id: number) => state.lights[id];

export const getLights = (state: any) => {
    const lights = state.lightsPage.ids.map((item: any, index: number) => getLightsById(state, item));
    return lights;
}

export const getRenderedLightsLength = (state: any) => {
    return state.lightsPage.ids.length;
}