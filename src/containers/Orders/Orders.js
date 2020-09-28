import React, { useEffect } from 'react';
import axios from '../../axiosPizzas';
import Container from '../../components/UI/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersData, setTotalOrders } from '../../store/actions/ordersActions';
import './Orders.css';

const Orders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const totalOrders = useSelector(state => state.orders.totalOrders);

    let totalOrdersCopy = [];
    let oneOrderCopy = [];


    useEffect(() => {
        dispatch(fetchOrdersData());
        const getTotalOrders = async () => {
            for (let key in orders) {
                oneOrderCopy = [{ pizzas: [] }];
                let id = orders[key];
                let totalPrice = 0;
                for (let keyInner in id) {
                    const response = await axios.get('/pizzas/' + keyInner + '.json');
                    const data = response.data;

                    const dataPizza = {
                        name: data.name,
                        price: data.price,
                        quantity: id[keyInner],
                        totalPizzaPrice: data.price * id[keyInner],
                    };
                    oneOrderCopy[0].pizzas.push(dataPizza);
                    totalPrice = totalPrice + data.price * id[keyInner];
                };
                totalPrice += 150;
                oneOrderCopy.push({ totalPrice: totalPrice }, { id: key });
                totalOrdersCopy.push(oneOrderCopy);
            }
            dispatch(setTotalOrders(totalOrdersCopy));
        };
        getTotalOrders();
    }, [orders, dispatch]);

    const deleteOrder = async id =>{
        await axios.delete('/orders/' + id + '.json');
    };


    const data = (
        totalOrders.length !== 0 ?
            totalOrders.map(to => {
                for (let i = 0; i < to.length; i++) {
                    return <div className='pizza-order-box' key={to[to.length - 1].id}>
                        <div className='pizzas-order-infos'>
                            {to[i].pizzas.map(p => {
                                return <div className='pizza-order-info' key={p.name}>
                                    <h3 className='pizza-order-name'>{p.name}</h3>
                                    <p className='pizza-order-totalPizzaPrice'>{p.totalPizzaPrice} KGS</p>
                                    <p className='pizza-order-quantity'>X{p.quantity}</p>
                                </div>
                            })}
                        </div>
                        <div className='main-prices-box'>
                            <p className='delivery-price'>Delivery : 150 KGS</p>
                            <p className='pizza-order-totalPrice'>Total Price : {to[to.length - 2].totalPrice} KGS</p>
                            <button className='delete-order-button' onClick={() => deleteOrder(to[to.length - 1].id)}>Complete Order</button>
                        </div>

                    </div>
                }
            })
            : null
    );



    return (
        <div>
            <Container>
                {data}
            </Container>
        </div>
    );
};

export default Orders;