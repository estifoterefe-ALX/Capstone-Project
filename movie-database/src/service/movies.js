import landingApi from "./apis/landingApi";

export const nowPlayingMoviesService = async () => {
    try {
        const response = await landingApi.get("/movie/now_playing",{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const popularMoviesService = async () => {
    try {
        const response = await landingApi.get("/movie/popular",{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const topRatedMoviesService = async () => {
    try {
        const response = await landingApi.get("/movie/top_rated",{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const upComingMoviesService = async () => {
    try {
        const response = await landingApi.get("/movie/upcoming",{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const movieDetailService = async (id) => {
    try {
        const response = await landingApi.get(`/movie/${id}`,{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const movieRecommendationsService = async (id) => {
    try {
        const response = await landingApi.get(`/movie/${id}/recommendations`,{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const moviePeopleService = async (id) => {
    try {
        const response = await landingApi.get(`/movie/${id}/credits`,{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const movieVideoService = async (id) => {
    try {
        const response = await landingApi.get(`/movie/${id}/videos`,{
            params:{
                language:"en-US"
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}