

type UserData = {
        emailAddress: string
        firstName: string
        lastName: string
        displayName: string
        password: string
}

type UserDataProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserInfo({emailAddress, firstName, lastName,
    displayName, password, updateFields}: UserDataProps) {
  return (
    <div className="bg-white p-10 flex flex-col gap-y-5 rounded shadow-md w-full max-w-md">
        <input type="text" placeholder="Email address" className="p-3" required
        value={emailAddress}
         onChange={e => updateFields({emailAddress:e.target.value})} />

        <input type="text" placeholder="First Name" className="p-3" required
        value={firstName} onChange={e => updateFields({firstName:e.target.value})} />

        <input type="text" placeholder="Last Name" className="p-3"  required
        value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>

        <input type="text" placeholder="Display Name" className="p-3"  required
        value={displayName} onChange={e => updateFields({displayName: e.target.value})}/>

        <input type="password" placeholder="Password" className="p-3" required
        value={password} onChange={e => updateFields({password:e.target.value})} />
    </div>
  )
}
