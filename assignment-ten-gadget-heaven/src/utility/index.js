import toast from "react-hot-toast";

// Stored Card get to item LocalStorage
const getToItem = () => {
    const getAllCard = localStorage.getItem('cardItem');
    if (getAllCard) {
        const getCardParse = JSON.parse(getAllCard);
        return getCardParse;
    } else {
        return [];
    }
};

// Add To Card  LocalStorage
const addToCard = (product) => {
    const addFavorite = getToItem();
    const filterItem = addFavorite.find(item => item.id === product.id);
    if (filterItem) {
        return toast.error('This is an error!');
    }
    addFavorite.push(product);
    const cardStr = JSON.stringify(addFavorite)
    const addCard = localStorage.setItem('cardItem', cardStr);
    toast.success('Successfully created!');
    // console.log(addCard);
};

// Remove Card LocalStorage
const removeCard = (id) => {
    const removeLocalData = getToItem();
    const remainingData = removeLocalData.filter(item => item.id != id);
    localStorage.setItem('cardItem', JSON.stringify(remainingData))
    toast.success('Successfully removed!');


};

// getToWishList 
const getToWishList = () => {
    const getItemWish = JSON.parse(localStorage.getItem('wishListItem'));
    return getItemWish ? getItemWish : [];

};

// addToWishList 
const addToWishList = (wishProduct) => {
    const allFavoriteWishList = getToWishList();
    const filterWishList = allFavoriteWishList.find(item => item.id === wishProduct.id)
    if (filterWishList) {
        return toast.error('This is an error!');
    }
    allFavoriteWishList.push(wishProduct);
    const wishProductStr = JSON.stringify(allFavoriteWishList);
    localStorage.setItem('wishListItem', wishProductStr);
    toast.success('Successfully created!');
};

// removeTo WishList 
const removeToWishList = () => {

}




export { addToCard, getToItem, addToWishList, getToWishList, removeCard };