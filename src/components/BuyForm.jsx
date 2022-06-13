import React, { useState, useEffect, useCallback } from 'react'
import InputBase from './InputBase'

const BuyForm = ({ data, onPurchase }) => {

    const { name, rate } = data

    const initForm = { amount: 0, converted: 0 }

    const [exchange, setExchange] = useState(initForm)

    const [transaction, setTransaction] = useState([])

    //Quando mudar o name, ele recalcula no useEffect
    useEffect(() => {
        setExchange({
            ...exchange,
            converted: Number(exchange.amount / rate).toFixed(0)
        })
    }, [name])


    useEffect(() => {
        onPurchase(transaction)
    }, [transaction])

    const generateId = (prefix) => Math.random().toString().replace('0.', prefix)
}