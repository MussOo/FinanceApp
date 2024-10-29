

export interface expenses{
    id: number
    name: string
    subtotal: number
    color: string
    items: { name: string; price: number }[]
    
}