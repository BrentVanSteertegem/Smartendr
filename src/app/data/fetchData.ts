export const fetchData = async () => {
    try {
        const data = await fetch('https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=43399')
        return await data.json()
    }
    catch (e) {
        throw new Error(e)
    }
}