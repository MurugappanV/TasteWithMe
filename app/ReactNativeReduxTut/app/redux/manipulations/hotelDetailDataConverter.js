export const mapHotelDetails = (inData) => {
    let data = {
        hotel: {
            ...inData.Hotel,
            ...inData.Hotel.hotelImages,
            hotelImageUrls: inData.Hotel.hotelImages.hotelImageUrls.map((imageUrl) => {
                return imageUrl
            }),
            hotelDetail: {
                ...inData.Hotel.hotelDetail,
                openingTime: "",
                closingTime: ""
            }
        }
    };
    return data;
}