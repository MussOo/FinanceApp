import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: "expense",
    initialState: {
        income: [
            {
                id: 1,
                name: "Salary",
                price : 200
            },
            {
                id: 2,
                name: "Bonus",
                price : 100
            }
        ],
        expenses: [
            {
                id: 1,
                name: "Rent",
                subtotal: 200,
                items : [
                    {
                        id: 1,
                        name: "Water",
                        price: 100
                    },
                    {
                        id: 2,
                        name: "Food",
                        price: 100
                    }
                ]
            }
        ],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push({...state.expenses, ...action.payload})
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
            const new_item = action.payload.item
            state.expenses = state.expenses.map((expense) => {
                if (expense.id === expense_id) {
                    expense.items.push(new_item)
                }
                return expense
            })
            return state
        },
    addIncome: (state, action) => {
        state.income.push(action.payload)

        return state
    },
    deleteIncome: (state, action) => {
        state.income = state.income.filter((income) => income.id !== action.payload)
    },
    editIncome: (state, action) => {
        state.income = state.income.map((income) => {
            if (income.id === action.payload.id) {
                return action.payload
            }
            return income
        })
    }
    }
});



export default Slice