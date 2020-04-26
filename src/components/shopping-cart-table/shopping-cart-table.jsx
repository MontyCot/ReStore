import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './shopping-cart-table.css';
import {onIncrease, onDecrease, onDelete   } from "../../actions";

const ShoppingCartTable = () => {
    const state = useSelector(({order}) => ({
        cart: order.cart,
        total: order.total
    }))
    const dispatch = useDispatch()
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                  state.cart.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.count}</td>
                            <td>{item.total}</td>
                            <td>
                                <button className="btn btn-outline-danger btn-sm float-right" onClick={() => {dispatch(onDelete(item.id))}}>
                                    <i className="fa fa-trash-o"/>
                                </button>
                                <button className="btn btn-outline-success btn-sm float-right" onClick={() => {dispatch(onIncrease(item.id))}}>
                                    <i className="fa fa-plus-circle"/>
                                </button>
                                <button className="btn btn-outline-warning btn-sm float-right" onClick={() => {dispatch(onDecrease(item.id))}}>
                                    <i className="fa fa-minus-circle"/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className="total">
                Total: {state.total}
            </div>
        </div>
    );
};

export default ShoppingCartTable;
