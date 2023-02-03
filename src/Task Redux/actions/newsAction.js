import axios from "axios";


export const GET_LIST_NEWS = "GET_LIST_NEWS";

export const getListNews = () => {
    console.log('2. Masuk Action');
    return(dispatch) => {

        //loading
        dispatch({
            type : GET_LIST_NEWS,
            payload : {
                loading : true,
                data : false,
                filter : "",
                errorMessage : false
            }
        })

        //get API 
        axios({
            method: 'GET',
            url : 'https://newsapi.org/v2/everything?q=tesla&from=2023-01-03&sortBy=publishedAt&apiKey=ca0598bf76a64e138b5d742f83ed10ea',
            timeout: 120000
        })
            .then((response) => {
                console.log('3. berhasil dapet API', response.data.articles);
                //berhasil get API
                dispatch({
                    type : GET_LIST_NEWS,
                    payload : {
                        loading : false,
                        data : response.data.articles,
                        filter : false,
                        errorMessage : false
                    }
                })
            })
            .catch((error) => {
                console.log('3. gagal dapet API')
                //gagal get API
                dispatch({
                    type : GET_LIST_NEWS,
                    payload : {
                        loading : false,
                        data : false,
                        filter : false,
                        errorMessage : error.message
                    }
                })
            })
    }
}