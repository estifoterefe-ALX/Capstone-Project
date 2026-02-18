import landingApi from "./apis/landingApi";

export const nowPlayingSeriesService = async (page) => {
    try {
        const response = await landingApi.get("/tv/airing_today",{
            params:{
                language:"en-US",
                page
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const popularSeriesService = async (page) => {
    try {
        const response = await landingApi.get("/tv/popular",{
            params:{
                language:"en-US",
                page
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const topRatedSeriesService = async (page) => {
    try {
        const response = await landingApi.get("/tv/top_rated",{
            params:{
                language:"en-US",
                page
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const upComingSeriesService = async (page) => {
    try {
        const response = await landingApi.get("/tv/on_the_air",{
            params:{
                language:"en-US",
                page
            }
        })
        return response?.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const seriesDetailService = async (id) => {
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
export const seriesRecommendationsService = async (id) => {
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
export const seriesPeopleService = async (id) => {
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
export const seriesSeasonService =async (id,sennum) => {
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
export const seriesSeasonEpsoideService =async (id,sennum,epnum) => {
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
export const seriesVideoService =async (id) => {
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
