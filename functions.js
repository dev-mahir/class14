


/**
 * Send data to local storage
 * @param {*} key 
 * @param {*} value 
 */
function sendData(key,value){
    let arr = JSON.stringify(value);
    localStorage.setItem(key,arr);
};


function sendDataLs(key,value){
    let mem_arr = JSON.stringify(value);
    localStorage.setItem(key,mem_arr);
};



