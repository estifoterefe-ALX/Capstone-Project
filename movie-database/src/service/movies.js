import landingApi from "./apis/landingApi";

export const nowPlayingMovies = async () => {
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
export const popularMovies = async () => {
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
export const topRatedMovies = async () => {
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
export const upComingMovies = async () => {
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
export const movieDetail = async (id) => {
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
export const movieRecommendations = async (id) => {
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
export const moviePeople = async (id) => {
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