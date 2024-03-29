import axios from "axios";

const clientID = "LOfhmCf0mt15DeFZ-22fw3zvfuoTr833GKJHCO5BmZ8";
let searchCount = 1;

export const handleDownload = async (downloadhref, name) => {
    try {
        console.log('Download URL:', downloadhref);

        const response = await axios.get(downloadhref, {
            responseType: 'arraybuffer'
        });

        console.log('Response:', response);

        const image = new Blob([response.data], {type: "image/png"});
        const url = URL.createObjectURL(image);
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        link.remove();
    } catch (error) {
        console.error('Error downloading image:', error);
    }
};

export const searchImages = async (inputValue) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${searchCount}&per_page=6&client_id=${clientID}`);
        searchCount++
        return response.data.results;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

export const randomImages = async () => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?count=6&page=${searchCount}&client_id=${clientID}`)
        searchCount++;
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}
