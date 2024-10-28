import Slice from "@/context/reducer";
import store from "@/context/store";
import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

function CardExpense({ data }: { data: object }) {
  const [color, setColor] = useState(data.color);
  const [items, setItems] = useState([]);
  const [new_item, setNewItem] = useState(undefined);
  const { addItem, changecolorExpense } = Slice.actions;

  useEffect(() => {
    const view_items = data.items.map((item, k) => {
      return (
        <div
          key={k}
          className="flex flex-row justify-between px-2 py-1 rounded-md "
          style={{ border: "1px solid", borderColor: data.color }}
        >
          <span>{item.name}</span>
          <span>- {item.price}€</span>
        </div>
      );
    });

    setItems(view_items);
  }, [data, color]);

  return (
    <div className={"w-9/12 rounded-sm"} style={{ color: data.color }}>
      <div className="flex flex-row justify-between px-2">
        <span className="text-lg font-semibold">{data.name}</span>
        <div className="flex flex-row space-x-2">
          <label htmlFor="color">Color : </label>
          <input
            type="color"
            id="head"
            name="head"
            defaultValue={data.color}
            onChange={(e) => setColor(e.target.value)}
          />
          {data.color !== color && (
            <button
              onClick={() => {
                store.dispatch(
                  changecolorExpense({ color: color, id: data.id })
                );
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="w-full bg-white py-4 px-4 rounded-sm text-md flex flex-col gap-3">
        {items}
        {new_item ? (
          <div
            className={
              "flex flex-row justify-between px-3 py-2 rounded-md border-dashed border-2  hover:cursor-pointer hover:scale-95 transition-all duration-200 "
            }
            style={{ borderColor: data.color }}
          >
            <div className="flex flex-col space-y-1">
              <input
                type="text"
                placeholder="Name"
                className="text-lg border-2 border-black px-2"
                onChange={(e) =>
                  setNewItem({ name: e.target.value, price: new_item.price })
                }
              />
              <input
                type="number"
                placeholder="Price"
                className="text-lg border-2 border-black px-2"
                onChange={(e) =>
                  setNewItem({
                    name: new_item.name,
                    price: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex w-full flex-col justify-evenly items-end space-y-1 text-white font-semibold">
              <button
                className="bg-green-600 px-3 "
                onClick={() => {
                  store.dispatch(
                    addItem({ id_expense: data.id, item: new_item })
                  );
                  setNewItem(undefined);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                className="bg-red-600 px-3 "
                onClick={() => setNewItem(undefined)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <a onClick={() => setNewItem({ name: "", price: 0 })}>
          <div
            className={
              new_item
                ? "hidden"
                : "flex" +
                  " flex-row justify-center px-2 py-1 rounded-md border-dashed border-2 hover:cursor-pointer hover:scale-95 transition-all duration-200"
            }
            style={{ borderColor: data.color }}
          >
            <span className="text-xl">+</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CardExpense;
