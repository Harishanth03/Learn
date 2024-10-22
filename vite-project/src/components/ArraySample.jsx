import React from 'react'

export const ArraySample = (props) => {
    const {items} = props;
  return (
    <div>
        <h2>This Items</h2>
        <ul>
            {items.map((items) => (
                <li key={items.id}>{items.name}</li>
            ) )}
        </ul>
    </div>
  )
}
