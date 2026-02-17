import landingApi from "./apis/landingApi";

export const nowPlayingSeries = async () => {
    try {
        const response = await landingApi.get("/tv/airing_today",{
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
export const popularSeries = async () => {
    try {
        const response = await landingApi.get("/tv/popular",{
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
export const topRatedSeries = async () => {
    try {
        const response = await landingApi.get("/tv/top_rated",{
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
export const upComingSeries = async () => {
    try {
        const response = await landingApi.get("/tv/on_the_air",{
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
export const seriesDetail = async (id) => {
    try {
        const response = await landingApi.get(`/tv/${id}`,{
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
export const seriesRecommendations = async (id) => {
    try {
        const response = await landingApi.get(`/tv/${id}/recommendations`,{
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
export const seriesPeople = async (id) => {
    try {
        const response = await landingApi.get(`/tv/${id}/credits`,{
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
export const seriesSeason =async (id,sennum) => {
    try {
        const response = await landingApi.get(`/tv/${id}/season/${sennum}`,{
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
export const seriesSeasonEpsoide =async (id,sennum,epnum) => {
    try {
        const response = await landingApi.get(`/tv/${id}/season/${sennum}/epsoide/${epnum}`,{
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
export const seriesVideo =async (id) => {
    try {
        const response = await landingApi.get(`/tv/${id}/videos`,{
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
