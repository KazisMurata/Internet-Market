import lights from './Lights';

export const fetchLights = async () => {
    return new Promise((resolve, reject) => {
        resolve(lights);
    })
}

export const loadMoreLights = async ({offset}:any) => {
    return new Promise((resolve, reject) => {
        resolve(lights);
    })
}

export const fetchLightById = async (id: any) => {
    return new Promise((resolve, reject) => {
        const light = lights.find((item) => item.id = id);
        resolve(light);
    })
}