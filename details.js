const getProducts = async()=>
    {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const {data}= await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(data);
        return data;
    }

    const displayProducts = async ()=>
    {
        const data = await getProducts();
        const images = data.images.map( (image) =>
            {
                return `<img src="${image}"/>`
            } ).join(' ');
            const result = `<div class="product">
                    <h2> ${data.title} </h2>
                    <p>${data.description}</p>
                    <p>${data.price}</p>
                </div> `;
                console.log(result);
            document.querySelector(".product").innerHTML = result;
            document.querySelector(".product-image").innerHTML=images;
    }

displayProducts();