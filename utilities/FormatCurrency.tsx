

const CURRENCY = new Intl.NumberFormat(undefined, {
    currency: "NGN", style:"currency"
})

export default function FormatCurrency(number: number) {
    return CURRENCY.format(number)
}
