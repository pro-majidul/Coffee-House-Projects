import { toast } from 'react-toastify';



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
      return toast.warning('Already added')
    } else {
        StoredItem.push(coffee);
        const items = JSON.stringify(StoredItem);
        localStorage.setItem('favorite', items)
        toast.success('Successfully Added!')
    }
   
}


export { setDataToLocalStorage ,getDataToLocalStorage} 