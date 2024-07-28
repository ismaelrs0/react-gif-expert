export const getGifs = async (category) => {
    const apiKey = 'GODYgmCBEHj0F3WSOaLi73b0x3Zvlkd5'; // Asegúrate de que esta clave sea válida
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=10`;

    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const { data } = await resp.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;
    } catch (error) {
        console.error('Error fetching data from Giphy API:', error);
        throw error; // Lanza el error nuevamente para manejarlo en otro lugar si es necesario
    }
}
