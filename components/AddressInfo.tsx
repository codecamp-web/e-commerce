

type AddressData = {
    age: string
    date: string
    street: string
    city: string
    state: string
    zip: string
}

type AddressDataProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressInfo({age, date, street,city, state,zip,updateFields}: AddressDataProps) {

  return (
    <div className="bg-white p-10 flex flex-col gap-y-5 rounded
     shadow-md w-full max-w-md" >
        <input type="number" placeholder="age" className="p-3" required 
        value={age} onChange={e => updateFields({age: e.target.value})} />

        <input type="date" placeholder="Date of birth" className="p-3" required
        value={date} onChange={e => updateFields({date: e.target.value})}/>

        <input type="text" placeholder="street" className="p-3" required
        value={street} onChange={e => updateFields({street:e.target.value})}/>

        <input type="text" placeholder="city" className="p-3" required
        value={city} onChange={e => updateFields({city:e.target.value})}/>

        <input type="text" placeholder="state" className="p-3" required
        value={state} onChange={e => updateFields({state:e.target.value})}/>

        <input type="number" placeholder="zip" className="p-3" required
        value={zip} onChange={e => updateFields({zip:e.target.value})}/>
    </div>
  )
}
