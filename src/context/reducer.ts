import { Income } from "@/app/Interfaces/Income";
import { state } from "@/app/Interfaces/state";
import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: "expense",
    initialState: {
        income: [
            
        ],
        expenses: [
            {
                id: 1,
                name: "Obligatory Charge",
                subtotal: 0,
                color: "#f21d1d",
                items : []
            }
        ],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push({...state.expenses, ...action.payload})
        },
        changecolorExpense: (state, action) => {
            state.expenses = state.expenses.map((expense) => {
                if (expense.id === action.payload.id) {
                    expense.color = action.payload.color
                    return expense
                }
                return expense
            })
            
        },
        editExpense: (state, action) => {
            state.expenses = state.expenses.map((expense) => {
                if (expense.id === action.payload.id) {
                    return action.payload
                }
                return expense
            })
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => expense.id !== action.payload)
        },
        clearExpense: (state) => {
            state.expenses = []
        },
        addItem: (state, action) => {
            const expense_id = action.payload.id_expense
            const new_item : state["expenses"][0]["items"][0] = action.payload.item

            state.expenses = state.expenses.map((expense ) => {
                if (expense.id === expense_id) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
                    expense.items.push(new_item)
                    expense.subtotal += new_item.price
                }
                return expense
            })
            return state
        },
    addIncome: (state, action) => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
        state.income.push(action.payload)

        return state
    },
    deleteIncome: (state, action) => {
        state.income = state.income.filter((income : Income) => income.id !== action.payload)
    },
    editIncome: (state, action) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.income = state.income.map((income : Income) => {
            if (income.id === action.payload.id) {
                return action.payload
            }
            return income
        })
    }
    }
});



export default Slice