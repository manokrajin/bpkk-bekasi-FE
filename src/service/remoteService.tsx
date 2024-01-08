let baseUrl = "http://127.0.0.1:3333";

export const getBerita = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/v1/post`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const homePageContent = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/v1/company-profile`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}
    
