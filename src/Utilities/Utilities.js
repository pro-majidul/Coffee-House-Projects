const getDataToLocalStorage = () => {
    const allData = localStorage.getItem('favorite')
    if (allData) {
        const data = JSON.parse(allData);
        return data;
    } else {
        return [];
    }
}

const setDataToLocalStorage = (coffee) => {
    const StoredItem = getDataToLocalStorage();
    const isExist = StoredItem.find( item => item.id === coffee.id);
    if (isExist) {
      return  alert('already added')
    } else {
        StoredItem.push(coffee);
        const items = JSON.stringify(StoredItem);
        localStorage.setItem('favorite', items)
    }
   
}


export { setDataToLocalStorage ,getDataToLocalStorage} 