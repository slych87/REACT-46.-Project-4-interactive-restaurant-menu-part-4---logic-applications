const Header = (props) => {
    const activeItems = props.items.filter(item => item.active);
    const number = activeItems.length;
    return (
        <header>
            <h2>Order quantity: {number} </h2>
            <h2>To pay: {number * 10 ? `${number * 10} złotych` : `nie kupujesz, to nie płacisz`}</h2>
        </header>
    )
}