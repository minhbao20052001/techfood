document.addEventListener('DOMContentLoaded', (event) => {
    var object = {};
    var button_add_cart = Array.from(document.querySelectorAll('.button_add_cart'));
    button_add_cart.forEach((ele) => {
        // listen event add food
        ele.onclick = () => {
            var item_cart_list = document.querySelector('.item_cart_list'); 
            var button_add_cart_id = ele.getAttribute('id');
            var item_cart_list_check= item_cart_list.querySelectorAll('.container_cart_item');
            var item_cart_list_checkBool = false;
            // check food exist
            if(item_cart_list_check.length >= 1){
                Array.from(item_cart_list_check).forEach(ele => {
                    if(ele.getAttribute('id')===button_add_cart_id) {
                        alert('Món này đã thêm');
                        item_cart_list_checkBool = true;
                    }
                })
                if(item_cart_list_checkBool === true) return;
            }
            // add to Object
            var item_list_detail = document.getElementById(button_add_cart_id);
            object.id = button_add_cart_id;
            object.img = item_list_detail.querySelector('img').getAttribute('src');
            object.name = item_list_detail.querySelector('.item_name').textContent;
            object.price = item_list_detail.querySelector('.item_price > span').textContent;
            //add HTML node
            var elementCreate = `<div class="container_cart">
                                    <div class="container_cart_item" id="${object.id}">
                                        <img src="${object.img}" alt="">
                                        <div class="container_cart_info">
                                            <div class="cart_info_name">${object.name}</div>
                                            <div class="container_cart_info_sale">
                                                <div class="container_cart_info_quantity">
                                                    <button class="cart_info_button-">-</button>
                                                    <div class="cart_info_quantity">1</div>
                                                    <button class="cart_info_button_plus">+</button>
                                                </div>
                                                <div class="container_cart_info_price">${object.price}đ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
            var container_cart = document.createElement("div");
            item_cart_list.appendChild(container_cart);
            document.querySelector('.item_cart_list > div:last-child').innerHTML = elementCreate;
            var count_container_cart = document.querySelectorAll('.container_cart').length;
            document.querySelector('.your_cart > span').innerText = count_container_cart;
            //incre, decrea quantity event
            var quantityDecre = Array.from(document.querySelectorAll('.cart_info_button-'));
            var quantityincre = Array.from(document.querySelectorAll('.cart_info_button_plus'));
            quantityDecre.forEach(ele => {
                ele.onclick = () => {
                    var count = ele.parentNode.querySelector('.cart_info_quantity').textContent;
                    if(count == 1){}else{
                        count--;
                    }
                    ele.parentNode.parentNode.querySelector('.container_cart_info_price').innerText = Number(object.price)* Number(count);
                    ele.parentNode.querySelector('.cart_info_quantity').innerText = count;
                }
            })
            
            quantityincre.forEach(ele => {
                ele.onclick = () => {
                    var count = ele.parentNode.querySelector('.cart_info_quantity').textContent;
                    count++;
                    ele.parentNode.parentNode.querySelector('.container_cart_info_price').innerText = Number(object.price)* Number(count);
                    ele.parentNode.querySelector('.cart_info_quantity').innerText = count;
                }
            })

        }
    })
});