import axios from "axios";

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
